# Changelog

## 2026-10-21

Branch `content/ai-projects-and-coming-soon`, fast-forwarded into `main` and deployed (`0680e38`). The `style/font-test-zilla-satoshi` branch is pushed to GitHub but not merged.

- Moved the uncommitted content work off the font branch onto its own branch cut from `main`, so the font test stays content-free.
- Added project pages `eval-suite`, `ins-intake` and `script-asst`, the `coming-soon-ai` page, 17 screenshots in `site-assets/`, and the SamSara's Edge PDF at `site-assets/artifacts/sse-cinematic.pdf`.
- Pointed SamSara's Edge's PDF button at the new PDF. It had linked to `/coming-soon`, which no longer exists.
- Retired the `bark`, `harriet` and `prom-night` writing samples, and edited the homepage, About Me, AI, Games, Marketing, the coming-soon pages, four project pages and several digital-garden pages.
- Set How I Use LLMs to `draft: true` while it's being reworked. Pages that link to it will lead nowhere until it's back.
- Moved `pop-ups.md` from `digital-garden/` to the top level of `content/`, so it no longer shows in the digital-garden listing. Its links use the `[[pop-ups#^…]]` form and still resolve. Cleared its `aliases`.
- Build skip rules: added `drafts/` to `.gitignore`, which the build honours. The build doesn't read `.git/info/exclude`, so that alone didn't hide the folder. `ignorePatterns` keeps the folder rules `private`, `templates` and `.obsidian`, plus filename rules including `**/*draft*.md`. Dropped `draft-pages` (no such folder) and the `coming-soon` and `pop-ups` rules that had hidden pages other pages link to. Tested with the build's own matcher: it publishes the same 71 files as before, and none come from `drafts/`, `private/` or `.trash/`.
- `content/.trash/` (Obsidian's trash) stays uncommitted on purpose.

## 2026-10-20

Branch `style/font-test-zilla-satoshi` (not merged or pushed).

- Swapped the type system: Zilla Slab (500, 600) for headings and Satoshi (400, 500, 700) for body text. Zilla Slab and JetBrains Mono load from Google Fonts via `quartz.config.yaml`; Satoshi loads from Fontshare via `@font-face` in `quartz/styles/custom.scss`. Playfair Display and Bricolage Grotesque are no longer loaded.
- Made heading sizes fluid between 375px and 1280px windows: `h1` and hero title 32→60px (600), `h2` and `.section-title` 24→36px (500), `h3` 18→24px (500). Removed the fixed phone sizes for `h1`, `h2` and the hero title.
- Body text line height 1.65 → 1.6.
- Moved project-page meta labels (13px/500), meta values (15px/400), status badges (13px/500) and the footer (14px/400) to Satoshi.
- Hero role line ("AI Automation Specialist | …"): Satoshi 700 at 12px, uppercase, with 32px of space above and below at every width.
- Hid Quartz's heading link icon inside the hero title. It was wrapping onto its own empty line and adding about 55px under the headline.
- Removed the hover side-bar accents from `.nav-card` and `.artifact-card-link`. Neither card is used on a published page.
- Updated `DESIGN.md` typography to match (the file is excluded from git, so the change is local only).
