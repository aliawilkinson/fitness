# Operating-record documentation checks

This local development tool checks the operating-record and publishing Markdown, the adopted standard and this setup guide. It parses fenced Mermaid syntax and verifies simple inline relative file links. It runs offline after dependency installation and does not render diagrams, fetch links or read manuscript contents.

## Reproduce a check

Use Node.js 22 or newer and npm. The review run used Node.js 26.10.0; the committed lockfile pins the npm dependency graph. From the repository root:

```sh
npm --prefix tools/docs-validation ci --ignore-scripts
npm --prefix tools/docs-validation test
npm --prefix tools/docs-validation run check
npm --prefix tools/docs-validation audit
```

`ci` installs development dependencies only in this tool directory. Its manifest pins Mermaid 11.17.2 and jsdom 26.1.0; the lockfile includes transitive integrity hashes. The checker source and positive/negative fixtures are committed beside it. Node.js/npm maintenance remains a maintainer responsibility. Weekly npm Dependabot updates target this independent manifest root.

The check prints JSON with file, parsed-diagram and verified-link counts and any failures. Missing files, invalid diagrams and empty scopes return a nonzero exit. Save fresh evidence for the final candidate with its source revision, command, tool versions, UTC time and scope; retain historical reports as dated snapshots. To obtain JSON without npm command banners:

```sh
npm --silent --prefix tools/docs-validation run check
```

For a different explicit scope, invoke `node tools/docs-validation/check.mjs <path> ...` from the repository root. `--diagrams-only` skips file links. The normal `check` command covers the full maintained pack.

## Limits and maintenance

Relative-link checking covers the pack's simple inline links with relative file targets, excluding fenced examples, external/absolute URLs and fragment-only references. It checks file existence, not anchors, reference-style links, title-bearing/space-containing Markdown targets, external availability or semantic correctness. Mermaid parsing checks syntax, not layout, accessibility or whether a diagram reflects reality. These limits remain explicit in the evidence.

Run the three fixture tests and the real pack checks after any runner or dependency change. Audit findings need a scoped review before accepting an update. The initial temporary Mermaid 11.12.0 used in historical backfill evidence was replaced before committing this tool after an audit; those old reports retain their actual versions. No application runtime or publication workflow depends on this tool.

See [operating procedures](../../docs/operating-record/operations.md) for the corresponding C2/C5 handoff steps.
