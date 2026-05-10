---
title: How I Use AI
seoTitle: How I Use AI | Notes on AI Usage for Workflows and Research
description: a note on what AI proficiency means in my work. Workflow automation, quality assurance, and custom tooling.
tags:
  - ai
  - workflows
  - research
modified: 2026-05-10T03:42:56
created: 2026-03-14T12:52:13
draft: false
---

# How I Use AI

Over the past 16 months, using Claude Code and Gemini CLI, I've developed custom agents, skills, MCP servers, and plugins for AI to act as an assistant with admin, research and teaching. Some are simple single-purpose utilities. Others are complex, multi-step systems with their own rules, templates, and error handling.

I've used AI as a layer on apps/suites like Notion, Office, and many others, preferring the CLI approach via Claude Code over built-in offerings. For day-to-day use, I prefer Obsidian and have come to love its flexibility. So much so that this site was built using Obsidian (via Quartz 4).

I don't use it to generate art or creative writing. Never mind the subpar quality standard and ethical implications of output that taps into (stolen) copyrighted IP, you sink way more time in fixing AI output than just doing it yourself or hiring a pro. I also don't understand why anyone would want to willingly take the fun out of the here-and-now imaginative exercise that is the creative act, as messy and frustrating as it can often be.

Speaking of messy and frustrating: AI has serious flaws when it comes to veracity and requires a harness to manage them. A large part of why I made complex multi-step systems is tied to managing AI's short-lived memory, fabrications, fake sourcing, and confident claims without evidence. Sure, models now can self-correct mid-"thought", but their reasoning or assumptions might be off. Even then, outputs can get...weird.

> I once asked Claude to scan for rogue processes that were overheating my laptop. It responded with a poem about the frailties of old age...

This wasn't some impromptu "lateral thinking" hinting at hyperthermia. It was a leak from another user's conversation in the cloud. [^1]

Here's how I use AI: 

## Turning repetitive work into repeatable systems

### AI as an Admin Assistant

A lot of knowledge work is the same steps in a different order: pulling research, formatting documentation, migrating metadata, converting files between formats. I build workflows that handle the repetitive parts so I can spend my time on the parts that need judgment.

#### Tools

- A **file auditor** that validates frontmatter properties across my Obsidian vaults against controlled vocabularies, finds broken wikilinks and duplicate content, and flags stale daily notes. It also suggests missing metadata based on file location and content, so a note sitting in Projects/X/ with no project: field gets caught automatically.
- A **task creator** that creates task notes or inline tasks with proper frontmatter, priority levels, and context tags, supporting one-off, bulk, and interactive modes. It's designed to be suggested proactively when a session has open work items, so nothing falls through the cracks between sessions.
- A **task auditor** that finds inline tasks I've tagged `#claude` scattered across the vault and consolidates them into per-project master task lists, with wikilinks back to the source file. This exists because I drop task markers wherever I happen to be working, and without a sweep they'd stay buried in random notes.
- A **note-taker** that uses templates based on note type and writes vault-conformant files with the right frontmatter, body structure and file naming convention. After creation, it scans the generated content for open tasks and offers to convert them into tracked task notes.
- A **pdf-handler** that handles text and table extraction, merging, splitting, page rotation, watermarking, OCR for scanned documents, and form filling. It's the workhorse I reach for when I need to manipulate or pull structured data out of a PDF.
- A **pdf-splitter** that splits full PDF books into individual chapter files, then generates an Obsidian MOC and chapter stub notes for each, all with consistent naming and cross-linking. I built it to prepare reference books for NotebookLM — chapter-level PDFs are more useful for targeted queries than dumping in a 400-page file.

#### Harness

- For **persistent memory**: session logging using the note-taker tool outlining what was discussed, the work done, open questions, and tasks left to do. 
- For **Claude Code:** a combination of CLAUDE.md, rules, memory entries and vault schema files that outline my conventions.

## Testing Big Claims and Smoothing Out the Small Stuff

### AI as a Research Assistant

When I need to get smart on a new space quickly, stay in the know of industry news/events, or want to dig deeper on a writer's framing of a topic, I use AI to pull, organize, and synthesize information faster than I could manually. It lets me spend more time reading and vetting for accuracy and strategic insight rather than clicking through paywalled articles and pages of filler to find the one paragraph that's actually useful. Even then, context drift, poor attribution, and fabricated proof of claims is a perennial issue.

#### Tools

- An **events scraper** that lists various upcoming industry events in Toronto tech from Luma, Meetup, Eventbrite, and industry-specific sites. Scrapes happen in parallel and create a date-stamped Obsidian note with the full listing. Supports keyword filtering and date-range limits so I can narrow to what's relevant without manually checking many different platforms.
- An **industry news scraper** that runs twice weekly to research industry developments across business, design, marketing, games and technology beats, then writes a curated digest note with sourced summaries. It deduplicates against the last five issues automatically, so coverage stays fresh instead of recycling the same stories.
- A **bias-detector** that analyzes news and opinion journalism for bias across five dimensions: fallacious reasoning, rhetorical strategy, source quality, structural balance, and evidentiary rigor. It runs a multi-pass close reading against 61 catalogued fallacies and 16 editorial bias patterns, then outputs a structured analysis with severity ratings and directional leans.
- A **market intelligence** tool that finds product and service gaps in my professional domains. It scans sites like Reddit to surface unmet needs and emerging trends, synthesizes the week's signals through strategic frameworks (JTBD, competitive mapping, Blue Ocean), and lets me run a full opportunity brief on anything worth pursuing.

#### Harness

- A **research auditor** that checks whether cited sources actually support the claims they're attached to.
- A **logical verification tool** that extracts every claim from aggregated and paraphrased research, maps the dependency chain between them, and checks whether each conclusion actually follows from its stated premises.

## Learning with methods that play nice with my brain

### AI as a Teaching Assistant

Research tells me what's out there, while teaching helps me understand it. I use AI to break down unfamiliar concepts in ways that match how I actually learn: visual breakdowns, structured comparisons, analogies to adjacent domains I know, worked examples I can interrogate. When I was studying deckbuilder design, that meant mapping decision trees and reward loops rather than reading a summary. I'm a huge fan of the "infinite canvas" that is a web page, so I tend to make interactive HTML pages that use a combination of words and images through [[pop-ups#^pop-up-2|progressive disclosure]]. 

#### Tools

- A **roguelite deckbuilder teacher** that generates structured game design lessons with deep dives, hands-on exercises, and industry-standard terminology, configurable by audience level and genre spotlight. I built it while studying deckbuilder design patterns so I could get lessons scoped to what I actually needed to learn rather than wading through beginner material or skipping between disconnected resources.
- A **game design primer** that breaks down design concepts through multiple lenses (Schell/Koster perspectives, player experience, designer intent) with real-game examples and Mermaid diagrams, outputting structured reference notes to my vault. It has a "working designer" mode that starts from the design problem a concept solves rather than its definition, which is more useful when I'm trying to think with a concept rather than just look it up.
- A **coding concept primer** that takes any technical concept related to CLI commands and python syntax and produces a layered explanation with everyday analogies, visual diagrams, and practical gotchas, then saves it as a reference note in my vault. It also includes comparisons to similar concepts in JavaScript, which I learned at a coding bootcamp.

#### Harness

- PDFs that I upload as grounding sources, typically in NotebookLM
- Mandatory source citations as proof for claims


> [!question]- Interested in seeing my Claude skills and plugins?
> A selection of these is being cleaned up for public release. I'll link the repos here when they're ready.



---

[^1]: Admittedly, a pretty rare glitch, but it does make a strong case for local LLMs. 