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
> **What it is:** [Plain-language description.]  
> **Problem:** [Operational problem.]  
> **My role:** [Discovery, workflow design, prototype/build work, evaluation, etc.]  
> **Status:** [What is demonstrably working now.]  
> **Outcome:** [Measured result or demonstrated capability.]  
> **Methods:** [A short, accurate list.]

%%AI screenwriting tools tend to do the writing for you. This pipeline does the opposite — it supports the writer's process without touching the creative work. At its core is a format-aware voice intake: spoken drafting through VoiceInk into structured screenplay format, preserving the intimacy of thinking out loud instead of forcing the writer into a text editor. The pipeline's six stages handle intake, formatting, and structural support. Components that run are demoed as builds; components in design are labeled as design.

**Problem:** Screenwriting tools that use AI either generate the writing (replacing the writer) or ignore format (adding manual work).
**Build:** A six-stage pipeline anchored by format-aware voice intake — VoiceInk to structured screenplay, creative process intact. [EDITOR: note which stages are built vs. designed if that detail is useful here]
**Result:** [EDITOR: result — what the demo shows, time saved, or what it replaced]%%

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
