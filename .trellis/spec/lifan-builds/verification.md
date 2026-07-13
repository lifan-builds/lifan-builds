# Verification

## Repository Model

This is a metadata-and-content repository. It has no evidenced application source tree, dependency manifest, build, lint, type-check, test, deployment, or architecture contract.

Do not add or claim application validation commands based on README badges or linked projects.

## Required Checks

For metadata-only changes:

1. Inspect `git status --short` and the complete diff.
2. Run `git diff --check`.
3. Confirm `README.md` and `avatar/` are unchanged unless the request explicitly includes public profile updates.
4. When exact preservation is required, compare their Git blob IDs and modes against the named baseline commit.
5. Confirm every local path referenced by `README.md` exists with matching case, including `avatar/github_profile_banner.png`.
6. Confirm the change introduces no unintended symlink, submodule, nested repository, ignored runtime state, or unrelated untracked file.

For Trellis metadata changes, additionally run the relevant context, task, package-discovery, adapter parsing, hook-target, safe-fixture, and template-integrity checks. These are repository metadata checks, not application build or test commands.
