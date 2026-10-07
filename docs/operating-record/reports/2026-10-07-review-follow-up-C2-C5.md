# Review follow-up: C2/C5

Reviewed 2026-10-07 UTC by Codex. Source parent: `0e54aa3658f235030ceffd0ec7501d6ed54644e1`. Scope: the operating-record PR and its documentation checker. This dated report supersedes earlier validation evidence for the current pack while preserving historical results.

## Review disposition

- [Codex finding](https://github.com/aliawilkinson/fitness/pull/3#discussion_r4203592794): Point the standard at the actual context source.
- [Codex finding](https://github.com/aliawilkinson/fitness/pull/3#discussion_r4203592801): Commit or document the validation runner.

The local standard now maps context changes to `docs/context.json`. The checker implementation, exact development dependencies, lockfile, tests and invocation are committed, so a receiving maintainer can reproduce C2 verification. Recovery also selects the recorded SHA explicitly.

The adopted context standard uses the existing local authority. Recovery procedures select and verify the intended commit before rebuilding. These changes document the procedure; no off-device restore or publication approval is claimed.

## Reproducible verification and dependency coverage

[The committed checker](../../../tools/docs-validation/README.md) uses a scoped, locked npm install. Its fixtures prove successful parsing/link checks, failure on invalid diagrams or missing targets, and failure on empty input. [Final validation evidence](review-final-validation.json) records the exact Markdown file list and hashes, command, tool versions, counts and UTC time. External URL/anchor validity, rendering, business truth and recovery remain outside that check.

The earlier N/A audit is superseded for documentation tooling only: npm dependencies now exist at `tools/docs-validation`. The source Ruby/Python/manuscript boundary is unchanged. The weekly Dependabot configuration is checked with Ruby’s standard YAML parser against actual manifest roots. No automatic merge or publication is enabled by this configuration. GitHub update-job success must be observed after the normal default-branch merge.

The initial temporary Mermaid 11.12.0 was replaced for this committed checker with 11.17.2 after auditing. The remaining audit finding is one low-severity KaTeX advisory, represented by two dependency entries: [GHSA-238p-pmpm-9mq7](https://github.com/advisories/GHSA-238p-pmpm-9mq7). It requires an already polluted prototype plus rendering attacker-controlled math into a web page. This local checker calls `mermaid.parse` only and does not render or insert HTML; that affected operation is outside its scope. Preserve the upstream dependency range, record the finding, and re-audit at the next tooling change/C5 review or before enabling rendering. No force-downgrade or untested dependency override was applied.

## Signoff and remaining boundaries

Signoff: **ship the scoped documentation/tooling corrections after the linked checks pass**. The known low-severity rendering advisory is recorded with the restricted parser-only use. This signoff approves source/operating-record integration, not a public edition, participant use, payment setup or release. Existing editorial, privacy, rights, access and independent recovery gates remain as documented. Original working copies and uncommitted assets are preserved.
