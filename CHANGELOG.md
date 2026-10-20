# Changelog

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
