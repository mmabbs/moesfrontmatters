---
title: How I Use LLMs
seoTitle: How I Use LLMs | Notes on AI and LLMs Usage for Workflows and Research
description: A note on what LLM proficiency means in my work.
tags: [ai, llms, workflows, research]
modified: 11-16-2026
created: 06-05-2026
draft: true
---

# How I Use LLMs

I've built custom agents, plugins, skills and MCP servers for LLMs. Some are simple single-purpose utilities, others complex multi-step systems with their own rules, templates, and error handling. My main driver is Claude Code, with occasional assistance from Codex. I also use Claude Desktop and ChatGPT for discussion-only work and light research. 

Some tool repos aren't live yet. Others, like "note-taker", are only as useful as your pre-existing file conventions.

Check back later for more.

## Meta tools that manage Claude Code configuration

Agents themselves can fall short on best practices when creating tools for their use only, and LLM configurations also need maintenance and updates.

- [`/map-build`](https://github.com/mmabbs/mabbs-ai-tools/tree/main/tools/map-build) walks me through the design of a tool as a graph before I build anything. It starts from a single loop, makes every extra part earn its place, sends the design to a skeptic agent for review, and saves it as an interactive page I can step through
- [`/audit-config`](https://github.com/mmabbs/mabbs-ai-tools/tree/main/skills/audit-config) scans every layer of my Claude Code setup (rules, skills, hooks, plugins, MCP servers, memory, CLAUDE.md files, agents) across all my projects, then flags anything stored in the wrong place. It catches the global rule that should only apply to one project and the same note copied into three projects' memory, so my setup stops drifting.
- [`/sanitize-release`](https://github.com/mmabbs/mabbs-ai-tools/tree/main/skills/sanitize-release) gets a personal skill ready for public GitHub by scanning it for secrets, private names, and things that only work on my machine. Then it strips them from a staging copy and writes the README. A second reviewer agent checks what the scanner missed, so nothing goes public with my vault name or an API key still in it.
- [`/check-cc-health`](https://github.com/mmabbs/mabbs-ai-tools/tree/main/skills/check-cc-health) a plugin that does a "health check" on Claude Code itself. It finds broken skill and agent references, stale memory paths, old conversations, leftover temp files, and changes in a Claude Code update that touch my config. Nothing is changed until I've read the report and said yes.
- [`/writing-hooks`](https://github.com/mmabbs/mabbs-ai-tools/tree/main/skills/writing-hooks) builds Claude Code hooks (automatic checks that run before or after Claude uses a tool) and proves they work before they go live. I give one example the hook must block and one it must allow, and those become tests that have to pass. That matters because a broken hook fails silently and looks exactly like a working one.

## Turning repetitive work into repeatable systems

I use Obsidian to store records and outputs of LLM projects, and my organization system has everything you'd expect: tags, frontmatter, inline metadata, schemas, and so on.

- `/take-notes` writes notes using templates of different note types, each with their own frontmatter, body structure, and file naming conventions. 
- `/create-task` to create task notes with priority levels, deadlines, and contextual tags
- `/audit-vault` sweeps my Obsidian vault for broken links, bad frontmatter, unused images and attachments, duplicate content, and empty daily notes. I can point it at one project, my tasks folder, or the whole vault, so cleanup takes one command instead of an afternoon of clicking.
- **file auditor** that validates frontmatter across my Obsidian vaults. It catches broken wikilinks and duplicate content, flags stale daily notes [NOTE: see if this merged into audit-vault, or if it's different enough to warrant inclusion]
- `/wrap-up` closes out a work session when I say "done for now." It names the session, saves the full chat transcript to my vault, runs quality checks on whatever I changed, and files leftover work into the right task note. Then it writes a session note, so tomorrow's session starts from what actually happened, not my memory of it.
- `/split-pdfs` splits books in PDF into individual chapter files, then generates a map-of-content in Obsidian with chapter stubs. Chapter-level PDFs are much easier to parse and query than a 400-page monster.

## Staying informed on events and news

- [`/find-events`](https://github.com/mmabbs/mabbs-ai-tools/tree/main/tools/find-events) pulls upcoming Toronto tech events from Luma, Meetup, Eventbrite, and industry-specific sites and drops them into a date-stamped note. Keyword filtering and date-range limits mean I'm not tab-hopping across six platforms every Sunday.
- [`/fetch-ai-news`](https://github.com/mmabbs/mabbs-ai-tools/tree/main/tools/fetch-ai-news) runs every weekday across the Canadian AI beat — funding, hiring, policy, and market moves — then writes a curated digest with sourced summaries. It deduplicates against the last five notes automatically, so I'm always reading fresh headlines to worry about.

## Learning on my own terms

There's a useful distinction that gets lost in the noise around AI "slop": having an LLM output something for you isn't the same as having it teach you to make it yourself. More broadly, having the agent walk through what it's doing makes you a smarter user, giving you more agency. It also makes you more accountable to the output. 

How do I know if the teaching output itself is reliable? If it's outside my domain expertise, I don't! Source grounding, citations, verifier agents, researching the same topics with different vendors, and LLM-as-a-judge comparisons on the outputs become that much more important. 

- `/visualize` turns any concept I'm trying to understand into one interactive web page I can play with. It doesn't just illustrate the idea: the page actually runs the mechanism, I change an input with a slider or step through it one stage at a time, and every number on screen is really calculated. Writing the plan and building the page are split between two agents, so I can judge whether the result matches what I asked for.
- `/designing-games` turns the agent into a design partner for games still at the idea stage. It brainstorms, digs into mechanics with real theory like flow and MDA, pushes back with alternatives that each come with a stated cost, and checks new ideas against my pillars and past decisions. It also warns me when I'm about to bring back an idea I already threw out, so I'm not going in circles six months into a concept.







