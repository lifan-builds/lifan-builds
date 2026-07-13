# lifan-builds Project Guidelines

## Scope

This package documents the repository-specific contract for the `lifan-builds` GitHub profile repository. It does not define an application stack.

## Guidelines Index

| Guide | Purpose |
|---|---|
| [Profile Content](./profile-content.md) | Public profile content and rendering invariants |
| [Verification](./verification.md) | Metadata-only checks for repository changes |

## Pre-Development Checklist

- [ ] Treat `README.md` and `avatar/` as public profile product.
- [ ] Read [Profile Content](./profile-content.md) before changing published content or assets.
- [ ] Do not infer application conventions from badges or linked repositories.
- [ ] Select only the metadata checks that apply to the requested change.

## Quality Check

- [ ] Preserve public files unless the task explicitly requests a publishing change.
- [ ] Confirm local README asset references resolve with their existing case and paths.
- [ ] Preserve intentional HTML alignment, table layout, badges, and external links.
- [ ] Run the checks in [Verification](./verification.md); do not invent build, lint, or test gates.
