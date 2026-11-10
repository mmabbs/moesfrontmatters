---
title: AI 
seoTitle: AI Automation and Workflow Case Studies | Multi-Agent Systems, Evaluation Design, Workflow Pipelines
description: Problem, build, result. Case studies in multi-agent orchestration, adversarial evaluation, and creative workflow automation — from an automation consultant with a production background.
tags:
modified: 09-17-2026
created: 09-09-2026
draft: 
---

# AI

%% Lead-in on what people will AI stuff people will find? The How I Use (`digital-garden/how-i-use-llms`) post, link to `https://github.com/mmabbs/mabbs-ai-tools`, etc. %%

## Case Studies

These are build write-ups showing how I can scope and ship a working system.

### [Insurance Intake](projects/ins-intake) 

> [!ai] Summary
> **What it is:** An AI workflow that reads an insurance brokerage's shared inbox, drafts the record a staff member would normally type out, and sends it to a broker to check. Every email, approval, and correction is logged, and the broker's corrections feed back into the AI's instructions. Demo build, made-up data.  
> **Problem:** Someone reads every email, figures out which client and policy applies, and types a record into the brokerage's main system with dates to follow up. These emails aren't tidy.  
> **My role:** Designer and builder. Build time: 6 days, while learning n8n.  
> **Status:** Working demo, not in production. Nothing is filed until a person approves it.  
> **Outcome:** On a scored test of 12 deliberately messy emails, it got every email's type right, as well as 71 of 72 details. All for about fifth of a cent per email.  
> **Methods:** n8n (self-hosted) · Claude Haiku 5.5 · Gmail · Claude Code

### [Script Assistant](projects/script-asst)

> [!ai] Summary
> **What it is:** A Claude Code plugin that files a screenwriter's raw ideas into organized Obsidian notes and turns research questions into sourced notes. It doesn't write the script or come up with ideas.  
> **Problem:** A writer's ideas pile up in one place and have to be sorted by hand into the right notes as the story takes shape. A chat assistant can't do that job reliably: it has to be re-briefed every time, and it can't show what it changed.  
> **My role:** I defined the problem from my own writing process, designed the workflow and note system, directed Claude Code agents to build it from my specs, and designed the evals that gate each part.  
> **Status:** As of 2026-10-28, the MVP for *Script Assistant* is built. It covers the Pre-Writing Phase only. Next up is the Writing Phase.  
> **Build:** Opus 5.5 workers wrote the tests and code, directed from Fable 5.1 and Opus 5.5 sessions.  
> **Tools:** Claude Code (plugin host, agents, hooks), Claude Opus 5.5 and Sonnet 5.5 (agents), Obsidian (notes, backlinks, comments), Python (Run manager and Edit guard), Node (the research script)  
> **Methods:** spec-first tests written by a separate worker, bare-model baseline runs, model-judge graders that quote evidence, a skeptic review before the build, 3-of-3 pass gates  
> **Outcome:** On a real project, one migration run filed 25 ideas in about 13 minutes. All 25 were approved on the first check, and the Edit guard accounted for every one of the 96 changes. A research run turned one question into a footnoted note in 19 minutes. No run asked for permission, down from 14 prompts in the first test. All 354 code tests pass, and the migration-verifier passed all 17 of its eval cases in 3 of 3 runs.

### [Eval Suite {for a pre-existing pipeline}](projects/eval-suite)

> [!ai] Summary
> **What it is:** [Plain-language description.]  
> **Problem:** [Operational problem.]  
> **My role:** [Discovery, workflow design, prototype/build work, evaluation, etc.]  
> **Status:** [What is demonstrably working now.]  
> **Outcome:** [Measured result or demonstrated capability.]  
> **Methods:** [A short, accurate list.]

%% Includes regression tests. Break out of Script Asst? %%



%% Claude's note: Two things do matter for the job-hunt version, and neither is about optics:

1. Write a second case study for a different reader. The one in the spec is aimed at principal brokers — it proves operational fluency and safety in their vocabulary (BMS, RIBO, E&O). A hiring manager for an Automation Lead or Solutions Architect role reads the same build for different evidence: how you scoped it to a one-week deliverable, why n8n over the alternatives, why the review queue sits where it sits, how the audit trail is structured. Same artifact, second write-up. The broker version proves you understand their business; the portfolio version proves you can think through a system. Don't hand a hiring manager the broker version and hope they translate.
2. Be exact about what your developer built, if anything. The spec doesn't say whether the on-call developer touches the demo. If they do, the portfolio write-up says which parts — because "walk me through what you personally built" is the first question in any automation-role interview, and a vague answer there costs more than a modest one.

One forward-looking note, since the spec's endgame is a design-partner brokerage with real system access: the moment a real client is involved, the permission question comes back. If the job hunt overlaps with that engagement, the portfolio piece stays the synthetic version unless the brokerage agrees to be named.

What the piece actually earns you is worth saying plainly: it's not just "I built a workflow." It's a workflow plus vertical research plus governance artifacts plus a human-in-the-loop design justified by a regulator's position. Almost no one shows up to an automation interview with that combination. Lead with it.
%%
