---
title: "You Wouldn't Push Directly to Main — So Why Are You Doing It to Your AI Gateway?"
date: 2026-03-21
slug: you-wouldnt-push-directly-to-main-so-why-are-you-doing-it-to-your-ai-gateway
cover_image: "https://i.imgur.com/eKzLwDi.jpeg"
category: thoughts
theme: ai-infrastructure
tags: [AI, CI/CD, DevOps, Gateway, OpenClaw, Infrastructure]
description: "What decades of software engineering taught me about running reliable AI agent infrastructure. Lessons from managing multiple AI gateways and why they need the same discipline as production code."
original_url: "https://chunhualiao.hashnode.dev/you-wouldn-t-push-directly-to-main-so-why-are-you-doing-it-to-your-ai-gateway"
---

Every seasoned software developer knows the rule: you do not push directly to the main branch of a shared repository.

Not because the code gods forbid it. Because experience teaches you, often painfully, what happens when you do. You add a feature, it breaks three other things you weren't watching. The regression is silent. Users notice before you do. And you spend the next weekend not building new things — but finding out which of the seven changes you made in the last week broke something that was working fine before.

The software industry's answer to this is Continuous Integration and Continuous Deployment (CI/CD). Every commit runs a battery of regression tests. The pipeline either passes or it doesn't. If it passes, you have reasonable confidence you improved the system without degrading it. If it fails, you know before anyone else does. The gate exists not to slow you down, but to make your progress safe.

I spent decades working on compilers and parallel systems. This lesson is deeply ingrained.

Then I started running multiple AI agent gateways — and promptly forgot everything I knew.

---

## The Situation: Multiple Gateways, Zero Guards

I run several AI gateways. One for personal use on my laptop. One for a non-profit organization I help lead — a gateway that handles email drafting, slide presentations, Google Docs collaboration, posting to X.com, managing a YouTube channel, maintaining a WordPress website, and converting meeting notes and announcements to audio via text-to-speech — a feature board members rely on heavily for accessibility and async updates. One for a community organization I chair. Each is a persistent AI assistant connected to messaging channels, tools, APIs, and credentials — acting on my behalf around the clock.

And I kept fixing them. A model stopped working. An API key vanished after a container restart. A capability that was there yesterday was gone today — the gateway could no longer post to X.com, or the WordPress integration stopped responding, or the email skill silently lost authentication. I'd SSH in, patch something, restart, move on. Until it broke again.

The pattern was obvious in retrospect: I was pushing directly to main.

Every config edit went directly into the live gateway. No regression check. No capability verification before or after. No way to know whether my change improved things, left them the same, or silently degraded something I wasn't looking at. I was adding features and breaking other places — exactly the failure mode CI/CD exists to prevent.

---

## The Regression Problem: What Breaks When You Change a Gateway

A gateway is not a simple system. An OpenClaw gateway has at least five independent dimensions where its configuration and capabilities live:

1. The main `openclaw.json` config file
2. Environment variables in `launchd` plists (macOS) or `systemd` service files (Linux)
3. Docker `-e` environment flags for containerized agents
4. Provider-level API key blocks embedded in `models.providers`
5. **Skills** — the specialized capability modules installed on the gateway, each bringing its own dependencies, credentials, and integration points

That last one is easy to overlook, but it's where some of the most painful regressions hide. Skills are not just config entries — they are live integrations. The non-profit gateway I mentioned runs skills for Google Workspace, WordPress, X.com, and YouTube. Each skill depends on credentials that can expire, APIs that can change, and OAuth tokens that can be revoked. A skill that was working Monday can stop working Tuesday with no error message — just silent failure when the agent tries to use it.

In a software repo, touching one file can break another through hidden dependencies. In a gateway, the dependencies are just as real — but invisible. Rotate a key in one location, the others go stale. Recreate a Docker container, keys passed via flags vanish. Upgrade OpenClaw, the hardcoded binary path in your service file points to a directory that no longer exists. Update a skill, and a dependent credential it relied on may silently stop being loaded.

These are regressions. The same class of failure that CI catches in software. Except here, there was no CI. Every change was a direct push to main.

---

## The Upgrade Trap

The consequences became most vivid during an upgrade.

I ran `pnpm add -g openclaw@latest`. The gateway went down immediately. The rescue script I'd built detected "gateway not running" and attempted a restart — every five minutes, indefinitely. But each restart crashed again with `MODULE_NOT_FOUND`. The new version had installed to a new path-hashed directory in the pnpm store. The launchd plist hardcoded the old path. No amount of restarting would fix a structural mismatch.

My rescue script was designed to recover from transient crashes: process died, restart it. It had no test for structural failures: binary path invalid, repair the service file first. These are fundamentally different failure modes. In CI terms: a transient crash is a flaky test. A structural failure is a broken build. The responses are completely different.

I was treating every failure like a flaky test when some were broken builds.

---

## Schema Drift: When the Spec Changes and Nobody Warns You

There was another kind of regression I didn't anticipate: the gateway's own config schema changing between versions.

After one upgrade, a different gateway refused to start. The error was a config validation failure: fields like `channels.discord.dmPolicy` had moved to `channels.discord.dm.policy`. The old config was now structurally invalid. The gateway wouldn't boot. No migration guide. No warning at upgrade time.

In software, this is a breaking API change — the kind that semantic versioning exists to flag. In a config file you own, there's no versioning contract. The spec changed; your file didn't; things silently broke.

This is a regression too. Just a different kind: not a bug you introduced, but a compatibility break you weren't guarded against.

---

## No Capability Suite: Flying Blind

The deepest problem was the one most analogous to having no tests at all.

After any significant gateway change, I had no systematic way to verify what the gateway could actually do. Configure a new integration — API key entered, config updated, gateway restarted — and I might discover three days later that the key was in the wrong config section, or the token had expired, or I'd gotten the endpoint wrong. The capability appeared in the config. It didn't actually work.

For the non-profit gateway, this meant not knowing whether email sending, Slides generation, X.com posting, or the TTS audio skill board members depend on were functional until someone tried to use them and failed. The gateway looked fine. The skills were listed. The credentials existed somewhere. But the actual end-to-end path was broken.

In software, this is the equivalent of having no test coverage for a feature you just shipped. The code compiles. The tests pass — because the tests don't exist. Users discover the bug.

There was no pre-flight check for my gateways. No test suite that said: "Before we declare this gateway ready, verify it can actually do the ten things it claims to be able to do."

---

## What We're Building: CI/CD for Gateways

Once I framed the problem this way — no regression tests, direct push to production — the solution became obvious. Build the equivalent of CI/CD for gateway changes.

I want to be honest: this work is still in progress. We're not done. But I'm sharing these lessons early, because if you're running OpenClaw gateways (or any AI agent infrastructure), I'd rather you avoid repeating my mistakes while I'm still working through them.

### The Test Suite: Capability Audit

The first thing any CI system needs is tests. We built a four-step capability audit pipeline:

1. **Detect** — parse the config, env vars, credential files, and installed skills to enumerate every claimed capability
2. **Mine** — scan session logs for evidence of recent actual usage (which capabilities are actually being called?)
3. **Verify** — run live API endpoint tests (5-second timeout per service) to confirm each capability actually works end-to-end
4. **Register** — produce a `CAPABILITY-REGISTRY.md`: a timestamped, verified snapshot of what this gateway can do

This is the test suite. Before any significant change, run the audit. After the change, run it again. The diff tells you whether the change improved things, left them the same, or broke something.

For the non-profit gateway, a capability audit reveals which of the ten-plus integrations — email, calendar, Slides, Docs, X.com, WordPress, YouTube, and TTS audio — are actually working versus silently failed. Improvements are fine. Degradations are not. The audit makes the difference visible.

### The Gate: Config Validation

In CI, the gate prevents broken code from reaching main. For gateways, the equivalent is a config validation script that runs before any config change is applied. It checks JSON validity, blocks known dangerous patterns (we had a real incident from an overly permissive agent setting that caused unauthorized access), creates timestamped backups, and only writes the new config if it passes. No direct edits to the live config. Every change goes through the gate.

### Fixing the Build Environment

A CI system is only useful if the build environment itself is reproducible. On our gateways, it wasn't. The binary path in the service file changed on every upgrade. API keys lived in four independent locations with no synchronization. Skills had credentials scattered across config, environment, and provider blocks.

The fixes we've implemented so far:
- **Version-agnostic service files.** Point to the pnpm wrapper binary, not the versioned store path. Upgrade-safe by design.
- **Canonical credential files.** One `env` file per gateway. All other locations — config JSON, Docker flags, provider blocks — derive from it via sync tooling. Key rotation happens once and propagates everywhere. Skills that need credentials pull from the same canonical source.
- **Crash-loop-aware rescue scripts.** Track consecutive failures. After three failures in fifteen minutes, switch from restart mode to diagnose-and-repair mode — detecting whether it's a transient crash or a structural failure before trying to fix it.

### Continuous Regression Detection

The last piece — still being refined — is ongoing monitoring: a daily job that compares each gateway's live config and capability state against a known-good baseline stored in version control.

This is the regression detector. It classifies every change as either an improvement (new providers, new models, new channels, new skills) or a degradation (removed capabilities, disabled channels, missing keys, broken skills). Improvements auto-update the baseline. Degradations trigger an immediate alert.

The key design principle mirrors software versioning: improvements and degradations are not symmetric. Adding a new capability is expected. Losing an existing one is a regression. The system needs to tell them apart.

---

## The Lesson — Still Being Applied

When I look at what we've built so far — capability audit, config validation gates, canonical credential management, crash-loop detection, drift monitoring — it's recognizable. It's the same architecture software teams assembled over decades to answer the same underlying question: how do you keep improving a system without accidentally breaking what already works?

CI/CD. Regression tests. Source-of-truth configuration. Environment reproducibility. Deployment gates. Change classification.

The names are different. The principles are identical.

Running AI gateways is software operations. The rules of the craft apply. You cannot push directly to main without regression tests. You cannot deploy without a capability check. You cannot let configuration drift without detection.

I knew this. I just forgot to apply it.

We're not finished — the full CI/CD pipeline for gateways is still being built. But the gateways are already more stable since we stopped treating them as scratch space and started treating them like production software. Every change goes through a gate. Every significant change triggers a capability audit. Regressions get caught before users do — most of the time.

That's not a new idea. It's the oldest idea in the field.

We just needed to remember to bring it with us.

---

*Chunhua Liao is a computer scientist at Lawrence Livermore National Laboratory working on AI and compiler research. He also runs AI-powered agent infrastructure for community governance and personal productivity.*
