---
title: "A Paper Is Not a Workflow: Building an Auditable AI Review Skill"
date: "2026-07-11"
slug: "a-paper-is-not-a-workflow-building-an-auditable-ai-review-skill"
category: "tech"
theme: "ai-agents"
tags: ["AI", "peer review", "research", "Codex", "auditability"]
description: "An auditable AI review workflow turns a paper into an evidence trail, staged critique, and a human-owned final judgment."
cover_image: "/assets/images/covers/a-paper-is-not-a-workflow-building-an-auditable-ai-review-skill.png"
---

*The interesting part of AI-assisted peer review is not whether a model can write comments. It is whether a reviewer can inspect, challenge, and ultimately own the path that produced them.*

I began with a paper rather than a codebase.

In April, the [AAAI-26 AI Review Pilot paper](https://arxiv.org/abs/2604.13940) described a striking result: a multi-stage, tool-using system produced an identified AI review for every one of 22,977 full-review submissions in less than a day. The paper made a serious case that AI can contribute something useful to peer review at real conference scale. But a paper is not an implementation. It tells you what a system achieved; it rarely gives you the operational machinery required to reproduce the workflow responsibly on one paper, on your own machine, with artifacts a human can inspect.

For the workflow I wanted to explore, I could not find an implementation I could clone and run. So I built one: [paper-review-skill](https://github.com/chunhualiao/paper-review-skill), an auditable skill for turning a paper into a structured review package rather than a single opaque block of model prose.

The point is not to automate judgment away. It is to make the work around judgment more disciplined.

## The gap between “review this PDF” and a review I can defend

A one-line prompt—“review this paper”—can produce something that looks plausible. That is precisely the problem. A polished review can conceal every question that matters:

- Which version of the paper did the model actually read?
- Did extraction scramble a two-column PDF or silently omit a table?
- Which observations came from the paper, and which came from the model’s inference?
- Was the criticism written before or after the reviewer saw the evidence?
- Which model, prompt, and reasoning policy produced each stage?
- Can a human follow a question from the final verdict back to an artifact?

For an academic review, those are not implementation details. They are the work.

The design premise of the skill is simple: **a useful AI-assisted review should be a review package, not a magic answer.** The final prose matters, but it should be the visible end of an evidence chain.

That premise led me away from a single giant prompt and toward a staged system with explicit inputs, intermediate artifacts, checks, and a final human-readable report.

## Start with the paper we actually mean to review

The first engineering problem is more mundane than it sounds: PDFs are treacherous inputs.

The skill accepts local files, direct PDF links, and arXiv URLs. A URL is downloaded into a per-paper artifact directory along with metadata about the original URL, final URL, content type, size, and SHA-256 hash. That is not bureaucracy. Without it, a later reviewer cannot tell whether the system analyzed the intended paper or a login page masquerading as one.

It then scopes long papers dynamically. Rather than applying a crude “first N pages” cutoff, it looks for the point at which the main narrative ends—references, bibliography, appendices, checklists, and similar back matter. If a references heading shares a page with the conclusion, the shared page stays; later reference-only pages can be excluded. The decision is recorded.

Next comes OCR. The workflow treats normalized Markdown as the canonical review evidence because it is easier to audit than a pile of page images or flat text. Two-column prose is normalized into a logical reading order while tables, math, code, captions, and image references are retained as structured Markdown where possible.

This is an unglamorous layer of the stack, but it changes the quality of everything above it. A review cannot be evidence-grounded if its evidence layer is quietly malformed.

## Five lenses instead of one synthetic verdict

Once the evidence exists, the skill does not ask a model for a final recommendation immediately. It creates separate review stages for five different jobs:

1. **Story** — What problem does the paper claim to solve? What is the end-to-end mechanism? What are the inputs, assumptions, decision points, outputs, and evaluated claims?
2. **Presentation** — Is the paper clear enough to understand, reproduce, and evaluate?
3. **Evaluation** — Do the experiments support the claims? Are baselines, measurements, statistics, and negative results adequate?
4. **Correctness** — Are the techniques appropriate? Which assumptions carry the conclusion? Are there numerical, technical, or scaling concerns?
5. **Significance** — Why does the problem matter, what is genuinely new, and how does the work compare with what already exists?

This separation is not ceremonial. It prevents the familiar failure mode in which a model writes one confident paragraph that blends summary, novelty, correctness, and recommendation into an inseparable slurry.

The story stage has a particularly important constraint: it must trace how the proposed approach works end to end. In a serious review, “the method uses a model and gets good results” is not an explanation. The reviewer should be able to reconstruct the mechanism, see which parts were evaluated, and identify what was assumed rather than demonstrated.

The stage artifacts then feed an initial review, a self-critique of that review, a revised final review, and an independent quality critic. The critic reviews the review—not the paper again—and asks whether it is complete, evidence-grounded, internally consistent, appropriate, and ready to render.

That distinction matters. AI can be very good at producing fluent text; a quality gate asks whether the text earned its fluency.

## Auditability is a product feature, not a logging afterthought

The core implementation choice is that every consequential step leaves a trail.

A review artifact directory can contain the downloaded or scoped input, evidence manifest, OCR Markdown, prompts, raw responses, stage artifacts, timing logs, model provenance, numerical checks, citation notes, the final review, the quality report, and a rendered HTML report. The exact contents vary with the review, but the shape is deliberate.

Timing and provenance are first-class artifacts. The workflow records the model and reasoning level used for each stage, stage durations, token-related metrics when available, and summaries of the work performed. The HTML report exposes this audit material alongside the final review rather than burying it in a terminal log.

The result is not perfect reproducibility in the scientific sense—hosted models change, OCR can be probabilistic, and reviewer judgment remains human. It is something more practical: a reviewer can inspect the route from source material to conclusion and decide where to trust, revise, or discard it.

I also added a local follow-up explainer. The rendered report is not a dead export. A reviewer can ask questions about a highlighted claim or an artifact and use the answer as a way to navigate the review package. It is deliberately a single-user service bound to the loopback interface, not something to expose on an untrusted network: the selected paper and review context may be sent to the configured answering backend. The follow-up interface is useful precisely because it remains attached to the evidence-rich review context instead of pretending the original answer was final.

## Turning a research description into software

The implementation is intentionally opinionated about operational discipline.

The default runtime uses an authenticated Codex CLI subscription rather than requiring a separate API key for every stage. `olmOCR` runs through a local compatibility shim by default. The standard preflights verify the OCR dependencies and that the local HTML-explainer server plus its question route start correctly with a test response; a separate deep check can verify the configured Codex answering backend. A degraded dependency should not silently produce a review that merely looks complete.

Around that workflow is ordinary software engineering: scripts for acquisition, paper scoping, OCR normalization, model policy, timing, HTML rendering, artifact validation, and redaction; unit tests for the scripts; synthetic regression fixtures; repository-hygiene tests; and CI that runs evaluation validation, regression fixtures, unit tests with an 80% coverage gate, and script smoke tests on pull requests.

That combination is the real project. The original paper supplied an important idea: peer review can benefit from staged, tool-using AI at scale. The repository asks a different question: what would it take to make a smaller-scale version inspectable, maintainable, and safe enough for a careful reviewer to use?

## What it buys a reviewer

The immediate benefit is not a faster accept/reject button. It is a better working surface for human review.

A reviewer gets a structured map of a paper before writing final prose. Technical concerns have somewhere to live without being confused with presentation complaints. Numerical consistency checks can be recorded rather than remembered. Missing evidence can be labeled “not reported” rather than replaced with invention. A later self-critique can challenge an early conclusion. And when a co-reviewer or author asks, “Why did you say that?”, there is an artifact trail rather than a shrug.

The system also creates leverage for iteration. If the final review is weak, I can inspect the stage that failed: perhaps OCR was poor, perhaps the mechanism trace was shallow, perhaps the evaluation stage overreached, perhaps the quality critic missed a contradiction. That is a much more actionable failure mode than “the model gave a bad answer.”

## The caveats are the point

This is not a license to upload every submission to an AI service.

Conference and journal policies vary. Some venues restrict or prohibit AI-assisted reviewing. Many submissions are confidential. Double-blind review adds a further hazard: generated text can repeat identifying information embedded in a PDF. A reviewer must check the venue rules, protect confidentiality, and remove identifying details where required before using any external model backend.

There is also a deeper caveat. Audit trails improve accountability; they do not manufacture judgment. A logged weak inference is still weak. A staged critique can still miss a flaw. A model may produce a persuasive explanation for a paper it has misunderstood. The human reviewer owns the final recommendation, every claim submitted to authors, and every policy decision about whether AI assistance is appropriate.

That is why the skill treats uncertainty as an acceptable output. “Not reported,” “unclear from the evidence,” and “requires human verification” are often more valuable than a confident fabrication.

## From paper to practice

The most useful research papers do more than report a result. They leave you with a design pressure: *if this is true, what should I build?*

The AAAI-26 pilot paper created that pressure for me. It made AI-assisted review feel less like a speculative demo and more like a systems problem: evidence, workflow, policy, auditability, human responsibility.

`paper-review-skill` is my attempt to make that problem concrete. It is not a replacement for peer reviewers. It is a way to give them a review process whose intermediate reasoning can be inspected, challenged, and improved—before the final judgment carries any weight.

That is the standard I want for AI assistance in research: not merely more output, but more accountable work.
