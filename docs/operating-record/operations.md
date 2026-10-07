# Personal Fitness OS: operating procedures

Scope: `product:personal-fitness-os`. Reviewed 2026-10-06 (America/Los_Angeles; verification 2026-10-07 UTC). Source revision: `7098daf7aee751bd67cfec1d434b5448b93bac97`. Prepared by Codex from repository evidence; accountable owner review remains pending.

Source authority: [durable context](../context.md), [README](../../README.md), [canonical product plan](../../plans/personal-fitness-os-product-plan.md) and [validation Project](../projects/personal-fitness-os-validation.md). The dated [backfill report](reports/2026-10-06-backfill-C0-C2.md) scopes verification.

## Research setup and reproducibility

Clone `https://github.com/aliawilkinson/fitness.git` and verify the default branch, currently `codex/reddit-demand-research`. Make a separate feature branch for every milestone. Read the README and canonical product plan, then the scoped decision/research documents. Git, Markdown tools and Python 3 for the descriptive calculation are sufficient for current work.

Run from the repository root:

```sh
python3 research/2026-09-13-us-market-gap/calculate.py
git diff -- research/2026-09-13-us-market-gap/calculated-results.json
```

The script checks source IDs, unique measures, ranges and known calculation results. For a pure restoration the output should match committed bytes; for a research revision review changed source, measurements and output together. Its assertions do not establish current source accuracy, market demand, health efficacy or professional approval. Retain evidence labels and date limits in the report.

## Review and delivery gates

Use [validation Project](../projects/personal-fitness-os-validation.md) and the plan's staged gates before a broader software build. Confirm trainer agreement, content responsibility, permitted brand/source use and actual participation before representing proposals as an operating service. Record real interviews/trial outcomes separately from hypotheses. Existing research and curriculum documents do not prove that a pilot occurred.

Before a participant-facing course or application release, complete professional review, intended user scope, privacy/access, consent/retention, content versioning, export/deletion and support escalation. The owner and Architect must define actual environments, Component contracts, configuration/secret locators, delivery/rollback and recovery. None can be inferred from planned Component names. This backfill adds no application, authentication, payments, provider resources or outreach.

C4 starts only after a real approved course delivery or deployment. Record candidate/source version, actual artifact/environment, checks, reviewer and immutable receipt; attach MetadataDB acknowledgement when accepted. A planned date or a published research report is not app deployment evidence.

## Maintenance, access and retirement

`person:alia` owns the Product; the proposed trainer/engineer arrangement is not an accepted assignment. GitHub access, delegated backup custodian and cost/renewal details remain unknown. Revisit evidence freshness and hypotheses when a decision depends on them, update the appropriate decision record, and preserve superseded reasoning. Keep participant/customer health records and secrets out of research Git history and catalog metadata.

The original checkout contains an untracked business-plan PDF. The backfill preserves it in place; its custody must be included in backup/handoff. Fees, source subscriptions, domain/provider accounts and trainer payments remain proposed/unknown until confirmed. If retired before implementation, preserve the research and decision history plus original assets, record why validation stopped and identify the owner for any future revival.

## Publishing and commercial preparation

Follow the [project publishing guide](../publishing/README.md) to select a reviewable first offer and preparation milestone. The [dated platform reference](../publishing/platform-guide.md) supplies external channel guidance; recheck it and current official rules at C3. Keep channel fees/terms separate from project assumptions, record owner-selected price/budget/outcome thresholds, and preserve actual publication/delivery evidence only after a real release. This work prepares decisions and assets; account signup, outreach, payments and publication require their own authorized scope and the existing project approvals.

## Dependency maintenance

The current source has no supported external dependency root for Dependabot; language/OS runtime upkeep remains a maintainer responsibility. See the [C2/C5 dependency audit](reports/2026-10-06-dependency-maintenance-C2-C5.md). Re-audit supported package manifests, build/export installers and hidden GitHub Actions whenever tooling changes; add the correct ecosystem at each actual root before declaring coverage. Review dependency PRs through the existing release gates.
