# Changelog

## 2026-10-27

Claude setup only. No site changes. None of these files are in git. Backups are in `archived/` with a `2026-10-27-` prefix.

- Rewrote `.claude/rules/impeccable.md`. It now picks the Impeccable stage from the kind of request (`shape`, `init`, the bare menu, new-work, `critique`, the fix and refine commands, `live`, `document`, `doctor`), and keeps the old run-time rules.
- Added `.claude/rules/tool-adoption.md`: map a tool from its own source before any rule, memory or hand-off routes Claude to it.
- Emptied the `rules` list in `.claude/context-injector.json`. The hook still reads the file.
- `CLAUDE.md`: "Design and Brand" points at the Impeccable rule instead of the global reference. "Rules That Bite" points at the tool-adoption rule.
- Moved `~/.claude/references/impeccable-design-commands.md` into `archived/`. Nothing else names it.
- Added `.claude/scripts/route-test.sh` and `route-prompts.txt`. Two passes on the new rule scored 8/8. A control run with the old rule scored 2/8.

## 2026-10-22

Branch `style/explore-sh-style` (not merged or pushed), plus one hotfix on `main` (`80d8bd7`, pushed and deployed).

- **Hotfix on `main`:** the About page collapsed on phones. Its 3-column grid had no breakpoint, so at 390px the page rendered 480px wide with a 0px text column. The grid now applies on desktop only, and the photo stacks above the text on tablets and phones. Checked from 320px to 1440px on the live site.
- Created `style/explore-sh-style` and merged `style/font-test-zilla-satoshi` into it.
- Swapped the palette to Scout & Harness's: warm charcoal `#24211d` base with cream `#f1eadf` text (flipped in light mode), one ochre accent (`#c9913b` dark, `#76531b` light), and pine `#5e7d68`. Variable names are unchanged; only values moved. Every text colour passes WCAG AA.
- Adopted S&H's flat rule: removed the gradient wash, hover glows and decorative gradients. Image scrims stay, retinted to charcoal.
- Ochre at rest now marks only "Frontmatters", award boxes and the contact email. The role line, PDF badges, film meta labels, warning callouts and the RSS bar went neutral. The accolade moved from rose to ochre.
- Links are cream (charcoal in light mode) with an ochre underline in running text.
- Callouts read theme colours instead of hardcoded hex, so every type passes contrast in both modes. Removed the light-mode blue overrides.
- Home: removed the "Portfolio & Digital Garden" eyebrow. The role line is now sentence case at body size. The title scales from 48px to 96px and reads "Moe’s" with a curly apostrophe.
- Reading width: a new `--measure` of 34rem keeps prose near 74 characters per line (it was around 104). Callout boxes match it.
- Section headings on Games, Film & TV and Marketing are cream and one size. A leftover rule had turned them grey. "New Dog, Old Tricks" (Games) and the Otter Side case study (Marketing) are staged as larger lead pieces.
- Focus ring and text selection now use the palette, and the focus ring no longer morphs on keypress. Removed unused colour tokens and a dead decorative hatch.
- Content: placeholder for the home page's gen-AI stance sentence (not ready to publish), and removed the stance callout from home.
- `DESIGN.md` and `PRODUCT.md` still describe the old lichen/slate palette. Update them before merging.

Later the same day, still on `style/explore-sh-style` (not merged or pushed):

- One text edge: prose, the home role line, callout boxes and award boxes all stop at the 34rem measure. About's "On LLMs" callout lines up with its text column (`d085f5d`).
- Film & TV: each poster has a caption with title, year and role, visible on every device. The details overlay also opens on keyboard focus. Clicking a poster now reaches its link; an invisible overlay had been catching the click.
- Touch screens: small controls get an invisible 44×44px tap area without changing how they look. Mouse users are unaffected (`facaffc`).
- Footer: a local plugin in `plugins/footer/` replaces Quartz's. Every page ends on an AI · Games · Film & TV · Marketing nav, "Get in touch:" with the email, and GitHub · LinkedIn. "Created with Quartz" is gone. The footer was removed from `quartz.lock.json` because the build links the local plugin itself (`2ade745`).
- Backlinks are hidden on Home, AI, Games, Film & TV, Marketing and About.
- The 404 page sits in the page grid with the site's heading and footer. Short pages no longer leave a gap above the footer (`4c84917`).
- "Spec Only" badges on game project pages are a quiet grey label instead of a pulsing ochre pill. Heading levels no longer skip on project pages and Bonafides. Removed unused hero-banner styles (`1447af9`).
- Marketing's NDA note is a note callout instead of a warning (`287c9cd`).
- The Table of Contents heading matches the Backlinks heading. Fixed the sidebar list overflow that showed a scrollbar under both (`4381c73`).
- Re-critique: 23/32 (was 22/32). Full findings are in `claude-files/2026-10-22-critique-run-4-full-findings.md` for review.

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
