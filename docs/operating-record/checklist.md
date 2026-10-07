# Personal Fitness OS: checkpoint checklist

Scope: `product:personal-fitness-os`. Reviewed 2026-10-06 (America/Los_Angeles; verification 2026-10-07 UTC). Source revision: `7098daf7aee751bd67cfec1d434b5448b93bac97`. Prepared by Codex from repository evidence; accountable owner review remains pending.

Follow the adopted [Product Factory standard](../product-operating-record-standard.md). Start here at each milestone; update affected diagrams/runbooks in the same PR as the source change and copy the [report template](reports/TEMPLATE.md) to a dated checkpoint report. This pack is a substantive backfill, not retroactive approval of a release.

## Source authority and accountability

Durable business/source context: [durable context](../context.md), [README](../../README.md), [canonical product plan](../../plans/personal-fitness-os-product-plan.md) and [validation Project](../projects/personal-fitness-os-validation.md). Canonical identities are listed in [architecture](architecture.md). Product/Workspace contact is Alia; named support, recovery and reviewer assignments require owner confirmation. Roles below identify who must close each gap, not an invented staffing commitment. Criticality: Current critical journeys are preserving research provenance, reproducing descriptive calculations and reviewing product decisions. There is no deployed fitness service to keep online. Participant-data protection and professional review become release gates before any future pilot/application use.

## C0 through C5

| Checkpoint and trigger | Existing deliverable / evidence | Exit status |
| --- | --- | --- |
| C0: intake or adoption | Purpose, audience, ownership references, criticality and scope in context and architecture | Open: owner/recovery assignments and relevant identity gaps below |
| C1: before architecture/tooling change | System context, source/tooling and delivery views in architecture; failure behavior in recovery | Documented baseline; targets and unresolved design choices remain open |
| C2: every implementation/editorial milestone | Concrete setup, verification, release/correction and recovery procedures; dated backfill report | Mechanical checks scoped in report; broader content and recovery evidence remain open |
| C3: before public release, paid pilot or production promotion | Candidate SHA/artifacts, applicable reviews, rights/access, rollback/correction and recovery rehearsal | Hold until applicable gaps and actual owner signoff are recorded |
| C4: after release and agreed observation window | Actual tag/edition/artifact hash, destination/environment, smoke/readability result, observations and MetadataDB acknowledgement | Unknown for prior distribution; this backfill performs no release |
| C5: change, handoff, recovery drill, dormancy or retirement | Updated record, custody/obligations, tested restoration and receiving-maintainer acceptance | Open: independent recovery and handoff not tested |

Completed deliverables, not completed checkpoint approvals:

- [x] [Architecture](architecture.md) describes real paths and distinguishes intended, implemented and observed claims.
- [x] [Operations](operations.md) provides repository-specific setup, verification, delivery, correction and maintenance steps.
- [x] [Recovery](recovery.md) documents failures, rebuild order, missing custody/targets and acceptance criteria.
- [x] [Dated report](reports/2026-10-06-backfill-C0-C2.md) records exact source and actual limited checks.
- [ ] Confirm role assignments and criticality/target decisions.
- [ ] Rehearse independent recovery and resolve applicable release gaps.
- [ ] Obtain scoped human Signoff and, after real release, preserve receipt/observation evidence.

## Open gates

Every item is **unknown or incomplete**, unless the linked report later supersedes it. The owner sets calendar due dates at milestone planning; none are invented here. Until then, the named gate is the deadline and stays open.

| Gap | Responsible role | Required by gate | Required evidence/action |
| --- | --- | --- | --- |
| 1 | Product / Alia | C0 and C3 | Confirm trainer participation, responsibility, rights and commercial terms; all remain proposals in the plan. |
| 2 | Architect / Product | C1 before application implementation | Select approved component scope, data classification/retention, hosting/accounts, integration contracts and reliability targets. |
| 3 | QA / professional content reviewer | C3 before participant use | Complete the plan’s review/validation gates; calculation reproducibility is neither clinical validation nor customer demand evidence. |
| 4 | Recovery owner / Alia | C3 and C5 | Identify original PDF and independent research/source backup, approve RTO/RPO and test a second-maintainer restore. |
| 5 | Release owner | C3 and C4 | Define the eventual release/data/rollback path and then save actual deployment or course-delivery evidence. |

## Maintenance rule

At a source/toolchain/dependency, ownership, rights, data or distribution change, update only the affected record and add a new report. Keep previous reports intact. Document `not-applicable` with a reason, separate `documented` from `verified`, and keep credentials/private source content out of operational evidence. Link this pack into MetadataDB through its reviewed ingestion path; catalog acknowledgement remains unknown until returned. Recovery documentation stays usable locally even when the catalog is unavailable.

## Publishing decisions at each checkpoint

Use the [project publishing guide](../publishing/README.md) and [dated platform reference](../publishing/platform-guide.md) alongside this checklist. Record actual choices and evidence in the milestone report; this guide does not approve a launch.

| Gate | Publishing evidence to record |
| --- | --- |
| C0 | Intended reader, original value, first offer, accountable author/business owner and identity/rights questions |
| C1 | Formats/channels, distribution/exclusivity choices, data/access responsibilities and proposed economic experiment |
| C2 | Reviewed source/sample, final-format preparation, cover/metadata, accessibility and delivery/correction procedure |
| C3 | Current platform-rule check, exact candidate/hash, applicable rights/content approvals, preview/proof, economics and scoped owner signoff |
| C4 | Actual edition/offer, listing/delivery receipt, observations and MetadataDB acknowledgement after release |
| C5 | Corrections, price/terms and content review, support/cadence, channel changes and independently recoverable source/assets |

## Current documentation verification

Use the [committed checker and locked setup](../../tools/docs-validation/README.md) for C2 and receiving-maintainer C5 verification. The [2026-10-07 review follow-up](reports/2026-10-07-review-follow-up-C2-C5.md) records the current checked scope, review corrections and tooling dependency coverage. Retain earlier reports as historical evidence.
