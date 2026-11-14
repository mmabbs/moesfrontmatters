---
title: AI Manifesto
seoTitle: AI Manifesto
description: A note that covers my dos, don'ts, and maybes in AI usage
tags: [ai, llms, ai-manifesto, creative-work, gen-ai]
modified: 11-14-2026
created: 11-03-2026
draft: true
cssclasses: wide
---

# AI Manifesto

AI should serve people, not the other way around. While AI has already proven its transformative potential towards meaningful objectives, it's also shown to be ineffective or burdensome in some use cases and unethical in others. It's also dangerous when used without discretion. For these reasons, AI adoption shouldn't be seen as unquestionably good. It becomes an asset when it frees people from bottlenecks, avoidable errors, and routine tasks, so they have the time and mental space for higher-order work that requires judgment, strategy, and craft. It also extends what a person can build, bringing ideas to fruition that would otherwise stay on the page.

AI that does none of this is overhead. 

## I. What I Believe

### Purpose and Judgment

1. **Solve problems, instead of inventing opportunities to use AI.**  

Building something unnecessary is how most of us learn what AI can do: a `/{skill}` a bare agent didn't need, a to-do app when plenty exist. Past that, it's a hammer looking for nails, and every tool you build is a tool you maintain. One of the most important questions to ask about LLM usage is whether it's even needed. A Python script might be the fix — it's faster, cheaper, and free of the errors of interpretation. 

2. **Automate deliberately and precisely.**

Don't build an agent to email you tech events from Eventbrite when the site's newsletter already does it. An agent that ranks events against your 1-3-5 year plan, checks your calendar, buys the ticket once you approve, and adds the travel time and alarms? Now that's powerful.

3. **Use LLM output knowingly, and stand behind it.**

An LLM can float someone else's idea without saying so. Make sure it's not copyrighted. Learn what your field expects around AI use, and what it costs to ignore it or get it wrong. After that, it's like a happy accident in filmmaking: you may not have planned for it, but using it is a choice. Know the limits of generative ai: pattern-matching clashes with the lateral thinking that creativity runs on. My own experiments testing LLMs and creative writing were an [[coming-soon|epistemological nightmare]]. You're better off using them as [[script-asst|admin assistants]].

### People and Organizations

4. **Enable people to run what you build without you**

Can they run the tool, spot when it's wrong, and improve it if you disappeared? If not, you're not in control of it. Some jobs call for a specialist. When Anthropic updated its best practices for the Claude 5 models, I had to rewrite the instructions for several of my skills and plugins. That's upkeep most users wouldn't know was needed.

5. **Protect the data of clients and abide by privacy regulations.**

PIPEDA, PHIPA, and RIBO's rules exist for a reason, yet too many AI users have this "Jesus, take the wheel" attitude to data security. Know what the data is, who can reach it, and where it ends up before you design and deploy a workflow. Like most people in the early AI days, I installed remote MCP servers with abandon before I understood the risks. Once I did, I uninstalled them and built local versions, or used workarounds.

6. **Treat adoption as part of the design, not an afterthought.**

A working tool doesn't mean "successful implementation" if you don't know how to use it. User-friendliness and onboarding should be decided in the build's design, and it's often not just for the sake of other users. I've included "last used" flags in important, but infrequently used tools that ask if I need a refresher, or check if any component is outdated and bound to break. 

### Impact and Accountability

7. **Design for failure.**

A tool that fails silently gets abandoned, because nobody can fix what they can't see. Before anything else, decide what failure looks like and how the user finds out. I also run unit tests and evaluations to catch failures I didn't know existed.

8. **Measure outcomes over activity.**

LLMs are designed to serve; they'll always give you *something*. That proves nothing, and neither does token spend, which could indicate poor optimization. Here's a simple test I use: what does "done" look like? If the outcome meets the criteria of "done", I'm done. 

9. **Question the technology, including your own work.** 

What's true of software is also true of AI: a build is never finished (that's why "patches" are a thing in software). Almost everything I've built for myself remains open to correction, based on factors like new model versions or features/variables I want to add or remove due to weak output. In some cases, I've replaced skills with plugins that do more based on the logic of similar outputs. I've also retired plugins based on stronger base capability of new LLM models.  

10. **Keep a person in the loop accountable for the final output.**

Garbage in, garbage out, and even a good harness can't stop a workflow from producing something false at any step. An LLM can't be fired, sued, or embarrassed. A person can, and so a person should sign off. On longer workflows, also verify at stages. It beats starting over from square one. 

## II. Putting Principles Into Practice

1. **Understand before prescribing**. Examine the problem, existing workflows, stakeholders, and constraints before selecting tools. 
2. **Choose the simplest effective solution**. Compare process improvements, conventional automation, and AI-driven approaches.
3. **Build for reliability and oversight**. Incorporate data safeguards, appropriate testing, verification, human checkpoints, and recovery paths.
4. **Enable adoption and independence**. Provide training, usable documentation, feedback channels, and opportunities for employees to develop confidence.
5. **Evaluate, adapt, and retire**. Measure meaningful outcomes, listen to users, improve what works, and replace what doesn't. 

## III. The Standards I Hold Myself To

1. **Integrity**: I won't recommend AI where it doesn't belong.
2. **Accountability**: I'll answer for what I build and recommend, and won't blame the tool when it fails. 
3. **Empowerment**: I'll aim to leave people more capable with their responsibilities than they were before.
4. **Intellectual humility and honesty**: I'll challenge my assumptions, acknowledge uncertainty, and revise my methods as evidence changes. I won't downplay risks or oversell capabilities.