---
title: How I Use LLMs
seoTitle: How I Use LLMs | Notes on AI and LLMs Usage for Workflows and Research
description: A note on what LLM proficiency means in my work.
tags: [ai, llms, workflows, research]
modified: 11-14-2026
created: 06-05-2026
draft: true
---

# How I Use LLMs

Over the past 16 months, I've built custom agents, plugins, skills and MCP servers for LLMs — some simple single-purpose utilities, others complex multi-step systems with their own rules, templates, and error handling. I split my time between Claude Desktop and Claude Code (CC), depending on whether I need the CLI as a workflow layer via Obsidian (AKA the greatest note-taking app of all time). Gemini handles quick, targeted searches, while NotebookLM handles source-grounding.

These clankers have a lot of loose bolts. Non-persistent memory, hallucinations, confabulations, fake sourcing, etc. The list goes on. As a result, my tools and workflows are built with a harness—the context engineering that results in rules, templates, and guardrails helping keep the LLM on track with what it's supposed to do. Some of my tools are harnesses themselves.

Even with a solid harness, we're at the mercy of backend wiring [^1]. I'd rather have Claude make space for me to do my own thinking than have it do the thinking for me:

## Turning repetitive work into repeatable systems

### Admin Assistant

I use Obsidian for *everything*, and my organization system has everything you'd expect: tags, frontmatter, inline metadata, schemas, and a graveyard of unprocessed notes. Claude Code shines in this area. It helps me keep my plugin count down, and, most importantly, fuels my misguided dream of maximum note interconnectedness.

#### Tools

- A **note-taker** built around templates by note type, following frontmatter, body structure, and file naming conventions. The bread and butter of bread and butter tasks
- A **file auditor** that validates frontmatter across my Obsidian vaults. It catches broken wikilinks and duplicate content, flags stale daily notes
- A **task creator** for spinning up tasks with priority levels, deadlines, and contextual tags
- A **task auditor** that sweeps the vault for inline tasks I've tagged `#claude` and consolidates them into per-project master lists, wikilinked back to the source. I drop task markers wherever I happen to be working — without a sweep they'd stay buried in random notes
- A **pdf-handler** — the workhorse for text and table extraction, merging, splitting, OCR, and form filling. Anything involving pulling structured data out of a PDF starts here
- A **pdf-splitter** that breaks full PDF books into individual chapter files, then generates an Obsidian MOC with chapter stubs. Chapter-level PDFs are far more useful for targeted queries than dumping in a 400-page monster.

## Researching Faster, Vetting Harder

### Research Assistant

When I need to get smart on a new space fast, keep up with industry news and events, or dig deeper on some topic framing, I use AI to pull, organize, and synthesize reams of information, sparing me the Easter Egg hunt across paywalled articles. Even then, context drift, poor attribution, and fabricated sourcing never stop being a problem. Every research-based tool has an "integrity gate", where the LLM must quote lines and answers obscure questions about the text to prove it read the material.

#### Tools

- A **research auditor** that checks for fabricated sources and ensures there's a source for every claim made. I won't even bother reading long LLM output until the auditor does its work 
- A **Graph of Verification-based argument parser** [^2] that extracts every claim from aggregated and paraphrased research, maps the dependency chain between them, and checks whether each conclusion actually follows from its premises. More valuable for academic sources, but super helpful when rhetoric buries the argument
- An **events scraper** pulls upcoming Toronto tech events from Luma, Meetup, Eventbrite, and industry-specific sites and drops them into a date-stamped note. Keyword filtering and date-range limits mean I'm not tab-hopping across six platforms every Sunday
- An **[AI industry news scraper](https://github.com/mmabbs/mabbs-claude-skills/tree/main/skills/ai-news)** runs every weekday across the Canadian AI beat — funding, hiring, policy, and market moves — then writes a curated digest with sourced summaries. It deduplicates against the last five notes automatically, so I'm always reading fresh headlines to worry about 
- A **market intelligence radar** for finding product/service gaps in areas of interest. It scans sites like Reddit to surface unmet needs and emerging trends and synthesizes signals through strategic frameworks (JTBD, competitive mapping, Blue Ocean). 

## Learning on my own terms

### Teaching Assistant

Research tells me what's out there. A teaching assistant helps me understand it. If I want something built and care enough about the skill required, I'll use the LLM to teach me the skill. 

The assistant helps me break down unfamiliar concepts in ways that match how I actually learn: visual breakdowns and structured comparisons, worked examples I can interrogate, and analogies to adjacent domains I know. All of which are based on verifiable sources that I manually review. I'm a huge fan of the "infinite canvas" of a web page, so I tend to make interactive HTML pages that structure deep dives through progressive disclosure [^3], accessible via a toggle. 

How do I know if the teaching output itself is reliable? If it's outside my domain expertise, I don't! This is when source grounding and harnesses become that much more important. 

#### Tools

- A **game design primer** that breaks down design concepts through multiple lenses (Schell/Koster perspectives, player experience, designer intent). It has a "working designer" mode that starts from the design problem a concept solves rather than its definition
- A **coding concept primer** for CLI commands and Python syntax. Explanations layered with everyday analogies, visual diagrams, practical gotchas, and comparisons to JavaScript (which I know)
- A **Python "paired programming" partner** that teaches through real projects. I drive, while it offers explanations, live code runs to show cause and effect, gotchas that trip up JS developers, and learns to dial back guidance as my skills grow across sessions

---

There's a useful distinction that gets lost in the noise around AI: having an LLM produce something for you isn't the same as having it teach you to make it yourself. I'm learning Python, in a way that leverages my knowledge of JavaScript, by building something I actually need (a dashboard that centralizes the progress of various projects). Even without the intent of making something yourself, having an LLM walk through what it's doing makes you a smarter user. It gives you more agency. It also makes you more accountable to the output. 

Going beyond the chatbot has helped separate the hype from the reality, the optimism from the doomerism of AI.

> **The more you use LLMs the *smart* way, the more you realize just how unfinished the output really is. You need human input and judgment at every step.** 

Intent and effort matter. So does knowing where your judgment ends and an expert's begins. 


[^1]: I once asked Claude, in a fresh context window outside a project, to scan for rogue processes that were overheating my laptop. Its response? A poem about the frailties of old age... 

[^2]: A framework that parses arguments into individual lines/blocks to see how the reasoning chains together (or not).

[^3]: "Depth on demand", where you show only the essential information upfront, then reveal additional detail or complexity as the user needs it. It reduces cognitive load by not overwhelming people with everything at once. 
