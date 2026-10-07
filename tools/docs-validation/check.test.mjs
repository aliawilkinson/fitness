import assert from 'node:assert/strict';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const checker = fileURLToPath(new URL('./check.mjs', import.meta.url));
const run = (...args) => spawnSync(process.execPath, [checker, ...args], { encoding: 'utf8' });
async function fixture(fn) {
  const dir = await mkdtemp(path.join(os.tmpdir(), 'operating-record-check-'));
  try { await fn(dir); } finally { await rm(dir, { recursive: true, force: true }); }
}

test('valid Mermaid and relative file targets pass without checking external URLs or anchors', async () => {
  await fixture(async dir => {
    await writeFile(path.join(dir, 'target.txt'), 'target');
    await writeFile(path.join(dir, 'record.md'), '[target](target.txt#section) [external](https://example.invalid) [anchor](#missing)\n```mermaid\nflowchart LR\n  A --> B\n```\n');
    const result = run(dir);
    assert.equal(result.status, 0, result.stderr);
    assert.deepEqual(JSON.parse(result.stdout), { files: 1, diagrams: 1, links: 1, failures: [] });
  });
});

test('a missing file and invalid Mermaid both fail the command', async () => {
  await fixture(async dir => {
    await writeFile(path.join(dir, 'record.md'), '[missing](missing.md)\n```mermaid\ninvalid diagram type\n```\n');
    const result = run(dir);
    assert.equal(result.status, 1, result.stderr);
    assert.deepEqual(JSON.parse(result.stdout).failures.map(f => f.type), ['mermaid', 'link']);
  });
});

test('missing arguments and empty scopes fail instead of reporting a false pass', async () => {
  assert.equal(run().status, 2);
  await fixture(async dir => assert.equal(run(dir).status, 2));
});
