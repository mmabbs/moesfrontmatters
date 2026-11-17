---
title: How I Use LLMs
seoTitle: How I Use LLMs | Notes on AI and LLM Usage for Workflows and Research
description: A note on what LLM proficiency means in my work.
tags: [ai, llms, workflows, research]
modified: 11-17-2026
created: 06-05-2026
draft: false
---

# How I Use LLMs

I've built custom agents, plugins, skills and MCP servers for LLMs. Some are simple single-purpose utilities, others complex multi-step systems with their own rules, templates, and error handling. My main driver is Claude Code, with occasional assistance from Codex. I also use Claude Desktop and ChatGPT for discussion-only work and light research. 

Some tool repos aren't live yet. Others, like "take-notes", are only as useful as your pre-existing file conventions.

Check back later for more.

## Building and maintaining my Claude Code setup

Agents can fall short on best practices for creating tools. Their configurations also need maintenance and updates.

- [`/map-build`](https://github.com/mmabbs/mabbs-ai-tools/tree/main/tools/map-build) walks me through the design of a tool as a graph before I build anything. It starts from a single loop, makes every extra part earn its spot, sends the design to a skeptic agent for review, and saves it as an interactive page. I can see every part, how they talk to each other, and in what order, so a simple tool stays simple and a complex one gets the structure it needs.
- [`/audit-config`](https://github.com/mmabbs/mabbs-ai-tools/tree/main/tools/audit-config) scans every layer of my Claude Code setup (rules, skills, hooks, plugins, MCP servers, memory, CLAUDE.md files, agents) across all my projects, then flags anything stored in the wrong place. It also checks for poorly scoped and duplicated rules and memories. That keeps Claude from working off contradicting instructions or unneeded context.
- [`/sanitize-release`](https://github.com/mmabbs/mabbs-ai-tools/tree/main/tools/sanitize-release) prepares a personal skill/tool for GitHub by scanning it for secrets, private names, and things that only work on my machine. Then it strips them from a staging copy and writes the README. A second reviewer agent checks what the scanner missed, so nothing goes public with my vault name or an API key still in it.
- [`/check-cc-health`](https://github.com/mmabbs/mabbs-ai-tools/tree/main/tools/check-cc-health) does a "health check" on Claude Code itself. It finds broken skill and agent references, stale memory paths, old conversations, leftover temp files, and changes in a Claude Code update that touch my config. I catch those before they worsen the output.

## Turning repetitive work into repeatable systems

I use Obsidian to store records and outputs of LLM projects, and my organization system has everything you'd expect: tags, frontmatter, inline metadata, schemas, and so on.

- `/take-notes` writes notes to my Obsidian vaults using templates of different note types, each with their own frontmatter, body structure, and file naming conventions. Every note of a type with the same structure speeds up file and content searches.
- `/create-task` creates task notes with priority levels, deadlines, contextual tags, and related files. Task notes lean on other types for context, so that consistency maintains interconnectedness and readability.
- `/audit-vault` sweeps my Obsidian vaults for broken links, bad frontmatter, unused images and attachments, duplicate content, and empty daily notes. I can point it at one project, my tasks folder, or the whole vault, so cleanup takes one command.
- `/wrap-up` closes out a work session when I say "done for now." It names the session, saves the full chat transcript to my vault, runs quality checks on whatever I changed, and files leftover work into the right task note. Then it writes a session note, so tomorrow's session starts from what actually happened, not my memory of it.
- `/split-pdfs` splits PDFs into individual chapter files, then generates a map-of-content in Obsidian with chapter stubs. Chapter-level PDFs are much easier to parse and query than a 400-page monster.

## Staying informed on events and news

- [`/find-events`](https://github.com/mmabbs/mabbs-ai-tools/tree/main/tools/find-events) pulls upcoming Toronto tech events from Luma, Meetup, Eventbrite, and industry-specific sites and drops them into a date-stamped note. Keyword filtering and date-range limits mean I'm not tab-hopping across six platforms every Sunday.
- [`/fetch-ai-news`](https://github.com/mmabbs/mabbs-ai-tools/tree/main/tools/fetch-ai-news) runs every weekday across the Canadian AI beat — funding, hiring, policy, and market moves — then writes a curated digest with sourced summaries. It deduplicates against the last five notes automatically, so I'm always reading fresh headlines.

## Learning on my own terms

Having an LLM output something for you isn't the same as having it teach you to make it yourself. How do I know when its output is reliable? If it's outside my domain expertise, I don't! Source grounding, citations, verifier agents, researching the same topics with different vendors, and LLM-as-a-judge comparisons become that much more important. 

- `/visualize` turns any concept I'm trying to understand into one interactive web page that does more than just illustrate the idea: it runs the mechanism, allows me to change the input with a slider or step one stage at a time, and updates numbers and state in real time. Writing the visualization plan and building the page are split between two agents, so I can judge the results against the plan.
- `/designing-games` turns the agent into a design partner for games still at the idea stage. It brainstorms, digs into mechanics with real theory like flow and MDA, pushes back with alternatives that each come with a stated cost, and checks new ideas against my pillars and past decisions. It also warns me when I'm about to bring back an idea I already threw out, so I'm not going in circles six months into a concept.

Better still, having the agent walk through whatever it's doing makes you a smarter user. Switching from the chatbot to the terminal helped here, because it lets you see the agent's thinking, work, and tool calls. You get more agency in its choices, and you're more accountable for the output. It also helps you separate the hype of AI from its current reality: **the more you use LLMs the *smart* way, the more you realize just how unfinished the output really is without human input and judgment.**




