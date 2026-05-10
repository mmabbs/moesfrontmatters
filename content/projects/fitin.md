---
title: FitIn
seoTitle: FitIn | Wellness App UX & Content Strategy Case Study
description:
tags:
  - marketing
  - content-strategy
modified: 2026-05-10T14:16:13
created: 2026-03-14T12:52:13
draft: true
---

# FitIn

## UX Without Content, Brand, and Research Isn't UX

UX without content strategy, brand development, and user research isn't complete UX. It's screens with holes. The user experience has gaps when those domains are compromised in the development process.

This isn't a claim about org charts. Content strategy, information architecture, brand, QA, and research are legitimately separate disciplines, each with depth requiring specialization. But UX requires their outputs to fulfill its own goal. Without them, you're designing interfaces, not experiences.

Someone has to see the holes.

FitIn was an ethical fitness booking platform, a marketplace connecting users with local trainers, studios, and wellness practitioners. The team was three people: Catherine (founder/CEO), a backend developer, and me. No dedicated researcher. No content lead. No brand strategist.

I was hired to design screens. Over eighteen months, that scope expanded into content strategy, information architecture, brand development, QA, and user research. Not because I wanted to collect titles, but because the gaps existed by default. Organizational structures that silo these disciplines as separate verticals create gaps when the verticals aren't staffed.

I joined about six months into COVID, when the fitness industry was already bleeding. FitIn had pivoted to foregrounding virtual and hybrid services. The downward pressure of COVID proved relentless, and FitIn shut down in late 2022. Transaction volume stayed thin the entire time. There's no conversion rate worth citing, no retention curve that proves the work succeeded.

This is a case study about what happens when those domain gaps go unfilled. It's also about what it looks like when someone fills them.

---

## The Gaps Nobody Was Designing For

The first gaps I noticed were tactical. Login screens needed copy explaining why we asked for phone numbers (2FA feels invasive without context). The "Become a Member" button on storefronts pointed to nothing because the subscription backend wasn't integrated yet.

But the more I learned about the product, the more I realized these weren't isolated. They were versions of the same problem: nobody was designing for what happens when things go wrong.

The happy path was designed. What wasn't designed: what happens when the user is confused, skeptical, blocked, or lost.

**The search problem.** Elastic search had been removed from the roadmap. Users who landed on the marketplace couldn't search by affiliate name anymore. If you already knew which trainer you wanted, there was no path to find them. I flagged this before designing the directory page. A "simple directory" had site-wide implications. We needed a recovery route, or we were designing a dead end.

The search results page had a similar hole. What happens when a search returns nothing? The instinct is to show an empty state with a sad illustration and a "try again" message. That's a dead end too. Users who hit a wall don't try again. They leave.

I designed a three-tier fallback system:

1. No local results? Serve online classes, with a modal explaining the swap.
2. No online results either? Serve anything in the same category, regardless of location.
3. Location not enabled? Sort by earliest available class.

Each tier was worse than the one above it, but none of them were dead ends. The goal was graceful degradation: never let the user feel stuck.

This is content strategy work. This is information architecture work. It's also UX work. The distinction only matters on an org chart.

**The brand gap.** FitIn had a strong identity in Catherine's head, but it hadn't been formalized anywhere. The mission was clear (accessibility, community, social impact), but the voice wasn't documented. The values were real, but they weren't showing up consistently in the interface.

I drafted a Vision, Mission, Values, and Voice document. It went through three versions. The Q&A process surfaced Catherine's articulation of the brand: "Fun, Supportive, Personable, Encouraging. Auntie Catherine wants you to take care of yourself."

But the output stayed thin. "Four Dimensions of Tone of Voice: Serious, Casual, Respectful yet Irreverent, Enthusiastic." Four words, not operationalized. No examples, no application guidance. The gap remained.

The hero images on the homepage were another symptom. FitIn's existing persona images skewed white. The brand's stated values were diversity and inclusion. I pushed to design from the aspirational audience, not just the documented one. The hero image should feel like belonging, not athletic achievement. Catherine agreed.

This is brand development work. It's also UX work. Users don't experience "brand" and "interface" as separate things. They experience a site that feels trustworthy or doesn't.

**The pre-research gap.** In April 2022, just before usability interviews began, I ran a full site walkthrough to understand what participants would actually encounter.

The registration flow had a silent failure state. Users would submit the form, and nothing would happen. No confirmation, no error message. Just nothing. I waited over a minute.

I tiered the findings by severity and flagged the registration bug as critical. I separated symptom from cause: the slow load times weren't a front-end problem. User inputs weren't communicating correctly with the backend. I directed the fix to the right team.

Catherine confirmed the registration bug wouldn't be fixed before interviews started.

My response: "Noted. We'll document it when it comes up."

This is QA work. It's also research preparation. It's also UX work. The user doesn't care which department dropped the ball.

---

## What to Fight For

Some gaps required pushing. The question was always: push for what, against what resistance, with what evidence?

**Error pages.** Catherine wanted fully tongue-in-cheek copy on error pages. Playful replacements for "404 Not Found" that prioritized brand personality over functional clarity.

I pushed back. Delight and status aren't mutually exclusive, but functional communication is non-negotiable. If a user hits an error, they need to know what happened before they can appreciate your joke. Parenthesizing the "real" message signals it's secondary information, which undermines clarity in a moment of confusion.

The resolution: merge the brand voice and the status message into the same line. The error pages could be playful and clear.

**Location permissions.** The standard pattern was to request GPS permission on site load. I recommended against it, citing ClassPass and Mindbody's approach, plus the well-documented user impulse to block. Users who block rarely unblock. We'd lose them permanently.

The compromise: trigger the permission prompt contextually on the search page only, add a "use current location" option to the search field, and design a recovery path for users who blocked it up front.

**Signup copy.** The signup modal had a header: "Sign up to book and save." Catherine wanted to strip it.

I defended keeping it. Users resist registration by default. Benefit-forward copy in the header addresses the implicit question: "Why should I bother?" Without it, the modal is just friction.

She kept it.

**User research.** I proposed usability interviews unprompted, about a year before the formal 2022 study. Analytics can tell you what isn't working, but not why. Transaction volume was thin at the time (activity concentrated around two affiliates), so I recommended waiting for at least five transactions before recruiting.

The research eventually happened. The findings validated what I'd been pushing for.

---

## What to Let Go

Some gaps required deferral. The question was different: defer because it doesn't matter, or defer because survival requires it?

**Mobile.** 92% of FitIn's traffic was desktop. Mobile was explicitly deprioritized. This wasn't a design problem yet. It was a sequencing decision.

**Cookie consent.** I flagged that the cookie consent copy needed attention. Then I let it go. It could wait.

**Membership CTA.** The "Become a Member" button was live on storefronts before the subscription system was integrated. Affiliates were confused. The call: suppress it entirely until the backend was ready. Don't show what isn't built.

**Brand voice work.** This was the hardest deferral.

Catherine wanted "tongue-in-cheek" as the baseline tone. But everything in her own brand articulation pointed somewhere else: warm, supportive, mission-driven. "Auntie Catherine wants you to take care of yourself." That's not tongue-in-cheek. That's earnest.

Tongue-in-cheek might live in specific contexts (404 pages, self-deprecation). But it's a contextual application, not a foundation. The foundation should be warm, accessible, community-oriented.

To get there, I would have had to educate Catherine on voice dimensions. She didn't have bandwidth. We were three people. She had investor pressure demanding a functional site and a few trainers as proof of viability. The investors weren't asking about brand voice. They were asking about screens and signups.

I made the call to stop pushing. Insisting on deeper voice work would have held up everything else. We had UX deadlines. She's the founder. At the end of the day, she can override what I suggest.

I deferred indefinitely, not knowing if we'd circle back. We didn't.

---

## The Validation

The 2022 usability study confirmed what I'd been pushing for.

Multiple participants flagged trust issues. The brand didn't feel established. The value proposition wasn't clear. Users weren't confident FitIn was legitimate.

These weren't UX problems in the traditional sense. They were brand problems, voice problems. The exact gaps I'd been trying to address.

Users don't notice good UX. Good UX is invisible; users only notice friction. What they're investigating, consciously or not, is a trustworthy site with some degree of identification with the brand's feel. The usability study made that undeniable.

The research didn't prove I was uniquely right. Catherine and the team knew FitIn had brand challenges. But the research moved "we should probably formalize the brand" from a backlog item to a validated finding.

By then, we were priced out of our own backlog. COVID had gutted the fitness industry for nearly three years. Transaction volume never recovered. The runway to fill those gaps had run out.

---

## What This Demonstrates

FitIn's gaps weren't caused by incompetent people. Catherine understood business strategy and the fitness industry. The backend developer understood the technical systems. Everyone knew that brand, content, and research mattered.

The gaps existed because the organizational structure treated those domains as separate concerns to be addressed later. Later never came.

This is the structural problem: business structures silo content, brand, IA, research, and UX as verticals with dedicated roles, and they should be separate because each has depth requiring specialization. But without those domains fulfilling their end of the work, the user experience is fundamentally incomplete. UX requires these areas to be developed to fulfill its goal.

This isn't to say content, brand, and research must be done first before UX work begins. We have constants like screen sizes to allow UI templates, and copy placeholders in wireframes are fine in the interim. But it's false to claim the UX work is done without the final results of those other domains. In fact, if there's anything to argue, it's that ideally those domains are done first, because the work and findings could undo UX progress in the interim.

Small teams without specialists in every domain need someone who can see across boundaries. Someone who notices that the search fallback isn't just a UI problem but a content strategy problem. Someone who flags that the brand voice document is thin and the hero images don't match the stated values. Someone who runs QA before user research and separates symptom from cause.

The work survives. The search fallback system exists. The error pages with merged brand-and-status copy exist. The usability findings exist. The diagnostic QA work, correctly attributing bugs to backend vs. frontend, exists. The design rationale, preserved in email threads and Figma comments, exists.

FitIn didn't make it. The holes were seen before they became failures. That's what cross-domain fluency looks like in practice.
