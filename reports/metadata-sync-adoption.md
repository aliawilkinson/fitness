# MetadataDB source synchronization adoption

Disposition: **hold for reviewed integration and activation**. No deployment or provider mutation was performed.

This repository now carries a complete `.product-factory/metadata-db.registration.json` source bundle and a source-change notification workflow. Stable Product identity and existing Component memberships are retained. MetadataDB remains the owner of canonical priorities, ownership, reviews, commercial information and environment/account bindings. Its scheduled reconciler reads committed source even if notification fails; a notification is not canonical acceptance.

Before activation, merge the reviewed MetadataDB source-reconciliation implementation and canonical bindings, approve this source in its registration allowlist/matrix, and configure `METADATA_DB_REPOSITORY` plus a scoped `METADATA_DB_TOKEN`. Keep token values out of source and catalog records. The current GitHub Actions billing/limit condition must be resolved before hosted verification. Compare the eventual canonical receipt or registration diff with the pinned source evidence before signoff.

The implementation plan, audit, dependencies and operational instructions live in MetadataDB at `docs/portfolio-synchronization.md`. The existing project checkout was preserved; these changes were prepared in an isolated adoption worktree.

Fitness is `product:personal-fitness-os`. Its thirteen Components distinguish the existing research/curriculum drafts from twelve planned software/service boundaries. The default source branch is `codex/reddit-demand-research`. The local business-plan PDF is fingerprinted in MetadataDB, but remains untracked and has no verified independent backup. The source notification does not publish a paid service or authorize a pilot.
