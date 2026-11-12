---
title: AI 
seoTitle: AI Automation Case Studies | Multi-Agent Systems and Evals
description: Problem, build, result. Case studies in multi-agent orchestration, adversarial evaluation, and creative workflow automation.
tags: []
modified: 11-11-2026
created: 09-09-2026
draft: 
---

# AI

A collection of case studies for AI tools and enablement kits.

## Case Studies

These are build write-ups showing how I can scope and ship a working system.

### [Insurance Intake](projects/ins-intake) <span class="heading-label">(email workflow)</span>

> [!ai] Summary
> **What it is:** An AI workflow that reads an insurance brokerage's shared inbox, drafts the record a staff member would normally type out, and sends it to a broker to check. Every email, approval, and correction is logged, and the broker's corrections feed back into the AI's instructions. Demo build, made-up data.  
> **Problem:** Someone reads every email, figures out which client and policy applies, and types a record into the brokerage's main system with dates to follow up. These emails aren't tidy.  
> **My role:** Designer and builder. Build time: 6 days, while learning n8n.  
> **Status:** Working demo, not in production. Nothing is filed until a person approves it.  
> **Outcome:** On a scored test of 12 deliberately messy emails, it got every email's type right, as well as 71 of 72 details. All for about fifth of a cent per email.  
> **Methods:** n8n (self-hosted) · Claude Haiku 5.5 · Gmail · Claude Code

### [Script Assistant](projects/script-asst) <span class="heading-label">(Claude Code plugin)</span>

> [!ai] Summary
> **What it is:** A Claude Code plugin that files a screenwriter's raw ideas into organized Obsidian notes and turns research questions into sourced notes. It doesn't write the script or come up with ideas.  
> **Problem:** A writer's ideas pile up in one place and have to be sorted by hand into the right notes as the story takes shape. A chat assistant can't do that job reliably: it has to be re-briefed every time, and it can't show what it changed.  
> **My role:** I defined the problem from my own writing process, designed the workflow and note system, directed Claude Code agents to build it from my specs, and designed the evals that gate each part.  
> **Status:** As of 2026-10-28, the MVP for *Script Assistant* is built. It covers the Pre-Writing Phase only. Next up is the Writing Phase.  
> **Build:** Opus 5.5 workers wrote the tests and code, directed from Fable 5.1 and Opus 5.5 sessions.  
> **Tools:** Claude Code (plugin host, agents, hooks), Claude Opus 5.5 and Sonnet 5.5 (agents), Obsidian (notes, backlinks, comments), Python (Run manager and Edit guard), Node (the research script)  
> **Methods:** spec-first tests written by a separate worker, bare-model baseline runs, model-judge graders that quote evidence, a skeptic review before the build, 3-of-3 pass gates  
> **Outcome:** On a real project, one migration run filed 25 ideas in about 13 minutes. All 25 were approved on the first check, and the Edit guard accounted for every one of the 96 changes. A research run turned one question into a footnoted note in 19 minutes. No run asked for permission, down from 14 prompts in the first test. All 354 code tests pass, and the migration-verifier passed all 17 of its eval cases in 3 of 3 runs.

### Eval Suite 

> [!ai] Summary
> Coming soon!

### Insurance Intake <span class="heading-label">(rollout kit)</span>

> [!ai] Summary
> Coming soon!

### Dental Clinic <span class="heading-label">(rollout kit)</span> 

> [!ai] Summary
> Coming soon!
