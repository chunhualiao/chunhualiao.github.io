---
title: "Zhilin Yang: From a CMU Lecture Hall to the Dark Side of the Moon — A Technical Idealist's Ten-Year March, and What It Tells Us About the Future"
date: "2026-07-17"
slug: "zhilin-yang-cmu-to-moonshot-ai"
category: "tech"
theme: "ai"
tags: ["AI", "LLMs", "Moonshot AI", "open source"]
description: "Zhilin Yang’s journey from CMU research to Moonshot AI, and the technical and strategic choices behind it."
---

## Prologue: Two Tweets, Seven Years Apart
![](/assets/images/posts/zhilin-yang-cmu-to-moonshot-ai/18240-1.png)
In July 2026, after the release of Kimi K3, one tweet lit up AI circles on both sides of the Pacific.

The author was Ruslan Salakhutdinov — professor at Carnegie Mellon University (CMU), former head of AI at Apple, and a towering figure in deep learning. He wrote:

> "Congratulations to Zhilin Yang, founder and CEO of @Kimi_Moonshot, on the latest Kimi release. What a huge win for the open-source community! It feels like just yesterday Zhilin was graduating from my lab at CMU... Not only did he complete his Ph.D. in just four years, but he also made truly fundamental contributions to ML during his time at CMU."

Below it, he attached a screenshot of his own tweet from August 10, 2019. That day, a young Chinese man in a dark sweater stood at a CMU podium defending his dissertation, with "Learning From Unlabeled Data" projected on the screen behind him. Salakhutdinov had written then:

> "Congratulations to Zhilin Yang for successfully defending his PhD thesis at CMU in just 4 years! Zhilin introduced XL-Net, Transformer-XL, Mixture of Softmaxes High-Rank LM, HotpotQA, GLoMo Unsupervised Learning of Relational Graphs, just to name a few."

Seven years. The same name, appearing in two tweets by the same advisor. The first celebrated a PhD graduate who had written papers that would be cited tens of thousands of times. The second acknowledged that this student's company had built an open-source model that all of Silicon Valley now had to take seriously.

That young man is Zhilin Yang, born in November 1992 in Shantou, Guangdong, China. His life trajectory — from an olympiad student at Jinshan Middle School in Shantou, to the top of his class at Tsinghua, to a four-year CMU PhD, to Google Brain and Meta AI, to founding Moonshot AI — reads like the precisely plotted route of a prodigy. But what is truly worth a long-form essay is not the route itself; it is the handful of critical turning points along the way. At each one, he made the opposite of the "rationally optimal" choice — and each time, in hindsight, he landed exactly on the beat of a shifting era.

This essay tries to answer three questions:

1. What exactly did Zhilin Yang get right? (A hardcore breakdown of his resume and academic contributions)
2. What mistakes did he make, and what price did he pay? (The real ledger of two startups)
3. From his choices and judgments, what can we deduce about where the AI industry is heading in the next three to five years? (The most substantive part of this essay)

---

## Chapter 1: The Full Resume — A Drummer Who "Got Into Tsinghua Three Times"

### 1.1 Shantou: Olympiad, Guaranteed Admission, and a 667 Gaokao Score

Born in November 1992 in Shantou, Guangdong, Yang attended Jinshan Middle School. In his first year of high school he was selected for the informatics olympiad class; after just one year of training he won first prize in the Guangdong division of the National Olympiad in Informatics, earning guaranteed admission to Tsinghua University.

What happened next has been retold countless times, because it so precisely foreshadows his character: already guaranteed admission, he then took Tsinghua's independent admissions exam and passed again; in his final year, he insisted on taking the national college entrance exam (gaokao) as a regular candidate — and scored 667, the top science score in Shantou.

Three tickets into Tsinghua. The first through competition, the second through comprehensive selection, the third purely because "I wanted to prove I could." This near-obsessive need for self-proof would resurface again and again at the hardest moments of his entrepreneurial life.

### 1.2 Tsinghua: From Thermal Engineering to Computer Science, the "God Among Gods" of His Grade

When he enrolled in 2011, Yang chose the Department of Thermal Engineering — for job prospects. In his sophomore year he abruptly transferred to Computer Science, studying under Professor Jie Tang, later a co-founder of Zhipu AI and a leading figure in Chinese large-model research. The reason for transferring was deeply "irrational": he simply liked it. By his own account, one trigger was a programmer character in a Haruki Murakami novel who writes code late into the night — it sparked in him a longing to "make ideas real through technology."

Transferring meant making up a year of coursework. Yet his transcripts in both majors were staggering: he held first place in his grade for all four years; over 90% of his major courses scored above 95; he published more than twenty papers as an undergrad, over ten as first author. His original social-network dataflow algorithm cut prediction error by 28% in a global cancer-prediction competition, hailed by the organizers as "a milestone that overturns traditional prediction models." In 2014 he won Tsinghua's Grand Scholarship for undergraduates by a landslide 13 of 14 votes. An investor at Moonshot AI would later describe him as "the god among gods across several Tsinghua classes."

But he was no bookworm. As an undergrad he founded a rock band called Splay — named after the Splay Tree data structure — serving as drummer and songwriter, and once reaching the top three of Tsinghua's campus singing competition. The band wrote a song about "a daydream of startup success and overnight riches," motivated, he said, by the feeling that "many people around me were striving for class mobility; writing the song was partly empathy, partly a reminder to myself not to become an overly utilitarian person."

Hold on to that detail: a man who warned himself against utilitarianism later founded the fastest-funded AI company in Chinese history. That is not irony — it is the key to understanding him. What he wanted was never money. It was to do something big enough.

### 1.3 CMU: A Four-Year PhD, Two Legendary Advisors, and a String of Industry-Changing Papers

In 2015, Yang graduated first in his class from Tsinghua CS and entered the Language Technologies Institute at Carnegie Mellon for his PhD, co-advised by Ruslan Salakhutdinov (later Apple's AI chief) and William Cohen (then Chief Scientist at Google AI).

A typical CMU computer science PhD takes five to six years. He finished in four. The density of output in those four years is rare even by the standards of deep learning history — we break it down in Chapter 2.

During and after his doctorate, he worked at Google Brain and Facebook AI Research (Meta AI), contributing to early large-model efforts including Google Gemini, Google Bard, Huawei's Pangu NLP, and BAAI's Wudao. The Pangu NLP model he helped lead won the "SAIL Star" award at the 2021 World Artificial Intelligence Conference.

Back in China, he collected a string of academic titles: assistant professor at Tsinghua's Institute for Interdisciplinary Information Sciences (IIIS), 2019 Beijing Academy of Artificial Intelligence (BAAI) Young Scientist, and PI at the Shanghai Qi Zhi Institute.

### 1.4 A Compressed Timeline

| Year | Event |
| --- | --- |
| Nov 1992 | Born in Shantou, Guangdong |
| 2011 | Enters Tsinghua (Thermal Engineering); transfers to CS in year two |
| 2015 | Graduates first in class; begins PhD at CMU |
| 2016 | Co-founds Recurrent AI in his first PhD year |
| Jan / Jun 2019 | Transformer-XL and XLNet published |
| Aug 2019 | Defends PhD in four years |
| 2019–2022 | Google Brain and Meta AI; works on Gemini, Bard, Pangu, Wudao |
| Mar–Apr 2023 | Founds Moonshot AI (月之暗面) |
| Oct 2023 | Kimi assistant launches — the world's first AI product supporting ~200,000 Chinese characters of input |
| Mar 2024 | Kimi opens beta for 2-million-character lossless context; "Kimi concept stocks" surge |
| Late 2024 | Arbitration dispute with Recurrent AI's early shareholders |
| Jan 2025 | DeepSeek-R1 shock; Kimi's darkest hour |
| Jul 2025 | Kimi K2 open-sourced — "another DeepSeek moment" |
| H1 2026 | Over $3.9B raised in six months; valuation rockets from $4.3B to a $31.5B pre-money |
| Jul 2026 | Kimi K3 released: 2.8T parameters, 1M-token context, among the world's strongest open-source models |

---

## Chapter 2: The Academic Contributions — What He Drafted as a PhD Student Became the Blueprint of the LLM Era

To understand why Yang repeatedly pulled his company back from the brink, you must first understand what he actually did as a researcher — because nearly every business judgment he later made traces back to a handful of technical convictions formed during his PhD.

### 2.1 Transformer-XL: The First Time Machines Got "Long Memory"

Published in January 2019 with Yang as a coauthor, Transformer-XL (XL for "eXtra Long") attacked the most painful shortcoming of the then-new Transformer architecture: context length.

After Google introduced the Transformer in 2017, NLP moved en masse from RNNs to attention. But the standard Transformer had a structural flaw: it could only attend within fixed-length segments, say 512 tokens. Long documents had to be chopped into disconnected fragments — information from one segment could not flow into the next. This was known as the "context fragmentation" problem.

Transformer-XL introduced two mechanisms that would be widely inherited:

1. **Segment-level recurrence**: cache the hidden states of the previous segment and feed them to the next as "memory," letting information travel across segments — in effect grafting an RNN's time-travel onto the Transformer skeleton.
2. **Relative positional encoding**: instead of labeling each token with an absolute position, encode the relative distance between tokens. Without this change, the recurrence mechanism is mathematically incoherent — the model could not tell "the 5th word of the previous segment" from "the 5th word of this one."

The result: Transformer-XL became the first attention-based model to comprehensively beat RNNs at both character-level and word-level language modeling, setting world records on every mainstream benchmark at the time. The paper has since been cited thousands of times on Google Scholar.

**Why does this paper deserve its own section?** Because it planted two threads that would later reshape the industry:

- The lineage of virtually every modern long-context technique — RoPE rotary embeddings, sliding-window attention, KV-cache reuse — can be traced back to the "relative positions + segment memory" paradigm.
- More importantly, it forged Yang's own core worldview: **context length is the container of intelligence.** Four years later, when he founded Moonshot AI, the company's very first product strategy was "long context" — Kimi was the world's first AI assistant to support ~200,000 Chinese characters of input. That was not a market choice; it was a technical bet a researcher had placed back in 2019.

### 2.2 XLNet: Beating BERT on 20 Tasks

If Transformer-XL solved "memory length," XLNet (June 2019) took on the "pre-training paradigm" war.

The backdrop: Google's BERT, using masked language modeling (randomly hide 15% of the words and make the model fill in the blanks), had swept NLP. But Yang and his collaborators at CMU and Google Brain — including Quoc Le, a co-author of the original Transformer paper — identified two theoretical flaws in BERT:

- **The independence assumption**: BERT assumes masked tokens are independent of each other, when in fact they are correlated (mask "New York" and "City," and the two are obviously dependent).
- **Pretrain–finetune discrepancy**: the [MASK] token BERT relies on does not exist in real downstream tasks, creating a train–deploy mismatch.

XLNet's answer was **permutation language modeling**: perform autoregressive prediction over all possible orderings of a sentence, so the model both generates autoregressively like GPT and captures bidirectional context like BERT — the best of both worlds. Combined with Transformer-XL's segment recurrence, XLNet beat BERT on 20 NLP tasks at launch, was named by multiple AI outlets as one of the top-10 most important deep learning papers of 2019, and became one of the most-cited NLP papers of that year.

History would ultimately crown GPT-style pure autoregression — not XLNet's permutation modeling — as the winner of the LLM era. But that is not XLNet's failure. Its historical contribution was to prove theoretically, at the peak of BERT's dominance, that autoregression is the more fundamental, more scalable learning objective. The first principle on which every generative LLM is trained today — predict the next token — is precisely the road Yang defended.

### 2.3 The Rest of the "Just to Name a Few"

Salakhutdinov's "just to name a few" was no courtesy. Yang's other signature doctoral works include:

- **Mixture of Softmaxes (MoS)**: proved that the traditional softmax output layer suffers a "rank bottleneck" that cannot express the high-rank distributions of real language, and proposed a mixture of softmaxes to break that ceiling — an important page in the theory of language-model output layers.
- **HotpotQA**: a multi-hop question-answering dataset that forces models to string together clues scattered across multiple articles like a detective — one of the benchmark infrastructures for what later became retrieval-augmented generation (RAG).
- **GLoMo**: unsupervised learning of relational graphs, a collaboration with Turing Award winner Yann LeCun. During his PhD, Yang also co-authored papers with both LeCun and Yoshua Bengio — two of the three deep-learning Turing laureates.
- He and his teams achieved world #1 on more than ten standard benchmarks in semi-supervised learning and natural language understanding, and at one point simultaneously held the world record on all six mainstream language-modeling datasets.

In both 2017 and 2018 he was listed among the world's top first authors at leading ML/NLP venues — only three scholars worldwide made the list both years. His awards include the Facebook ParlAI Research Award (2017), an NVIDIA Fellowship (2018), a Siebel Scholarship (2018), and a spot on Forbes China's 30 Under 30 (2020). His citations since 2019 exceed 20,000.

### 2.4 More Important Than the Papers: A Methodology

Yang has summarized the most important lesson from his Google years as "liberating yourself from infinite polishing" — stop endlessly fine-tuning architectures on small datasets, and instead search for structures that are **both general and scalable**.

It sounds plain; it is actually the naive form of the Scaling Law mindset: rather than sculpting the model, find the structure that "just keeps getting stronger as you add compute and data," then pile resources onto it. Transformer-XL for long context, XLNet for the autoregressive paradigm — both were products of this methodology. A decade later, every major technical decision at Moonshot AI — betting on long context, on trillion-parameter MoE, on reinforcement learning — is the same methodology reused.

The final asset his academic career gave him was credibility and network. Salakhutdinov, Quoc Le, LeCun, Bengio, Jie Tang... this roster meant that when he announced his startup in 2023, a substantial share of the small global circle that truly understands large models was willing to vouch for him, make introductions, or even join him. This showed clearly in Moonshot's "five founders, four from Tsinghua" founding team — co-founder Xinyu Zhou was Tsinghua class of 2011, a core of algorithm production at Megvii and a co-author of ShuffleNet (and Yang's old bandmate in Splay); Yuxin Wu, likewise Tsinghua-plus-CMU, created the star project Detectron2 at Meta and received a best-paper nomination at ECCV.

---

## Chapter 3: The First Startup — Recurrent AI, a Priceless Preparatory Course in Failure

In the public narrative, Yang is a "new face" who first founded a company in 2023. In fact, Moonshot AI is his **second** startup. Understanding the first is the key to understanding all the caution, craft, and scars that came later.

In 2016, just one year into his PhD, Yang co-founded Recurrent AI (循环智能) with Qicong Chen, Yutao Zhang, and others — industrializing NLP by analyzing sales and customer-service conversations to improve enterprise conversion. The company raised multiple rounds from top-tier funds including Sequoia China, ZhenFund, GSR Ventures, and Boyu Capital, with Yang as co-founder and chief scientist.

Recurrent AI rode the first wave of Chinese AI-to-B entrepreneurship — and hit every reef of that wave: weak enterprise willingness to pay, heavy customization, hard scaling. It remained "a pretty good company," never "a great one." For someone with Yang's self-expectations, the value of this chapter lies not in its commercial results but in three lessons:

**First, he ran the full cycle — fundraising, hiring, product, customers.** When he started again in 2023, his fluency in investor language, cap-table structure, and board mechanics far exceeded that of a 30-year-old academic novice.

**Second, he felt the ceiling of the "small-model era" in his bones.** Recurrent AI did vertical-scene NLP; the ceiling was visible to the naked eye. This gave him muscle memory on the general-versus-vertical trade-off — Moonshot AI's day-one commitment to general AGI and refusal of any vertical custom project is rooted here.

**Third — and most expensive — a lesson in equity and procedural justice.** After Moonshot AI was founded in 2023 and its valuation rocketed, conflict erupted: in late 2024, several early Recurrent AI investors initiated arbitration in Hong Kong against Yang and Yutao Zhang over the "waiver" question — whether they had properly obtained written waivers from all old shareholders before founding Moonshot — claiming enormous damages. At the same time, a public brawl broke out over whether Yutong Zhang, a former GSR Ventures partner who had joined Moonshot, faced conflicts of interest; GSR's managing partner Xiaohu Zhu fired public salvos on WeChat Moments, turning the dispute into an industry-wide spectacle.

The rights and wrongs of that episode have never been publicly adjudicated, but two things are clear. First, the dispute was eventually settled by Moonshot conceding part of its interests to the old shareholders, with Yang personally absorbing most of the public and legal pressure. Second, in his most embattled December 2024, he still sent an all-hands letter to steady the troops, laying out funding, cash, and strategy — the line "the company has over 10 billion yuan in cash and is in no hurry to go public" was spoken at the most turbulent moment of all.

One detail is worth savoring: facing a flood of accusations, the core of Yang's public response was not self-defense but an explanation of why he insisted on granting Yutong Zhang shares — "among everyone I know, she was the most suitable person... she was willing to leave her comfort zone, take the risk, and choose to believe in and support me." Loyalty, protecting the team, absorbing the cost and moving on — this temperament later showed in his posture toward DeepSeek as well: never a public complaint, just quietly building the technology back.

---

## Chapter 4: Moonshot AI — Three Years, Three Brushes with Death

### 4.1 Founding: A Rock Kid's Lunar Narrative

On November 30, 2022, ChatGPT launched. Yang was among the first in China to experience it deeply. His judgment: ChatGPT's diffusion would take time, and most people in China had no concept of the wealth and value large models would create — a massive information-asymmetry window. He immediately flew to the United States and, on his academic reputation and prior startup record, quickly raised roughly $100 million in seed capital.

In March–April 2023, Beijing Moonshot AI (月之暗面, "The Dark Side of the Moon") was founded. The name comes from Pink Floyd's legendary album — 2023 happened to be its 50th anniversary. The company's meeting rooms are all named after rock bands; two electric guitars and a piano sit in the office.

"The dark side of the moon" carries a harder meaning: tidally locked, the Moon always shows Earth the same face; the far side was never directly seen by humans. Yang used the image to define the company's mission — exploring the unknown face of intelligence. As he later told media: "AI is not about what PMF I find in the next year or two — it's about how to change the world in the next ten to twenty."

The angel round alone brought in roughly $300 million (nearly 2 billion yuan) from Sequoia China, ZhenFund, and others. In China's 2023 primary market this was astronomical — in essence, the market was pricing the technical credibility of the three characters "杨植麟."

### 4.2 Battle One: The Long-Context Raid

On October 9, 2023, the Kimi assistant launched with one capability no one else on Earth had: lossless context input of about 200,000 Chinese characters — a world first.

It was a classic "Yang-style" product decision. While everyone else competed on benchmarks and parameter counts, he picked the weapon he had researched for five years: context length. Long context was no marketing gimmick; it precisely hit real pain points — lawyers reading case files, researchers reading papers, analysts reading financial reports, students reading textbooks — all scenarios where "you can't feed it in at once." Kimi quickly became the best-regarded AI assistant in the Chinese-speaking world.

On March 18, 2024, Kimi announced a beta of 2-million-character lossless context — a 10x jump in half a year. What followed exceeded every expectation: the traffic flood crashed Kimi's mini-program, app, and website; the company emergency-scaled capacity five times; "Kimi concept stocks surge" trended on Weibo, and related A-share names hit consecutive daily limits — a feature update from an AI product had directly disturbed the secondary market.

Then came the capital frenzy: Alibaba led a $1 billion round in February 2024; Tencent, Gaorong, and others added $300 million in August; Meituan and Xiaohongshu followed, pushing the valuation to $3.3 billion. That year, Kimi fought a brutal user-acquisition spending war against ByteDance's Doubao; a duopoly formed, and Kimi's monthly active users once exceeded 36 million.

But cracks were already showing beneath the glamour: no major product-form iteration, a team kept under two hundred people, near-zero consumer monetization (Kimi at one point relied on "tips" in exchange for priority access at peak hours), while marketing spend ran at hundreds of millions of yuan per quarter. In later retrospectives, the industry consensus was that 2024-era Moonshot was trapped in a "raise — buy traffic — raise again" loop, and that its moat had been an illusion.

### 4.3 Battle Two: The DeepSeek Shock and 172 Days of Silence

On January 20, 2025, Moonshot released its reasoning model Kimi k1.5, benchmarked against OpenAI o1. That same day, DeepSeek released — and open-sourced — R1.

History remembers only the latter.

Over the Spring Festival, DeepSeek swept the Chinese internet at near-zero acquisition cost, its daily active users at one point surpassing Kimi and Doubao. The blow to Moonshot was twofold. Technologically, the "strongest Chinese model" mindshare changed hands. Commercially, DeepSeek's extreme low cost and open-source strategy falsified the logic that "buying users with ad spend builds a moat" — and Kimi was the player with the most chips on exactly that logic. As one industry insider put it: "On resources, it couldn't out-spend the giants; on technology and product mindshare, DeepSeek overtook it."

Yang's response was the company's most important decision in three years. He slashed a marketing budget running at hundreds of millions per quarter, vanished from public discourse entirely, and established three new iron laws:

1. **"Continuously hold SOTA" (state of the art) as the highest priority;**
2. **Drastically cut consumer ad spend; pour all resources into R&D;**
3. **Pivot from closed-source to open-source.**

For the next 172 days, the company that had once been the loudest on Chinese social media held no launch events, issued no press releases, bought no traffic — as if it had evaporated from the planet. Yang later encouraged himself and Tsinghua students with a lyric from The Verve: "I'm a million different people from one day to the next" — do not fear change; reinvent yourself.

### 4.4 Battle Three: The K2 Comeback and the Compounding of Open Source

Late on July 11, 2025, the silence broke. Moonshot released and open-sourced Kimi K2: a mixture-of-experts model with 1 trillion total parameters and 32 billion active, designed for agentic capability, beating GPT-4-class rivals on multiple benchmarks in coding, math reasoning, and tool use.

K2's technical substance shows in a detail most people missed: to train stably at the trillion-parameter scale, the team built the MuonClip optimizer, solving the "attention-logit explosion" instability that plagued the field, and completed 15.5 trillion tokens of training with zero reported training instability. MuonClip was later widely adopted across the industry, and Moonshot's March 2026 "Attention Residuals" technique earned a retweet from Elon Musk: "Impressive work from Kimi."

Six days after release, K2 had 100,000+ downloads on HuggingFace, topped the LMArena open-source leaderboard (fifth overall), and Nature's website declared the world had entered "another DeepSeek moment."

What followed was textbook iteration cadence: K2-0905 (September 2025, context extended to 256K), K2 Thinking (November 2025, a "thinking agent" that autonomously chains 300 tool calls, reaching SOTA on benchmarks including "Humanity's Last Exam"), K2.5 (January 2026, multimodal with an agent swarm scheduling 100 sub-agents over 1,500 steps), and K2.6 (April 2026, supporting 300 collaborating sub-agents).

The compounding of the open-source strategy began to cash out. In March 2026, Cursor — the world's hottest AI coding tool — was discovered to have built its in-house Composer 2 model on a Kimi K2.5 base; Moonshot confirmed an authorized commercial partnership. By Composer 2.5, Cursor had poured in 25x more synthetic task data than the previous generation, tilted 85% of compute toward reinforcement learning, and matched Anthropic's Opus 4.7 and OpenAI's GPT-5.5 on CursorBench 3.1 — at under $1 per task versus the rivals' $11.

### 4.5 2026: The Valuation Rocket and the "Anthropic Playbook"

In the first half of 2026, Moonshot executed a capital sprint rare in Chinese startup history:

- December 2025: $500M Series C (led by IDG, oversubscribed by Alibaba and Tencent), $4.3B post-money valuation;
- January–March 2026: three consecutive rounds ($500M, $700M, $700M); valuation climbs from $10B to $18B;
- May 2026: a $2B Series D led by Meituan's Long-Z fund, joined by "national team" and sovereign investors — China Mobile, CPE, Guozhi Investment, Temasek, Abu Dhabi's MGX — at a $20B post-money valuation;
- June 30, 2026: a new round opens at a $31.5B pre-money valuation — more than 7x in six months, with cumulative funding above $3.9 billion.

Behind the valuation was a steep revenue curve: ARR crossed $100M in March 2026, $200M in April, and $300M by mid-June — tripling in three months. API revenue exceeded 70% of the total; overseas paying users grew 400% year over year; the product reached more than 200 countries and regions. Within twenty days of K2.5's release, Kimi's cumulative revenue surpassed the entire year of 2025; January personal-subscription orders rose 8,280% month over month, entering Stripe's global top ten.

Multiple brokerages compared this curve to Anthropic's early phase: surging developer calls, a rising API share, overseas paid growth, and model iteration pushing the price ladder upward — a path distinct from Chinese peers pursuing government-and-enterprise localization (Zhipu) or consumer subscriptions (MiniMax).

On July 17, 2026, Kimi K3 launched: 2.8 trillion parameters, 1M-token context, native vision, an Artificial Analysis Intelligence Index of 57 — in the same tier as Opus 4.8 and GPT-5.5, ranked third globally, the world's first open-sourced 3T-class model, with full weights released by July 27. Hence Salakhutdinov's congratulatory tweet, seven years in the making, with which this essay opened.

The other side of the coin, as always, exists: in the compute arms race, the death chain of "insufficient compute → model falls behind → developers migrate → revenue breaks → funding narrows" shows no mercy to any link; a $31.5B pre-money valuation means the next round needs someone willing to write a check at $40B-plus, and the global list of institutions that can is very short; and rumors of a Hong Kong IPO have circulated since March 2026. The time window left for Moonshot "may be shorter than the market thinks."

---

## Chapter 5: The Substance — Seven Underlying Logics of the Yang Methodology

Story told; now for the genuinely useful part. Put Yang's decisions of the past decade under a microscope, and seven recurring underlying logics emerge. Each has reference value for anyone making long-term decisions amid a technological wave.

### Logic 1: Choose the "Central Problem," Not the "Hot Problem"

In his early academic years Yang worked on graph learning and multimodality; around 2017 he narrowed his focus to language modeling. His explanation: language modeling is the "central problem" of AI research — the essence of intelligence is compression and prediction, and language is the largest carrier of human knowledge.

That judgment was deeply lonely in 2017. The field's hot topics were computer vision, reinforcement learning playing games, and GANs. But look back: from GPT to ChatGPT to today, the main channel of the past eight years of AI revolution is precisely language modeling. **The difference between a central problem and a hot problem: hot problems are set by current attention; central problems are set by a discipline's internal structure.** The former are crowded and fickle; the latter are deserted but compound magnificently.

The lesson for the rest of us: when judging whether a direction deserves ten years of your life, don't ask "who is working on it now" — ask "if this field could keep only one problem, which would it be?"

### Logic 2: General-and-Scalable Beats Elegant-but-Unscalable

"Liberate yourself from infinite polishing" — the first lesson from Google. Academically, it meant abandoning another 0.5-point gain on a 512-token task in favor of structural problems like context length, whose breakthroughs scale linearly with compute.

After founding his company he replayed the same logic: Kimi's first killer feature was not smarter conversation but ten times everyone else's context length; K2's breakthrough was not fine-tuning on some leaderboard but MuonClip — the kind of foundational engineering that "keeps trillion-parameter training from destabilizing." **He is forever looking for the fulcrum of the lever, never pushing at its tip.**

### Logic 3: Long Context Is Memory; Memory Is Intelligence

This is the largest through-line among all his technical bets. From Transformer-XL's segment memory, to Kimi's 200,000 characters and then 2 million, to K3's 1M-token context, his worldview has been consistent: **parameter count is "brain capacity," context length is "working memory," and the ceiling of intelligence is jointly determined by both.**

Following this logic, Moonshot internally calls long context the first step of its "moonshot plan"; the second step is personalization — because only with sufficiently long memory can AI truly come to know "you," giving deep verticals (finance, medicine, law) their foundation. K3's million tokens and K2.6's automatic context-compression mechanism are continuations of the same roadmap.

### Logic 4: Technology Is the Only True Variable of This Era

At the most inflated moment of 2024, Yang said: "Technology is the only new variable of this era; every other variable is unchanged." In 2025 the sentence was verified in the cruelest way — DeepSeek-R1 proved that every moat built from marketing, channels, and capital can be zeroed overnight by a single open-source paper; and Moonshot's own comeback likewise rested on one thing alone: building the model back to SOTA.

The corollary is cold: **in the large-model industry, every non-technical moat is rented; only a technological generation gap is owned.** That Kimi's revenue tripled after cutting all ad spend is the hardest empirical proof of this corollary.

### Logic 5: Small Teams Are a Necessary Condition for Innovation

Moonshot's headcount has long been held around two hundred — far below the thousands-strong R&D divisions of the giants. When several algorithm engineers departed in late 2024 and outsiders cried "brain drain," Yang's reply was that this was deliberate subtraction: "Expanding the team is fatally damaging to innovation."

This philosophy aligns eerily well with DeepSeek (High-Flyer), early Anthropic, and early OpenAI: **frontier research output density does not scale with headcount; it scales with the density of top researchers multiplied by the shortness of decision chains.** That two hundred people produced the 2.8-trillion-parameter K3 is itself the strongest advertisement for this logic.

### Logic 6: An Idealist Must Understand Reality Better Than the Realists

The greatest tension in Yang is the contrast between idealist rhetoric and realist execution. He talks about "how to change the world over ten to twenty years" while acting on "ChatGPT's diffusion has a time lag — fly to the U.S. now and raise $100M." He names meeting rooms after rock bands while laying down meticulous patches in equity design, waiver procedures, and old-shareholder appeasement. He says "IPO is not the goal" while shaping an ARR curve that is the market's most standard "Anthropic playbook."

The Recurrent AI arbitration was tuition paid, and it showed the world that for a scholar's idealism to survive in Chinese commercial soil, it must grow an extremely hard realist shell. **Idealism sets the direction; realism determines survival. Neither suffices alone.**

### Logic 7: Accepting the Probability of Failure Is the Prerequisite of Long-Termism

Someone once asked Yang: "If you fail to achieve what you set out to do, would you consider yourself a failure?" His answer: "It doesn't matter that much. I accept that there is a probability of failure... this whole thing has already completely changed my life; I am full of gratitude."

Often dismissed as sentiment, this is actually a calculated decision framework: **only by pricing failure psychologically in advance do you dare make all-in, long-horizon strategic investments.** The precondition for the 172-day silence of 2025 was precisely a founder who does not treat "temporary lagging" as an existential crisis.

---

## Chapter 6: Predicting the Future — The Next Five Years of AI, Deduced from Yang's Judgments

This is the riskiest and most valuable part. Prediction here is not fortune-telling; it is the cross-validation of one person's repeatedly expressed judgments against structural changes already underway. Six predictions follow, each with its reasoning and a falsifiable time point.

### Prediction 1: Within Three Years, AI Will Take Over Most of AI Research Itself

At the Zhongguancun Forum in March 2026, Yang made a little-noticed but hugely important judgment: the way AI research is done is changing fundamentally — in the past it relied on internet data plus human annotation, with humans judging alignment; from 2025 the industry shifted to reinforcement learning, but humans still curated high-quality tasks; **next, AI will increasingly dominate research itself — every researcher will be allocated large amounts of tokens to synthesize new tasks and environments, AI will define reward functions and even explore new architectures, and the entire pace of AI R&D will accelerate.**

Cross-validation: Moonshot's own practice is already cashing this check — K2 Thinking's "model-as-agent" philosophy injected massive agent-trajectory data from the pre-training stage; Cursor, building on K2.5, directed 85% of compute into reinforcement learning and synthetic tasks. This is not a distant vision; it is a production-line renovation already in progress.

**Falsification point**: if, by end-2028, the share of "AI proposes hypotheses, humans merely adjudicate" in leading labs' papers and model improvements has not clearly passed 50%, this prediction fails. It probably won't.

### Prediction 2: The Open/Closed Gap Will Converge to "Half a Body Length," and Open Source Will Become a National Strategy for Chinese AI

K3, as one of the world's strongest open-source models in the same tier as top closed models, marks an inflection point: open source is no longer a "second-class free substitute" but a weapon for standard-setting power. Yang said it plainly at the Zhongguancun Forum: "Open-source models represented by Kimi K2.5 are becoming the new standard — hardware vendors often need open-source benchmark suites to prove their performance gains."

The deeper logic: facing chip controls, Chinese AI companies cannot buy generational gaps with unlimited compute; therefore **trading open weights for a global developer ecosystem, letting the ecosystem feed model iteration, and letting iteration amortize the compute disadvantage** is the game-theoretically optimal move. The presence of Guozhi Investment, China Mobile, MGX, and Temasek on Moonshot's cap table shows that state capital and sovereign funds already treat "a globally competitive open-source foundation model" as strategic infrastructure on the level of power grids or 5G.

**Falsification point**: if, by end-2027, China's leading model companies swing back to full closed-sourcing (weights no longer released), this fails. Every current signal points the other way.

### Prediction 3: Moonshot AI Will List in Hong Kong Around 2027, and Its Pre-IPO Valuation Will Double Again

The chain of logic: first, Zhipu and MiniMax completed Hong Kong listings in January 2026, validating the path — Zhipu's market cap has surpassed HK$500 billion and MiniMax's HK$150 billion, so the secondary-market pricing anchor for Chinese large-model assets is set; second, Moonshot was reported in March 2026 to be preparing a Hong Kong IPO and in contact with CICC and Goldman Sachs; third, a $31.5B pre-money valuation is approaching the primary market's ceiling of check-writing capacity, making a listing the natural extension of the funding channel.

Yang himself says "no hurry to go public in the short term," but the shelf life of that sentence depends on the ARR ramp — primary markets can wait for compounding; secondary markets need quarterly growth. **When ARR runs from $300M toward the $1–3B range (a Nomura expert call projects $1B+ by end-2026), the IPO window opens.**

**Falsification point**: no filing by June 2028.

### Prediction 4: Agents Will Eat the "Application Layer," and the Boundary Between Model and Application Will Vanish

Moonshot's product evolution is a footnote to this prediction: from chat assistant (Kimi Chat), to autonomous search (Explorer edition), to a local general agent (Kimi Work, which decomposes tasks on the user's computer, executes in parallel, and delivers documents, spreadsheets, and slide decks), to K2 Thinking's "model-as-agent" (300 tool calls), to agent swarms (K2.6 supporting 300 sub-agents in parallel and 4,000 coordinated steps).

Yang has long championed "productivity scenarios first." The essence of his judgment: **chatting is AI's old form; doing work is AI's endgame. When the model itself can plan, call tools, and self-correct, so-called "AI application startups" will collapse en masse into model capability itself.** For founders this is the most dangerous prediction on the list — any app that merely "wraps a shell around a model" has a shelf life shorter than the next model release.

**Falsification point**: if, in 2027, standalone agent-application companies still systematically out-raise and out-earn foundation-model companies, this fails.

### Prediction 5: Compute Constraints Will Force an "Efficiency-First" Second Technical Route — Led by Chinese Companies

OpenAI's 2025 figures: $13.07B revenue, $19.18B R&D spend, $20.92B operating loss; Meta's 2026 capex guidance: $125–145B. The American route is, in essence, "buying time with capital expenditure." Under chip restrictions, Chinese companies cannot walk that road; their only way out is to maximize intelligence produced per unit of compute — DeepSeek's low-cost inference, Moonshot's MuonClip and Attention Residuals are all products of this route.

**Deduction: over the next three years, the "intelligence-per-compute ratio" will replace parameter count as the core metric of model competition, and Chinese open-source models will, on this metric, become the default choice of developers worldwide — especially in emerging markets and cost-sensitive industries.** Kimi's API pricing ($3 per million input tokens, $15 per million output, $0.30 on cache hits) versus American flagship prices is the early shape of this trend.

### Prediction 6: Yang Himself Will Become an Iconic Figure of Chinese AI's "Next Decade"

This is the softest prediction, and the one most worth stating. Chinese AI's previous iconic figures were research-type entrepreneurs (Kai-Fu Lee, Xiaochuan Wang) or engineering titans (Wenfeng Liang). Yang's uniqueness is that he is **the only person to have reached the top on three battlefields at once**: the academic battlefield (Transformer-XL/XLNet, written into the industry's textbooks), the commercial battlefield ($31.5B valuation, ARR tripling in three months), and the ecosystem battlefield (K2/K3 open source adopted by Cursor and global developers, publicly endorsed by Salakhutdinov and Musk alike).

And age matters: born in 1992, he will be only 38 in 2030. Jensen Huang seated him among the honored guests at a 2026 closed-door gathering; his advisor still tweets about his products seven years on — **this compound asset of network, technology, and capital compounds with time rather than depreciating.** Even if Moonshot AI itself stumbles (in business, anything is possible), the position of the node named "Zhilin Yang" in the global AI network is already irreversible.

---

## Epilogue: A Drummer's Sense of Rhythm

Back to Shantou, 1992. The boy who dreamed of being a rock star or a wandering poet really did live his life as a performance:

- **The intro** was olympiads and Tsinghua — proving absolute capability by getting in three times;
- **The verse** was four years at CMU — writing Transformer-XL and XLNet, two passages destined for the textbooks;
- **The first chorus** was Recurrent AI — raw, off-key, but it taught him the rules of the stage;
- **The interlude** was the 172 days of silence in 2025 — everyone thought the show was over;
- **The second chorus** was the open-source sprint from K2 to K3 — and it blew the roof off.

Drummers understand one thing better than anyone: rhythm matters more than volume. Every move Yang made this decade — switching majors, choosing language modeling, betting on long context, cutting ad spend, going open source — was never the fastest reaction, but almost always landed on the beat. Ask him why, and his answer is probably that motto, "Just for Fun," and the line from his own song — don't become an overly utilitarian person.

Ironic? An anti-utilitarian built the fastest-funded AI company in China. But perhaps that is the story's deepest lesson: **in an era where technology changes by the month, the utilitarian's horizon is too short — too short to see the next eight bars. Only those who work for love and conviction have the patience to wait for their own rhythm to arrive.**

The dark side of the moon — the face that forever turns away from Earth. For two thousand years humans feared it, wondered about it, imagined it. When probes finally flew around, they found no gods or monsters — only older rock, deeper craters, and a land never directly touched by sunlight, yet just as real.

The reward of exploring the unknown has never been treasure; it is the moment the "unknown" becomes "known." That, in the end, is what Zhilin Yang — and every technical idealist still on the road — truly cares about.

---

## References

1. Guancha.cn, "The Drummer Who Got Into Tsinghua Three Times, and Struck at America's AI Giants," July 8, 2025. https://user.guancha.cn/main/content?id=1479799&s=fwtjgzwz
2. QbitAI, "Tsinghua IIIS's Zhilin Yang's New Company Revealed: Large Models, Star Team," June 12, 2023. https://www.qbitai.com/2023/06/60864.html
3. OfficeChai, "How Kimi Founder Zhilin Yang Had Completed A PhD In The US And Interned At Google Before Setting Up His Company In China," July 17, 2026. https://officechai.com/ai/how-kimi-founder-zhilin-yang-had-completed-a-phd-in-the-us-and-interned-at-google-before-setting-up-his-company-in-china/
4. Laoyujianli, "Zhilin Yang's Resume." https://www.laoyujianli.com/open/resume/yangzhilin
5. Baidu Baike, "杨植麟" entry, updated November 7, 2025. https://baike.baidu.com/item/%E6%9D%A8%E6%A4%8D%E9%BA%9F/24462023
6. Baidu Baike, "Kimi" entry, updated January 2, 2026. https://baike.baidu.com/item/Kimi/64191192
7. OFweek, "Alibaba and Tencent Rush to Send Money: A Post-90s Rock Drummer Becomes the First Great Large-Model Founder," May 24, 2024. https://m.ofweek.com/ai/2024-05/ART-201700-8500-30635881.html
8. TeoYouth, "Valued at $18B: In Under a Year, This Post-90s Tsinghua Top Student Built an AI Unicorn," June 2, 2026. https://www.teoyouth.com/renwu/5140.html
9. Sina Finance (Jiemian News), "Kimi's Valuation Soars to $30B as New Round Opens," June 8, 2026. https://finance.sina.cn/stock/jdts/2026-06-08/detail-iniasscq5490093.d.html
10. Huxiu, "Zhilin Yang: The Suspension of a Post-90s Idealist," May 28, 2025. https://www.huxiu.com/article/4400059.html
11. Wikipedia (Chinese), "月之暗面 (公司)" entry. https://zh.wikipedia.org/zh-my/%E6%9C%88%E4%B9%8B%E6%9A%97%E9%9D%A2_(%E5%85%AC%E5%8F%B8)
12. Wikipedia (Chinese), "Kimi (聊天机器人)" entry. https://zh.wikipedia.org/zh-hk/Kimi_(%E8%81%8A%E5%A4%A9%E6%A9%9F%E5%99%A8%E4%BA%BA)
13. QbitAI, "Jensen Huang's 2026 Large-Model Guest of Honor: Zhilin Yang," February 3, 2026. https://www.qbitai.com/2026/02/376314.html
14. Cailian Press / STAR Market Daily, "State Capital Appears Among Kimi's Investors as Domestic Large-Model Capital Structures Reconfigure," May 20, 2026. https://www.cls.cn/detail/2377205
15. EET China, "Moonshot AI Raises Over $3.9B in Half a Year; Pre-Money Valuation Rises to $31.5B," July 1, 2026. https://www.eet-china.com/news/202607015745.html
16. DoNews, "Kimi K3 Released: 2.8-Trillion-Parameter Open-Source Model Jumps to World No. 3," July 17, 2026. https://www.donews.com/news/detail/4/6637415.html

*Note: Details concerning the Recurrent AI shareholder arbitration and the Yutong Zhang controversy are compiled from public reporting by 36Kr, LatePost, Jiemian News, and others during 2024–2025. The parties' positions diverged; judicial and arbitral outcomes are subject to official disclosure. Chapter 6 is analysis and prediction based on public information and does not constitute investment advice.*

*Translated from the Chinese original by Kimi.*
