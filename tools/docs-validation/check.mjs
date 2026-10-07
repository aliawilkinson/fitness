import { readFile, readdir, stat, access } from 'node:fs/promises';
import path from 'node:path';
import { JSDOM } from 'jsdom';

// Offline syntax parsing only. Mermaid is never asked to render or fetch content.
const dom = new JSDOM('<!doctype html><html><body></body></html>');
globalThis.window = dom.window;
globalThis.document = dom.window.document;
const { default: mermaid } = await import('mermaid');
mermaid.initialize({ startOnLoad: false, securityLevel: 'strict' });

const diagramsOnly = process.argv.includes('--diagrams-only');
const targets = process.argv.slice(2).filter(arg => arg !== '--diagrams-only');
if (targets.length === 0) {
  console.error('Usage: node check.mjs [--diagrams-only] <Markdown file or directory> ...');
  process.exit(2);
}
const files = new Set();
async function collect(target) {
  const info = await stat(target);
  if (info.isDirectory()) {
    for (const name of (await readdir(target)).sort()) {
      if (!['.git', 'node_modules'].includes(name)) await collect(path.join(target, name));
    }
  } else if (target.endsWith('.md')) {
    files.add(target);
  }
}
for (const target of targets) await collect(path.resolve(target));
if (files.size === 0) {
  console.error('No Markdown files found in the requested scope.');
  process.exit(2);
}

let diagrams = 0;
let links = 0;
const failures = [];
for (const file of files) {
  const text = await readFile(file, 'utf8');
  for (const match of text.matchAll(/```mermaid\s*\n([\s\S]*?)```/g)) {
    try {
      await mermaid.parse(match[1]);
      diagrams++;
    } catch (error) {
      failures.push({ file, type: 'mermaid', message: error.message });
    }
  }
  if (!diagramsOnly) {
    const prose = text.replace(/```[\s\S]*?```/g, '');
    for (const match of prose.matchAll(/\]\(([^\s)]+)\)/g)) {
      const url = match[1];
      if (/^(?:[a-z]+:|#|\/)/i.test(url)) continue;
      try {
        const local = decodeURIComponent(url.split('#')[0]);
        if (!local) continue;
        await access(path.resolve(path.dirname(file), local));
        links++;
      } catch {
        failures.push({ file, type: 'link', target: url });
      }
    }
  }
}
console.log(JSON.stringify({ files: files.size, diagrams, links, failures }, null, 2));
if (failures.length) process.exitCode = 1;
