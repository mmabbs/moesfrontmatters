# Session Tasks

Inline tasks to complete during sessions. Check off each one when done.

## Home page (`content/index.md`)

- [ ] Update the `seoTitle` and `description` frontmatter to lead with AI automation, matching the page's "AI Automation Specialist" opening. The current values pitch a producer and writer portfolio across content strategy, games, and screenwriting.
- [ ] Make the list in paragraph two parallel: "tools that check research citations, workflows that automate research, and systems that review and maintain AI configurations." Also remove the back-to-back "research" repetition.
- [ ] Replace "film/tv production, content strategy/marketing, and UX" with "Film and TV production, content strategy, marketing, and UX." Match the nav's "Film & TV" capitalization and drop the slash pairs.
- [ ] Apply the Oxford comma consistently in the paragraph-one sentence: "tools, workflows, and knowledge systems" to match "marketing, and UX."
- [ ] Reword the closing CTA so it doesn't assume the reader already has broken AI workflows. Something like "If you want AI working in your workflow, reach out at..."
- [ ] Fix the mechanical bits in paragraph two: remove the double space after "workflows," and change the curly apostrophe in "what's appropriate" to a straight one.
- [ ] Rethink the title chain "AI Automation Specialist | Writer | Content Strategist | Marketer | Producer."
- [ ] Explore a larger font size for the title chain and "Portfolio & Digital Garden."
- [ ] Discuss a less serif-heavy primary font if the current one feels too odd for the AI positioning.
- [ ] Double check order of navigation

## FitIn Case Study (`content/private/fitin-v7.md`)

- [ ] Outline as a story
- [ ] Think of section titling approach
- [ ] Write third lesson
- [ ] Write conclusion

## Coming Soon page (`content/coming-soon-{domain}.md`)

- [ ] Add space between "Check out what's already live" H3 heading and the redirect links
- [x] Replace the game links on the marketing homepage's coming soon page with other marketing links
- [x] Create domain-specific versions to include domain-related project redirects

## "How I Use LLMs" page (`content/digital-garden/how-i-use-llms.md`)

- [ ] Take out the "My thoughts on GenAI in creative writing" section
- [ ] Review page — consider folding/replacing/removing page altogether (strongest lean); the info will be covered between the AI landing page's overview, portfolio pieces, and "gen-ai-in-arts" post.
- [?] Decide whether to publish this page or unlink it. It's a draft, but About Me and the AI Coming Soon page link to it, so visitors get a 404.

## "My Stance on Generative AI in the Arts" page (`content/digital-garden/gen-ai-in-arts.md`) - **NEW POST!**

- [ ] Brainstorm post
- [ ] Write draft 1
- [ ] Edit draft
- [ ] Publish post

## Broken links (from the 2026-11-10 link check)

Re-check with `npx quartz build`, then `python3 .claude/scripts/check-links.py`.

- [?] Decide whether to publish The Otter Side (`content/projects/the-otter-side.md`, draft) or unlink it. Seven live pages link to it and show a 404: About Me, Games, the games Coming Soon page, and the Grim Rock, Howard, Ollie and SamSara's Edge project pages.
- [?] Decide what to do with the dead links on the Script Asst case study (`content/projects/script-asst.md`). It links to a research note (`research-light-catching-anxiety`) and an appendix that aren't on the site.
- [?] Decide what to do with the Film & TV draft's links to `/projects/prom-night`, `/projects/bark` and `/projects/harriet`. Those pages don't exist.
- [?] Decide whether to delete the unused `.logline-page` styling at `quartz/styles/custom.scss:525-528`. Nothing uses it now that `loglines/` is gone.
