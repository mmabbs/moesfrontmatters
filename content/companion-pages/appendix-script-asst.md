---
title: Appendix - Script Assistant Case Study
seoTitle: Script Assistant Appendix | Plugin Architecture and Evals
description: The file layout, agents, and eval results behind the Script Assistant case study. Source material for readers who want to check the build.
tags: []
modified: 11-10-2026
created: 11-08-2026
draft:
cssclasses: [wide, case-study]
---

# Appendix - Script Assistant Case Study

## Architecture

```
~/.claude/plugins/local/script-asst/
├── agents/
│   ├── migrator.md               runs. Opus 5.5
│   ├── migration-verifier.md     runs. Opus 5.5, read-only tools
│   ├── research-planner.md       runs. Opus 5.5
│   ├── researcher.md             runs. Sonnet 5.5, web tools
│   ├── research-writer.md        runs. Opus 5.5
│   ├── research-evaluator.md     runs. Sonnet 5.5, read-only
│   └── (Brainstormer, Gap finder, Reviewer)   designed, not built
├── bin/
│   ├── runmanager                runs. launcher
│   └── editguard                 runs. launcher
├── lib/
│   ├── runmanager/               runs. Python, standard library only
│   ├── editguard/                runs. Python, shares no code with runmanager
│   ├── research.js               runs. the Research workflow script
│   └── workflowtests/            runs. fake-agent tests for research.js
├── skills/
│   ├── run/                      runs. /script-asst:run
│   └── story-graph/              writing phase, built earlier, outside the MVP
├── hooks/
│   ├── hooks.json                runs
│   └── scripts/                  runs. the permission hook and its tests
├── references/                   the Migrator's rulebook, research example
└── evals/                        61 eval case folders and their results
```

## Edges

In the order they first appear. Lettered edges have an explainer on the page.

> [!technical] Edges
>
> | Edge | From → To                              | Type                    | Rule or data                                                      |
> | ---- | -------------------------------------- | ----------------------- | ----------------------------------------------------------------- |
> | A    | Writer → Run manager                   | Trigger                 | run kind + targets + request                                      |
> |      | Run manager → Before-snapshot          | Data                    | copies, fingerprints                                              |
> |      | Before-snapshot → Run manager          | Data                    | copies                                                            |
> |      | Run state → Run manager                | Data                    | open run, handled list, unit index                                |
> |      | Run manager → Run state                | Data                    | open run, handled list, unit index                                |
> | B    | Run manager → migrator                 | Conditional             | migration run, one batch at a time                                |
> | C    | migrator → Run manager                 | Failure path            | 2 retries failed                                                  |
> |      | Brain Dump doc → migrator              | Data                    | tags, comments                                                    |
> |      | Story notes → migrator                 | Data                    | sources, destinations                                             |
> |      | Brain Dump doc → Run manager           | Data                    | trigger lines, - [r] requests                                     |
> |      | Story notes → Run manager              | Data                    | trigger lines, - [r] requests                                     |
> |      | Run manager → Brain Dump doc           | Data                    | pointers, link lines, closes, request comments                    |
> |      | Run manager → Story notes              | Data                    | pointers, link lines, closes, request comments                    |
> |      | migrator → Brain Dump doc              | Data                    | edits a comment or request asks for                               |
> |      | migrator → Story notes                 | Data                    | copies, Rejected moves                                            |
> |      | Run manager → migrator                 | Data                    | batch, typed request, fix findings                                |
> |      | Run manager → Story notes              | Failure path            | restored line                                                     |
> |      | Run manager → Story notes              | Failure path            | unit undone                                                       |
> |      | Run manager → Brain Dump doc           | Failure path            | restored line                                                     |
> |      | Run manager → Brain Dump doc           | Failure path            | unit undone                                                       |
> | D    | migration-verifier → migrator          | Conditional · loop-back | fix, through the Run manager · code counts, max 2 rounds per unit |
> | E    | migration-verifier → Run manager       | Failure path            | not asked for                                                     |
> | F    | migration-verifier → Run manager       | Failure path            | 2 retries failed                                                  |
> | G    | Run manager → migration-verifier       | Conditional             | other flags, migration runs only                                  |
> |      | Run manager → migration-verifier       | Always                  | after each batch's migrator pass                                  |
> |      | Run manager → migration-verifier       | Data                    | cut-down record, batch, typed request                             |
> |      | migration-verifier → Run manager       | Data                    | findings                                                          |
> |      | Story notes → migration-verifier       | Data                    | sources, copies                                                   |
> |      | Brain Dump doc → migration-verifier    | Data                    | sources                                                           |
> | H    | Run manager → Edit guard               | Conditional · loop-back | after an act changed a note                                       |
> |      | Run manager → Edit guard               | Always                  | after pointers, or after mark                                     |
> |      | Run manager → Edit guard               | Data                    | requests, outcomes, earlier flags and findings                    |
> |      | Edit guard → Run manager               | Data                    | flags                                                             |
> |      | Before-snapshot → Edit guard           | Data                    | copies, fingerprints                                              |
> |      | Run state → Edit guard                 | Data                    | unit index                                                        |
> |      | Run manager → Edit guard               | Only sometimes          | a batch's record failed: right away                               |
> |      | Run manager → Edit guard               | Only sometimes          | recover run: its own check                                        |
> | I    | Gap finder → Run manager               | Failure path            | 2 retries failed                                                  |
> |      | Run manager → Gap finder               | Only sometimes          | Gaps run                                                          |
> |      | Story notes → Gap finder               | Data                    | targets                                                           |
> |      | Gap finder → Story notes               | Data                    | - [g] lines                                                       |
> |      | Writer's Statement → Gap finder        | Data                    | primer                                                            |
> |      | Run manager → Reviewer                 | Only sometimes          | Review run                                                        |
> |      | Story notes → Reviewer                 | Data                    | targets, change                                                   |
> |      | Reviewer → Story notes                 | Data                    | - [R] lines                                                       |
> |      | Writer's Statement → Reviewer          | Data                    | primer                                                            |
> |      | Run manager → Brainstormer             | Only sometimes          | Brainstorm run                                                    |
> |      | Brainstormer → Story notes             | Data                    | [AGENT] units                                                     |
> |      | Brainstormer → Brain Dump doc          | Data                    | [AGENT] units                                                     |
> |      | Writer's Statement → Brainstormer      | Data                    | primer                                                            |
> | J    | Research workflow → Run manager        | Failure path            | workflow call fails                                               |
> |      | Run manager → Research workflow        | Only sometimes          | Research run                                                      |
> |      | Research notes → Run manager           | Data                    | passed notes                                                      |
> |      | Research notes → Edit guard            | Data                    | new notes, link targets                                           |
> |      | Research notes → Research workflow     | Data                    | template, name check                                              |
> |      | Run manager → Research workflow        | Data                    | requests, run id, project                                         |
> |      | Research workflow → Research notes     | Data                    | research note                                                     |
> |      | Research workflow → Run manager        | Data                    | outcomes, one per request                                         |
> |      | Writer's Statement → Research workflow | Data                    | primer, when a comment says to                                    |
> |      | Run manager → Run log                  | Data                    | run log                                                           |
> |      | Run log → Writer                       | Data                    | run log                                                           |
> |      | migrator → Unit record files           | Data                    | record, before any copy                                           |
> |      | Unit record files → Run manager        | Data                    | unit records                                                      |
> |      | Unit record files → Edit guard         | Data                    | unit records                                                      |
> |      | Unit record files → migrator           | Data                    | record, on a fix round                                            |
> |      | Run manager → Unit record files        | Data                    | invalid record moved out, last valid copy                         |
> |      | Research workflow → LLM files          | Data                    | plans, findings files                                             |
> |      | LLM files → Research workflow          | Data                    | plans, findings files                                             |