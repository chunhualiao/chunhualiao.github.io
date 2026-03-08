---
title: "The Hidden Killer in Multi-Agent Systems: When Your AI Starts Filtering Like Middle Management"
datePublished: Sun Mar 08 2026 21:28:43 GMT+0000 (Coordinated Universal Time)
cuid: cmmi9lbe4000002jvafjjhohj
slug: blog-filtering-trap

---

---
title: "The Hidden Killer in Multi-Agent Systems: When Your AI Starts Filtering Like Middle Management"
subtitle: "LLMs are lossy encoders. Every time your primary agent 'digests' information before passing it to a subagent, critical details vanish — silently, confidently, and catastrophically."
tags:
  - name: "AI"
    slug: "ai"
  - name: "Multi-Agent Systems"
    slug: "multi-agent-systems"
  - name: "LLM"
    slug: "llm"
  - name: "Software Architecture"
    slug: "software-architecture"
coverImage: "https://drive.google.com/uc?export=view&id=1ny0FBdFd8mCKjYymnOvMunox-d1BnhMX"
---

# The Hidden Killer in Multi-Agent Systems: When Your AI Starts Filtering Like Middle Management

## The Incident That Changed How I Think About Agent Architectures

Earlier this year, I watched a simple task go sideways in the worst possible way.

A user asked their AI assistant to do something trivial: take an existing technical article about configuring a messaging platform's developer settings (API credentials and IP whitelisting), extract the relevant steps, and write a quick how-to guide for a colleague. Five minutes of work, tops.

What actually happened: the generated document covered seven steps instead of four, the single most critical URL — the one telling the reader *where to actually obtain the API credentials* — was silently dropped, and the user had to manually fix the output twice. A five-minute task turned into a thirty-minute exercise in frustration.

This wasn't a fluke. It wasn't a hallucination. It wasn't even a bug in the traditional sense.

It was something far more insidious: a **structural trap** that lurks inside every multi-agent system where a primary agent delegates work to subagents. I've come to call it the **Primary Agent Information Filtering Trap**, and after investigating it thoroughly, I believe it's one of the most underappreciated failure modes in multi-agent AI architectures today.

## What Actually Went Wrong: A Post-Mortem

Let me walk through the failure in detail, because the devil is very much in the details.

### The Architecture

The system uses a common multi-agent pattern: a **primary agent** (the "main" agent) handles user conversation, understands intent, plans tasks, and spawns **subagents** to do the actual work — writing documents, calling APIs, processing data. This is a perfectly reasonable architecture. It's how most sophisticated AI agent platforms work.

### Failure #1: Scope Creep

The user wanted steps for configuring API credentials and IP whitelisting. The primary agent read the source article, decided the user needed a comprehensive seven-step guide, and dispatched a subagent with those instructions. The subagent faithfully produced all seven steps.

The user opened the document and immediately said: *"I don't need steps 5 through 7. Delete them."*

But the subagent had already exited. The user had to manually edit the Google Doc themselves.

**Root cause:** The primary agent never confirmed scope with the user before spawning the subagent. It *assumed* it understood the requirement.

### Failure #2: The Critical Information That Vanished

This is the one that kept me up at night.

The source article contained a specific, critical sentence:

> *"The AppID and AppSecret can be obtained from the developer platform at `https://developers.example.com/platform`."*

This URL was the entire point of the how-to guide. Without it, a reader has no idea where to go to get the credentials. The guide is useless.

The primary agent read the source article. It understood this information. Then it wrote a "refined" set of instructions for the subagent — and in that process, **the URL disappeared**.

The subagent, working only from the primary agent's instructions, produced a document that looked polished and complete. It had proper formatting, clear step numbering, professional language. But the most important piece of information — the URL — was simply absent.

The user caught it and was furious: *"Why didn't you just give the full article to the subagent? Why did you summarize it first?"*

That question cut straight to the heart of a deep architectural problem.

## Defining the Trap

The **Primary Agent Information Filtering Trap** is a structural problem in multi-agent systems:

> When a primary agent (typically an LLM) receives complete information from the user, it unconsciously "digests," summarizes, and rewrites that information before delegating to subagents — rather than passing it through intact. This process appears to improve efficiency but causes unpredictable information loss.

This isn't a bug. It's a **side effect of a feature**. The very capability that makes LLMs useful — understanding, processing, and generating text — becomes a liability when the LLM is supposed to act as a relay.

The trap has four characteristics that make it particularly dangerous:

1. **Stealth.** The primary agent doesn't flag that it omitted anything. It doesn't *know* it omitted anything. From its perspective, it faithfully conveyed the essential information.

2. **Unpredictability.** You can't predict *what* will be lost. It might be a URL, a number, a boundary condition, an exception case, a configuration parameter. The losses are arbitrary and context-dependent.

3. **False confidence.** The primary agent's output looks complete and professional. The subagent receives what appears to be a well-structured brief. Everything *looks* fine until a human inspects the final output.

4. **Compounding.** In multi-layer agent architectures (Agent A → Agent B → Agent C), each layer introduces its own losses. If each layer drops 20% of specific details, after four layers you're left with just 41% of the original information.

## Why LLMs Are Natural-Born Information Filters

### Training Objectives Create the Behavior

LLMs are not trained to transparently relay information. They're trained to **understand, process, and generate** text.

When an LLM reads a 2,000-word article and is told to "pass the task to another agent," its instinct is to summarize, paraphrase, restructure, and produce a "better" version. What it will *not* do is pass the original text through unchanged.

This is the fundamental issue. **LLMs are text processors, not message relays.** Using one as a dispatcher is like hiring a translator to be a courier — they can't resist "translating" the message, even when the source and target language are the same.

Specifically, LLMs exhibit several biases that cause information loss:

- **Summarization bias.** LLMs gravitate toward expressing "equivalent" meaning in fewer words. In this compression, specific details — URLs, exact numbers, configuration parameters — get classified as "omittable."

- **Paraphrase bias.** LLMs prefer to express things "in their own words" rather than copying verbatim. Semantic meaning may survive, but precise artifacts (links, code snippets, credentials) often don't.

- **Restructuring bias.** After understanding information, LLMs reorganize it into what they consider a "better" structure. Details that seem minor in the new structure may be dropped entirely.

- **Token optimization pressure.** The primary agent may unconsciously shorten instructions to the subagent, conserving tokens. Saving a few cents on tokens while losing critical information — that's the worst trade in engineering.

### The Middle Management Analogy

This problem has a perfect analogy in human organizations. Consider a typical corporate information chain:

```
CEO shares 10 key points in a strategy meeting
    ↓
VP attends, understands 8, decides 2 are "not that important"
    ↓
VP conveys 6 to the department (time was limited, had to "streamline")
    ↓
Manager turns 6 into an execution plan, implements 4 ("some weren't feasible")
    ↓
Result: 4 of the CEO's 10 points actually get executed
```

This is classic **Organizational Information Decay**. Every intermediate layer "digests" the information — understanding, filtering, rewriting, forwarding — and each step introduces loss.

The primary agent in a multi-agent system is that VP. It heard the CEO (user), believes it understood everything, then conveys it "in its own words" to the manager (subagent). Ten points become six.

The critical difference: a human VP at least *knows* they might have missed something. They might say, "The CEO's original message was more detailed — you should double-check." An LLM primary agent will never do this. It has complete confidence in its "digested" version. It will never suspect it left anything out.

### Not a Bug — A Feature's Side Effect

This distinction matters enormously for how we address the problem:

> The Primary Agent Information Filtering Trap is not a fixable bug. It is the side effect of LLMs' core text-processing capability operating within a specific architecture.

You cannot "fix" an LLM's summarization tendency, because summarization is precisely what makes it useful. What you *can* do is design your multi-agent architecture so that the primary agent's role is **dispatch and relay**, not **comprehend and retell**.

This is an architecture problem, not a model problem.

## 5 Whys: Tracing to the Root

Let's apply Toyota's 5 Whys to trace this failure to its true root cause:

**Why #1:** Why was the critical URL missing from the output?
→ Because the primary agent's instructions to the subagent didn't include it.

**Why #2:** Why didn't the primary agent include it?
→ Because the primary agent "hand-wrote" the task instructions — it read the source article, digested the content, and rewrote it in its own words.

**Why #3:** Why did it digest instead of passing through the original?
→ Because that's what LLMs are trained to do: understand, summarize, paraphrase, generate. Asking an LLM to relay information verbatim is like asking a fish not to swim.

**Why #4:** Why wasn't there a mechanism to prevent this digestion?
→ Because multi-agent system designers typically assume the primary agent is a reliable "understander" and "conveyor." But in reality, **understanding and lossless conveyance are contradictory** — the act of understanding is inherently lossy.

**Why #5:** Why is lossy understanding unacceptable here?
→ Because for operational documents, a single dropped URL, an omitted step, or an incorrect parameter renders the entire document useless. Saving a few cents in tokens while costing thirty minutes of rework and eroding user trust is the worst possible optimization.

**Root cause:** The multi-agent architecture assigns the LLM three simultaneous roles — **understander**, **decision-maker**, and **messenger** — but the LLM is fundamentally unqualified as a messenger. It cannot resist editing the message in transit.

## An Information Theory Perspective

If you look at this through the lens of information theory, a deeper insight emerges:

> **Every LLM agent is a lossy encoder.**

When information passes through an LLM, it isn't "transmitted." It's **understood and then regenerated**. This process is necessarily lossy because the LLM's "understanding" is probabilistic, biased, and shaped by training data.

In a single-agent system, this lossy encoding happens once: User → LLM → Output. One round of lossy processing is usually acceptable.

In a multi-agent system, lossy encoding happens at every node:

```
User → Agent A (lossy) → Agent B (lossy) → Agent C (lossy) → Output
```

This is exactly like serial translation: translate a Chinese article to English, then to Japanese, then back to Chinese. What you get back is not the original. Each translation is a lossy encoding, and the cumulative result is significant information degradation.

**The implication is fundamental:** the more agent layers in your system, the lower the information fidelity. This is an information-theoretic constraint, not something solvable by "better models." It requires architectural solutions.

The key insight for solutions: **reduce the number of LLM nodes that information passes through.** Let raw information bypass intermediate agents and reach the final executor directly. The primary agent transmits *instructions* (what to do), while source materials travel via a *side channel* (files, references, direct attachment) to the subagent.

## The Solutions: Taming the Information Filter

Understanding the root cause makes the solution space clear. The core principle:

> Don't try to make the LLM a better messenger. Redesign the architecture so the LLM doesn't need to be a messenger at all.

### 1. Redefine the Role: Dispatcher, Not Translator

The primary agent's role should be strictly defined as a **dispatcher**, not a **translator**.

A dispatcher: determines the task objective → selects the executor → passes through raw materials → sets constraints → monitors results.

A dispatcher does NOT: digest source materials, rewrite user requirements, or "streamline" reference information.

Think of a good dispatcher as a FedEx driver: you give them a package, they deliver it intact. They don't open the package, inspect the contents, and decide to swap in something lighter.

### 2. Pass Raw Materials Through — Never Manually Summarize

This is the single most important rule:

> **Source materials go to the subagent in full, or as a file reference. The primary agent never manually summarizes them.**

**Wrong approach:**
Primary agent reads a 2,000-word article → "digests" it into 500 words → passes digest to subagent.

**Right approach:**
Primary agent includes the full 2,000-word source in the task instructions → subagent reads the original, extracts what it needs.

For particularly long materials:
Primary agent saves the source as a file → task instructions say "Reference the source at `/tmp/source_article.md`" → subagent reads the file directly.

The benefit: even if the primary agent's *understanding* missed certain details, the subagent can still access the complete source. The information path changes from "User → Primary interprets → Primary rewrites → Subagent interprets" to "User → Primary relays → Subagent reads original" — eliminating one entire layer of lossy processing.

### 3. Structured Task Templates

Task instructions from primary to subagent should use a structured template that explicitly separates the primary agent's judgments from raw facts:

```
【Objective】 What needs to be done
【Output Format】 Document type, length, language, etc.
【Include】 Required content points
【Exclude】 What to leave out
【Source Materials】 Full text or file path
【User's Exact Words】 Verbatim quote of the user's request
```

The critical value: this template forces "Source Materials" and "User's Exact Words" to be preserved as independent fields. The primary agent cannot "digest" them into other sections.

### 4. Confirm Before Executing: Give Humans a Checkpoint

For document-generation tasks, the primary agent should produce an outline for user confirmation *before* spawning a subagent.

**Correct flow:**
1. User states the requirement
2. Primary agent generates a brief outline (3-5 bullet points)
3. User confirms or adjusts the outline
4. Primary agent spawns subagent with confirmed scope
5. Subagent executes

This checkpoint catches understanding gaps early. In the incident above, if the primary agent had shown a 7-step outline first, the user would have immediately said "only the first 4 steps" — avoiding all downstream rework.

### 5. Pre-Spawn Checklist: 3 Seconds of Prevention

Before spawning a subagent, enforce a quick mental checklist:

- ☐ Has the user confirmed the task scope?
- ☐ Are source materials passed through in full (not summarized)?
- ☐ Are exclusions explicitly stated?
- ☐ Is the user's original request preserved verbatim?

Three seconds of checking prevents thirty minutes of rework.

### 6. The 500-Word Rule for File References

When source materials exceed ~500 words, save them as a file and reference the file path in the task instructions rather than inlining the full text.

Benefits:
- Prevents long source material from interfering with the subagent's understanding of the *task itself*
- Files can be shared across multiple subagents, ensuring consistency
- Preserves the complete original for later auditing and comparison

## Broader Implications for Multi-Agent System Builders

If you're designing or operating multi-agent systems, here are the core principles I've distilled from this experience:

1. **Always assume the LLM will "digest" information.** Don't expect any LLM to relay anything verbatim. Bake this assumption into your architecture as a constraint, not a hope.

2. **Separate the instruction channel from the data channel.** The primary agent uses the instruction channel to tell the subagent *what to do* (objectives, constraints, format). Raw data travels via a data channel directly to the subagent (file references, full attachments). The two channels stay separate; information never passes through the primary agent's "understanding" process.

3. **Minimize agent layers.** If you can solve it with 2 layers, don't use 3. Every additional agent layer compounds the risk of information loss.

4. **Insert human checkpoints at critical junctures.** Not every step needs human confirmation, but at "requirement understanding" and "final output review," human involvement is essential.

5. **Maintain complete copies of source materials.** Ensure that throughout the entire multi-agent pipeline, original materials remain accessible. Any agent in the chain should be able to trace back to the information source.

6. **Distrust "correct-looking" output.** The most dangerous multi-agent failure isn't producing obviously wrong output — it's producing output that looks polished, professional, and complete while missing critical details. Build systematic verification mechanisms rather than relying on human eyeballing.

## Conclusion

This article grew out of a real incident. A trivial task exposed a deep architectural trap in multi-agent systems.

The trap is dangerous precisely because it isn't an obvious bug — it's a side effect of LLMs' most fundamental capability (understanding and generating text) operating within a delegation architecture. You can't "fix" it. You can only **architect around it**.

For everyone building or using multi-agent systems, my advice is this:

**Think of your primary agent as a dispatch center, not a translation office.** A dispatch center decides where packages go, what route they take, and when they arrive — but it never opens the package and repacks the contents.

Information is the most valuable cargo in your system. Every unnecessary round of "understanding" and "rewriting" is a lossy operation on that cargo. Reducing the number of lossy operations is the core strategy for improving system reliability.

Remember the user's devastating question: *"Why didn't you just give the full article to the subagent? Why did you summarize it first?"*

The answer to that question is the key to solving multi-agent information loss.

---

## Quick Reference Card

### Multi-Agent Information Passing Checklist

✅ Primary agent role = **Dispatcher** (relay raw materials + instructions)
❌ Primary agent role ≠ **Translator** (digest and rewrite)

✅ Source materials passed in full or via file reference
❌ Primary agent manually summarizes source materials

✅ Use structured templates: Objective / Output Format / Include / Exclude / Source Materials / User's Exact Words
❌ Primary agent freestyles task instructions

✅ Confirm outline with user before spawning subagent for document tasks
❌ Spawn subagent immediately and generate full document

✅ Pre-spawn 3-second check: Scope confirmed? Raw materials included? Exclusions stated?
❌ Spawn first, fix later

> *"Saving a few cents on tokens while losing critical information and spending thirty minutes on rework — that's the worst optimization in engineering."*
