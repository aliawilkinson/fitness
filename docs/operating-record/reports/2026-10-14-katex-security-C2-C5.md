# KaTeX security compatibility: C2/C5

Repository: `aliawilkinson/fitness`. Base `b5dcb13d276a5af24db3e05535cf24fa2a1ce271`; original Dependabot head `c7cde84134c79205f9a820ad3400aeadfc7a9719`. Candidate tool SHA-256 hashes and exact audit comparison are in [the evidence record](2026-10-14-katex-security-evidence.json).

## Change and compatibility decision

The existing Mermaid 12.1.0 proposal still locks vulnerable KaTeX 0.16.47. Add a scoped `mermaid -> katex 0.18.2` override, retain the existing major proposal and set the Node minimum to 22.12 as required by Mermaid/parser. Add regression coverage and update the local maintenance instructions. Remove this override only when the parent supplies a patched compatible version and the same checks pass.

[The upstream advisory](https://github.com/KaTeX/KaTeX/security/advisories/GHSA-238p-pmpm-9mq7) describes inherited options enabling trusted output after another prototype-pollution path. Our safe, local string-only reproduction confirms the old version accepts inherited trust; 0.18.2 rejects it. It does not execute the resulting HTML or prove exploitation in this parse-only tool.

[Mermaid 12](https://github.com/mermaid-js/mermaid/releases/tag/mermaid@12.0.0) changes the Node/browser floor and rendering defaults; this checker calls only `parse`, never layout/render. KaTeX [0.17](https://github.com/KaTeX/KaTeX/releases/tag/v0.17.0) changes an internal extension API and [0.18](https://github.com/KaTeX/KaTeX/releases/tag/v0.18.0) changes internal CSS classes; this tool uses neither. [0.18.2](https://github.com/KaTeX/KaTeX/releases/tag/v0.18.2) supplies the security fix. Rendered diagram appearance, publication output and arbitrary future CSS/extensions are not certified here.

## Actual verification

Node 26.10.0 / npm 11.19.1, isolated temporary snapshot. The four publication repositories have byte-identical validator source and both base/proposed dependency manifests and locks; their real Markdown packs were checked separately using the shared, exactly hashed candidate.

- `npm ci --ignore-scripts --no-audit --no-fund`, `npm test`, and `npm ls --all` passed. Five tests pass, zero skipped: three original positive/negative CLI cases, the inherited-trust regression and normal math/explicit HTTPS compatibility.
- Exact base and original PR audits both report two low affected package entries (KaTeX and its Mermaid parent) for one advisory. Candidate `npm audit --json` reports **zero findings**. No advisory exclusion or version relabeling.
- This repository's maintained pack: 13 Markdown files including the tool guide, three Mermaid diagrams parsed successfully. 69 relative links in the 12 source-pack files resolve against the exact base Git tree.
- The source snapshot intentionally contains only the maintained Markdown pack. Diagram parsing used the existing `--diagrams-only` mode; the separate relative-link pass used the authoritative Git tree. This is **not** a claim that `npm run check` completed in a full repository checkout. The three original checker fixtures still exercise real filesystem link success/failure.
- Resolved registry URLs and SHA-512 integrity verified. No new install-script flags; lifecycle scripts disabled. KaTeX retains its official repository/MIT license; its source-development `prepare: husky` is not executed by this install.

Reproduce in a full checkout from `tools/docs-validation`: `npm ci --ignore-scripts`, `npm test`, `npm run check`, `npm audit`. Exact file hashes in the evidence prevent a later branch update from inheriting this result silently.

## Signoff

**HOLD merge/release** pending explicit owner approval for the major/pre-1.0 compatibility changes and normal independent review/current-head hosted verification. No inline review findings existed when preparation began. Missing hosted validator coverage is not a passed test. This is a manual scoped fix on the existing Dependabot proposal, preserving its original commit and provenance; no new PR, auto-approval or forced update.

No manuscript, editorial decision, publication output, provider setting, workflow permission or deployment changed. Local clean audit does not clear default-branch alerts until reviewed source adoption.
