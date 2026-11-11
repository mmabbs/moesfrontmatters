---
title: Case Study - Script Assistant
seoTitle: 
aliases: [script-asst]
description: 
tags: []
modified: 11-10-2026
created: 11-10-2026
draft: 
section: /ai
cssclasses: [case-study]
---

# Case Study - Script Assistant

> [!ai]- Summary
> **What it is:** A Claude Code plugin that files a screenwriter's raw ideas into organized Obsidian notes and turns research questions into sourced notes. It doesn't write the script or come up with ideas.  
> **Problem:** A writer's ideas pile up in one place and have to be sorted by hand into the right notes as the story takes shape. A chat assistant can't do that job reliably: it has to be re-briefed every time, and it can't show what it changed.  
> **My role:** I defined the problem from my own writing process, designed the workflow and note system, directed Claude Code agents to build it from my specs, and designed the evals that gate each part.  
> **Status:** As of 2026-10-28, the MVP for *Script Assistant* is built. It covers the Pre-Writing Phase only. Next up is the Writing Phase.  
> **Build:** Opus 5.5 workers wrote the tests and code, directed from Fable 5.1 and Opus 5.5 sessions.  
> **Tools:** Claude Code (plugin host, agents, hooks), Claude Opus 5.5 and Sonnet 5.5 (agents), Obsidian (notes, backlinks, comments), Python (Run manager and Edit guard), Node (the research script)  
> **Methods:** Spec-first tests written by a separate worker, bare-model baseline runs, model-judge graders that quote evidence, a skeptic review before the build, 3-of-3 pass gates.  
> **Outcome:** On a real project, one migration run filed 25 ideas in about 13 minutes. All 25 were approved on the first check, and the Edit guard accounted for every one of the 96 changes. A research run turned one question into a footnoted note in 19 minutes. No run asked for permission, down from 14 prompts in the first test. All 354 code tests pass, and the migration-verifier passed all 17 of its eval cases in 3 of 3 runs.  

## What it is

> [!info] The plugin doesn't author the screenplay or generate ideas for the writer.

*Script Assistant* is a plugin for Claude Code, [Obsidian](https://obsidian.md/), and [Slugline](https://www.slugline.co/) that helps screenwriters organize their notes and flag issues related to incomplete development across the prewriting and writing stages.

## The problem

Writing is hard. That's true for pros and novices alike. But the discourse around "hard" tends to be the visible work: starting and staying seated when the going gets tough, writing a motivated second act, and so on. It overlooks the hidden, boring, and annoying layer — managing the sprawl of new ideas, and the decisions of an idea's journey from the proverbial napkin to a developed concept through to its expressions across many screenplay drafts. Most of us just write; thinking about *how* we write is a distraction.

**The irony of "just write" is the Easter egg hunt and clean-up of organization that follows when your story takes shape.** Notes end up spread across a notebook, your phone, voice memos, index cards, some opinionated app, and abandoned docs in a folder. Going draft-to-draft means capturing notes for future edits and new directions that ripple across the story, often in unexpected ways. To make matters worse, popular outliners, beat boards, and screenwriting apps don't talk to each other.

### Why a general chat assistant didn't work

1) **Story notes alone don't carry the rules.** The writer does. Instructions inside story notes are clutter, and without them a chat agent has to be re-briefed every time.
2) **It has no memory between runs.** "What changed since last time?" needs a last time. "Prove my words weren't manipulated" needs a before state. Ad hoc calls in chat have neither. 

## Design principles

### Where it started and why it failed

At first there was one agent in a loop. It read, did the job, edited, and checked itself until the check passed or a limit was hit. But it strained in five places: it graded its own performance, with status calls being the costliest mistakes; five run kinds meant five rulebooks — about 57K words in total — loaded into one agent; research needed web tools and nothing else did; big work batches overflowed its context even further; and exact steps, like detecting which lines changed, were mixed in with judgment calls.

### The plugin doesn't get in the way of writing

1) **It acts on a note and metadata system, not "instructions" that clutter story notes.** The plugin uses a system of note templates, frontmatter, and inline metadata typical of idea capture architecture in Obsidian.
2) **The writer is king, and their convenience is key.** The writer sets status (tags and comments, not prose, trigger moves), a comment beats the migrator's own reading, and when unsure it asks in the run log instead of acting. 
3) **Runs occur before or after writing sessions, not during.** There's no background agent manipulating content or files as you work. Looking at anything but the page, like a terminal, is a distraction.
4) **Each kind of edit has one owner.** Code writes pointers, link lines, checkbox ticks, and the run log. The migrator writes copies, while the research workflow writes research notes. When a line is wrong, I know which part wrote it.
5) **Every move leaves a trail back to its source line.** The source line gets a pointer naming every place that holds a copy of it; Obsidian backlinks give the reverse direction. Every research claim's footnote points at a passage in a findings file the writer can open. 
6) **Nothing stands until something that didn't make it has checked it.** Code checks an agent's records against the writer's notes. A verifier agent checks each batch, with up to two fix rounds. Failures are undone, and the content goes back to how it was. Pointers are written only after approval. The Edit guard, a code check, compares every note with the snapshot and flags any edit I didn't ask for, and the Run manager puts it back. A failed unit is undone, the run log says why, and the next run retries it without asking me. A bot's mistake never becomes my chore. No annoying pop-ups, and no content slips through the cracks.

## How it works

> [!info] The MVP only covers the Prewriting Phase of the plugin, and it's intentionally shaped around how *I* work. The full version allows users to customize to their approach. 

The MVP only covers **migration** and **research** runs. A run is one pass the writer starts, doing one job.

![[script-asst-run-frame.png]]

*A high-level view of the migration and research runs*. 

### The note and metadata system

Every idea lives in one of four kinds of note.

| Note           | What it is                                                                                               |
| -------------- | -------------------------------------------------------------------------------------------------------- |
| **Brain Dump** | One running note of every new idea, under the day's date. The plugin copies from it and never tidies it. |
| **Idea Unit**  | One idea in one bullet, however many sentences it takes. It's the smallest piece the plugin moves.       |
| **Idea Note**  | A workspace for one idea I'm still developing. Nothing in it is locked.                                  |
| **Area Note**  | Everything decided about one part of the story, such as a character or a place.                          |

I mark ideas with three kinds of markup, typed at the end of a line or under it. The plugin never guesses a status from my wording.

| Markup                | What it means                                                                         |
| --------------------- | ------------------------------------------------------------------------------------- |
| `#status/provisional` | "Assume this is true for now." The idea goes to an Idea Note.                         |
| `#status/committed`   | "This is true." The idea goes to an Area Note, straight from the brain dump if I want. |
| `#status/rejected`    | "This is not true." The idea goes to its note's Rejected section.                     |
| `- [?]`               | An open question I'm tracking. The plugin doesn't touch it.                           |
| `- [r]`               | A research request. The plugin writes a sourced note and links it here.               |
| `%% comment %%`       | An instruction to the plugin, such as which note an idea belongs in.                  |

A Brain Dump day, with all three kinds of markup:

```markdown
## 07/10/2026

- A black market at Rosewood College for preserved memories of dead scholars. #status/provisional
    - The Dean is in on it. Gets caught and blackmailed.
- Lena's mother sold her traumatic memories and won't say which. #status/committed
      %% This belongs in "char-lena" note. %%
    - [r] How do black markets for rare goods usually get exposed?
```

### The overall flow and shared parts

**Run manager.** The plugin's coordinator. I start every run with one command. It saves a snapshot of my notes and reads a record of what earlier runs already handled. That way, it knows which lines are new or changed. It then passes judgment calls to the agents and adds three things through code: the pointers on my source lines, the link under an answered research request, and the checkbox tick on a work item. It also edits the run log and state. I'm never asked for permission during a run. Instead, the plugin's permission script approves the run's own actions.

**Edit guard.** Code that runs after any run that edits notes. It compares every note with its snapshot, explains each change by the unit record or a known Run manager edit, runs 12 markup rules via code, and writes a flag for anything else to its flags file. A flag never stops a run, because a comment can allow an edit the rules wouldn't.

> [!technical]- The components
>
> | Component          | Model / effort | Reads                                                             | Writes                                                          | Called by                                   |
> | ------------------ | -------------- | ----------------------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------- |
> | Run manager        | Code, no model | Run kind and targets, run state, before-snapshot                  | `migrated-to` pointers, research link lines, run log, run state | The writer                                  |
> | Migrator           | Opus 5.5, effort not pinned (medium in evals, high in the live run) | Changed lines with tags/comments, destination notes, rulebook     | Migrated copies, Rejected sections, a JSON unit record          | Run manager, migration run                  |
> | Migration-verifier | Opus 5.5, medium | One batch, its cut-down record, notes and comments                | Nothing. Returns findings as JSON                               | Run manager, migration run                  |
> | Edit guard         | Code, no model | Before-snapshot, notes, fingerprints, unit records/research files | Flags                                                           | Run manager, after any run that edits notes |
> | Research workflow  | Opus 5.5, medium (planner, agent-writer). Sonnet 5.5, high (researchers, evaluator) | `- [r]` line and its comment                                      | Research plan, findings files, research note                    | Run manager, research run                   |

### Migration run

It moves tagged and commented material out of a "Brain Dump" doc, where all initial ideas go, organized under dates. 

![[script-asst-migration-run.png]]

*A high-level view of the migration run*.

The migration run is driven by `#status` tags and Obsidian comments (`%% {comment} %%`).

**Migrator.** An Opus 5.5 agent called by the Run manager to move batches of changed bullets. It reads the changed lines with their tags/comments and their destination notes. A request I type when I start the run counts as a comment. It never picks a status, and it writes nothing in the Brain Dump unless my comment or typed request asks for it. Before it touches a note, it writes every decision into a record — each source line and copy, along with the copy's destination. 

**Migration-verifier.** A read-only Opus 5.5 agent that checks the migrator's work after every batch. The verifier never sees the migrator's reasoning. For each idea it answers "approve" or "fix" on four checks: whether a detail or a hedge was lost, whether the status matches the one I gave, whether the migrator did more or less than I asked, and whether an Area Note line makes sense with no other note open. It also lists any marked line the migrator skipped. A "fix" goes back to the migrator. At the end of the run it also judges the Edit guard's flags: did my comment or request ask for this change?

Both agents run on Opus 5.5: by Anthropic's benchmarks, the best model for its price and speed, with the most readable output. Fable 5.1 has stronger judgment, but a writer would hit their usage limit after a couple of runs.

#### What "done" looks like

1) **Every marked idea is accounted for.** Each idea with a new/changed tag or comment was moved, rejected, edited, or left in place. The run log says which and why, and the next run retries anything that failed.
2) **Nothing was promoted or over-rejected.** No idea moved to a new note is given a firmer status than my original one, and no rejection reached further than I said. Turning an idea down for one character doesn't turn it down for the whole story.
3) **My words in the Brain Dump are untouched.** The plugin added only its pointers and a note telling the next run to retry what didn't go through the first time. 
4) **Every changed Area Note line makes sense on its own, without the note it came from.** The plugin put nothing tentative or provisional in an Area Note.

### Research workflow

It's the only part of the plugin with web tools, which is why it's its own part.

![[script-asst-research-run.png]]

*A high-level view of the research run*.

The Run manager finds each tagged `- [r]` request and hands it to the research workflow script. For each request, the script runs four kinds of agent:

1) **Planner** (Opus 5.5) reads the request and any comment, splits it into one topic for each separate question, and writes the research plan.
2) **Researchers** (Sonnet 5.5), one per topic, search the web. Each must open a page before citing it and saves the passages and their sources to a findings file.
3) **Agent-writer** (Opus 5.5) turns the plan and the findings files into one research note, with a footnote on every claim.
4) **Evaluator** (Sonnet 5.5) checks the note against the plan and the findings. It confirms that every claim matches its source, each planned question is answered or listed as open, and nothing the plan asked for was dropped. A fail sends its list of problems back to the agent-writer for one fix round.

When a note passes, the Run manager links it under the request, marked `[AGENT]`, and ticks the box. If it still fails after the fix round, the request stays open and the run log says why.

## A worked example

### Migration run

The first real pre-writing runs were on a project called *Almond*.

![[script-asst-migration-run-detail.png]]

What happened: three batches and 25 units, every one approved in the first round. The run wrote 56 copy lines across eight new notes and one existing note, and 40 pointer lines. The Edit guard explained all 96 changes and raised no flags. The run log asked me one question. About 13 minutes by the timestamps.

#### Before migration

![[brain-dump-before-migration.png]]

#### After migration

![[brain-dump-after-migration.png]]

#### The run log's "Questions for you"

![[run-log-qs-for-you.png]]

[Full run log](companion-pages/run-2026-10-16-0931-migration.md)

### Research run

Run 3 came after the fixes described under "A research note built on snippets." I tagged one line, `- [r] Is anxiety "contagious"?`, with `#research/run-3`. The planner split it into seven topics, one researcher each. Each researcher requested 25 to 41 pages, and 88 of the 91 links the note cites were read. The evaluator's first check sent the note back for one fix round, and the second check passed. The Run manager linked the note under my line and ticked the box. The run took 19 minutes, and its log said "Nothing needs you."

The request line after the run:

```markdown
- [x] Is anxiety "contagious"? #research/run-3
    - [AGENT] [[research-light-catching-anxiety]]
```

[Research note excerpt](companion-pages/research-catching-anxiety.md)

## Evaluation and evidence

Every part is tested by something other than the part that wrote it.

**Code tests.** For the Python and JavaScript parts, one worker writes the tests and expected results from the spec alone. A second worker writes the code until they pass. All 354 code tests pass, plus 24 cases for the research script that use stand-in agents with set answers.

**Eval cases for the agents.** There are 61: 24 for the migrator, 17 for the migration-verifier, and 20 for the research agents, one of them retired. Each case is graded by code checks, such as "no Write call," or by model judges (Opus 5.5 with no tools) that answer one yes-or-no question and quote their evidence. A case passes only when every check passes in 3 of 3 runs. Most cases also get bare runs: Opus 5.5 with no agent file, as a baseline. Every eval run, agent or bare, ran at medium effort.

The bare runs changed the plan once. Plain Opus 5.5 passed the migration-verifier's first nine cases too, so they proved nothing. Five harder cases joined the gate.

The migration-verifier passed all 17 of its cases in 3 of 3 runs, at medium effort, the effort it runs at now. The first 14 cost $10.63 to run. It hasn't been tested at high effort, which it ran at in the Almond migration run.

The research agents passed every check in 3 of 3 before the research workflow's first live run, on a throwaway project. One request passed. The other failed because the evaluator caught only one of the note's three problems. It now checks claim by claim.

### Case study: migration-verifier

This eval tested two things about the migration-verifier at once: whether it caught a line the migrator quietly dropped, and whether it stayed blind to the migrator's reasoning.

The input was three Brain Dump lines, generated by the orchestrating Claude session for the test:

```markdown
- Mara still wears Tobias's wristwatch, stopped at twenty past four, the minute the boat went down. #status/committed
%% Agent, char-mara. %%

- Mara will cross the causeway on foot the night of the storm. Not sure what forces her to cross yet. #status/committed

- Tobias always whistled the same three notes when he rowed.
%% Agent, idea-tobias. %%
```

The test didn't run the migrator. It handed the verifier a record covering all three lines, with a mistake planted in one of them:

- **Wristwatch line (planted mistake):** skipped. The record marked it "left in place" with a false excuse: "The stopped time reads as a detail you haven't settled yet." Nothing in that line is unsettled. 
- **Causeway line:** the settled half copied to Mara's note, the unsettled half rightly left in place.
- **Whistle line:** copied word for word.

Code can't judge whether "left in place" was the right call. It counts the line as handled, and no later run picks it up. Only the verifier could catch it, and it had to do it without the excuse. The verifier was handed a cut-down copy with the reasoning removed, and its instructions told it never to open the rest.

A pass meant three things:

- The verifier reported the wristwatch line as skipped, and no other line.
- It approved the two copies that were done correctly.
- It never opened the full record, which held the migrator's reasoning.

It passed in 3 of 3 runs, with 10 of 10 checks each. Every run read only the five files mentioned in its prompt. Its reply flagged the wristwatch line: "You tagged this line committed and your comment sends it to char-mara, but it was left where it is…"

> [!technical]- Run 1's reply
>
> ```json
> {"batch":"b1","round":0,"units":[{"unit":"u1","verdict":"approve","problems":[]},{"unit":"u2","verdict":"approve","problems":[]}],"missed":[{"source":{"note":"brain-dump.md","line":10,"text":"- Mara still wears Tobias's wristwatch, stopped at twenty past four, the minute the boat went down. #status/committed"},"what":"You tagged this line committed and your comment sends it to char-mara, but it was left where it is: nothing was copied to char-mara.md and no question asks you about it."}]}
> ```

One limit remains. Nothing locks the verifier out of the migrator's reasoning: its search tools can reach the full record. It stays blind only because its instructions say to, and this case showed it follows them.

## Challenges and course corrections

After the Almond runs, I had four reviewer agents audit every design decision, 258 in all, against the run files and eval results. I ruled on all 16 findings the same day.

### The design didn't survive its first review

**What happened:** The design had holes. Two would have pushed work onto me: instructions added to older notes would be skipped silently, and a crash could leave duplicate copies.  
**How I found it:** Before any code existed, a separate reviewer agent went over the design twice to find holes. Its second pass caught a fault the first pass's fix had created.  
**What changed:** I accepted nearly all 18 findings. The plugin now records what each run handled and writes down every move before making it.

### The first built migrator did worse than plain Claude

**What happened:** On its first 19 cases, the built agent passed 46 of 57 runs. Plain Opus 5.5 passed 53. Both ran at medium effort but had different graders: an Opus 5.5 worker for the agent, code checks and Fable 5.1 for plain Opus 5.5.  
**How I found it:** Baseline runs. Nine of the agent's 11 fails came from one habit no baseline run had: tagging untagged copies `#status/tentative`.  
**What changed:** Two rulebook lines pulled opposite ways. I rewrote the rule so a copy carries only the tag I gave. The six affected cases then passed 18 of 18.

### A research note built on snippets

**What happened:** The planner packed five questions into one topic, and the lone researcher opened no pages.  
**How I found it:** An audit of the run's records. The rerun opened none either, because one of my settings blocked that tool for every agent.  
**What changed:** Each question gets its own topic, researchers must open a page before citing it, and the setting is gone. The third run read 88 of 91 cited links. In that run, one researcher tried two pages, was blocked both times, and cited them anyway, marked as unread in its findings. The evaluator passed the note, and my own audit counted the attempts as opened pages. The count only came right when I checked what each fetch returned, not just that it was called.

### A rule that needed an exception

**What happened:** Early on, the research agents risked reusing findings from an earlier run. Claude's fix was a broad rule: an agent may read only the files the script hands it. Then the agent-writer needed an example file, and the fix for that was an exception to the rule.  
**How I found it:** I asked whether to keep adding exceptions or go back to the original decision.  
**What changed:** The run's ID in each file path already kept old findings out, so the rule came out.

### Keeping whole units on recover: left out of the MVP

**What happened:** When a migration run crashes, `recover` undoes every unit so the next run redoes the work. Undoing work that's approved would be destructive.  
**How I found it:** No test would catch this; I saw it while reading the design.  
**What changed:** Nothing, for the MVP. Keeping whole units would cost about 25 test cases and 4 to 6 hours of build time, so I kept the original approach. It's designed, not built.

## What I learned

### Every tag I skipped became a judgment call for the agent

The design that's easiest to check isn't always the right one. I now weigh each thing a tool asks its user to type against the busywork it adds, and give the rest to a model with a checker behind it.

### Each patch narrows the options for the next fix

When a fix needs an exception, I now go back to the decision that made the exception necessary. The rule I was patching came out, because the problem it guarded against was already solved.

### A tool that makes work for the person it serves isn't finished

My first full migration run, on a test project, asked me for permission 14 times. I now treat anything a run asks of its user as a fault to fix, the same as a bug.

### A passing check can hide a gap when an attempt counts as success

A check that counts attempts will pass work that failed. I now check what a step returned, not just that it ran.

---

> [!success]- Built and run: the migration and research runs of the Pre-Writing Phase
>
> **On a real project (*Almond*)**
> - **Migration:** moved 25 idea units in about 13 minutes, every one approved in the first round. The Edit guard explained all 96 changes and raised no flags.
> - **Research:** one request became a footnoted note in 19 minutes on its third run, and all three run logs said "Nothing needs you."
> - **Interruptions:** none. All four runs finished without a permission prompt.
>
> **On a test project (*Lighthouse*)**
> - **Migration:** nine idea units handled in 5 minutes, and the run log said "Nothing needs you."
> - **Checks that caught something:** the migration-verifier sent one copy back, fixed in one round. The Edit guard raised two flags, both traced to a comment that asked for the edit. One unit was undone and left for the next run.
> - **Interruptions:** permission prompts went from 14 to none.
>
> **Tests**
> - All 354 code tests and 24 stand-in cases pass, and the migration-verifier passed all 17 of its eval cases in 3 of 3 runs.

> [!in-progress]- Still in progress
> **Prewriting Phase:** a Review run where an agent checks existing material against something that changed and flags continuity errors, unfulfilled setups, and loose ends. Designed, not built.
>
> **Writing Phase:** the script parser turns a Fountain screenplay into scenes with stable IDs, and it runs today. Designed, but not built:
>
> - A **story graph** that maps dependencies between scenes
> - A **ripple report** that lists what a revision broke
> - A **keystone-edit analysis**, which ranks candidate revisions by how far they ripple

## Tools and links

**Repo:** [Insert URL]

[Appendix containing the architecture, edges, and per-package counts](companion-pages/appendix-script-asst)
