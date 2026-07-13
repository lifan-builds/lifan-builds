# Profile Content

## Repository Purpose

This repository publishes the GitHub profile for `lifan-builds`. Its primary content is `README.md` and the images under `avatar/`.

## Public-Content Boundary

- `README.md` and every file under `avatar/` are public product, not implementation fixtures.
- Change those files only when a task explicitly requests a profile publishing change.
- Metadata or agent-environment work must preserve their blobs and Git modes exactly.

## Rendering Invariants

- Preserve the centered HTML sections used for the banner, profile presentation, counters, and contact content unless a publishing requirement says otherwise.
- Preserve the existing table structure because it controls profile layout.
- Keep the local banner reference at `avatar/github_profile_banner.png`; verify that the referenced file exists with the same case.
- Preserve existing asset bytes and names. Their encoded formats are compatibility facts, not a convention for future assets.

## External Content

Technology badges describe public profile content; they are not evidence that this repository uses those languages, frameworks, or tools. Linked projects likewise do not establish this repository's architecture.

Badges, counters, and external links are intentional remote content. Preserve their targets and ordering unless a profile publishing task explicitly changes them. Routine repository validation does not require crawling live links.
