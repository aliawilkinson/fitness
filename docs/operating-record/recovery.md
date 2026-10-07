# Personal Fitness OS: recovery and rebuild

Scope: `product:personal-fitness-os`. Reviewed 2026-10-06 (America/Los_Angeles; verification 2026-10-07 UTC). Source revision: `7098daf7aee751bd67cfec1d434b5448b93bac97`. Prepared by Codex from repository evidence; accountable owner review remains pending.

Source authority: [durable context](../context.md), [README](../../README.md), [canonical product plan](../../plans/personal-fitness-os-product-plan.md) and [validation Project](../projects/personal-fitness-os-validation.md). The dated [backfill report](reports/2026-10-06-backfill-C0-C2.md) scopes verification.

## Reconstruct current research

1. Obtain authorized repository access and a known SHA from the retained milestone report. Clone the verified origin and check the correct default/review branch.
2. Verify `plans/`, `decisions/`, research inputs/source ledger and calculation script. Restore the original untracked business-plan PDF from approved independent custody separately; its existence in the working directory is not backup evidence.
3. Use the recorded Python version and run `calculate.py`. Compare `calculated-results.json` against the retained committed result and review a source-to-report reference path.
4. Recover draft/unpushed decisions from independent backup and reconcile them with the owner rather than overwriting current Git state.
5. A second maintainer records elapsed time, missing assets, output hashes, provenance and owner acceptance. Use a new C5 report and keep this evidence distinct from any later app recovery drill.

## Failure behavior and future boundary

| Failure | Current response |
| --- | --- |
| Missing/invalid research input | Stop calculations, recover original inputs, preserve the previous verified result and record the gap |
| External source disappears | Retain citations/dated observations and permitted archived evidence; mark freshness/availability unknown |
| Lost workstation | Restore committed source and independent original assets; document unpushed loss |
| Changed calculation output | Compare source data and script revisions before accepting a new result |

No production application or customer database exists in the inspected source, so runtime HA, measured uptime and database failover are not applicable. Independent document backup, account recovery, approved RTO/RPO and an off-device drill remain unknown. Before building the planned runtime, define data-loss/time targets and recovery by Component/environment at C1, then rehearse them before C3. The local calculation reproducibility check does not complete those future requirements.
