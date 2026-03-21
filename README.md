# Personal Academic Website — Dr. Chunhua "Leo" Liao

A clean, modern, mobile-responsive academic personal website built with vanilla HTML/CSS/JS.
Designed for easy GitHub Pages deployment.

## Structure

```
personal-website/
├── index.html              # Main page (single-page layout)
├── _config.yml             # GitHub Pages config
├── assets/
│   ├── css/
│   │   └── style.css       # All styles (~975 lines, well-organized)
│   ├── js/
│   │   └── main.js         # Interactivity (smooth scroll, animations, nav)
│   └── images/
│       └── headshot-placeholder.svg   # Replace with real headshot
└── README.md
```

## Features

- ✅ Fully static — no server, no build step
- ✅ GitHub Pages compatible
- ✅ Mobile responsive (mobile/tablet/desktop breakpoints)
- ✅ Dark navy/blue academic color scheme
- ✅ Smooth scrolling navigation with active-link highlighting
- ✅ Scroll-reveal animations (IntersectionObserver)
- ✅ Typing effect on hero label
- ✅ Counter animation on citation stats
- ✅ Accessible (ARIA labels, focus-visible, semantic HTML)
- ✅ Custom scrollbar styling
- ✅ Fast loading (Google Fonts + ~20KB CSS + ~6KB JS)

## Sections

1. **Hero** — Name, title, affiliation, bio, stats, links
2. **Background** — Education, awards, research areas
3. **Research Interests** — 6 research focus cards
4. **Selected Publications** — 6 key papers with badges/links
5. **Software & Projects** — ROSE, CompilerGPT, DataRaceBench, AutoParBench
6. **Contact** — LLNL, Google Scholar, GitHub cards

## Customization

### Add Real Headshot
Replace the placeholder with a real photo:
```html
<!-- In index.html, inside .hero-photo div: -->
<img src="assets/images/headshot.jpg" alt="Dr. Chunhua Liao" />
```
Remove the `<span class="photo-initials">CL</span>` line.

### Update Google Scholar URL
Find `scholar.google.com/citations?user=liao6` and replace `liao6`
with the actual Google Scholar user ID from your profile URL.

### Deployment (GitHub Pages)
1. Push to a GitHub repo (e.g., `chunhualiao.github.io`)
2. Go to Settings → Pages → Source: main branch
3. Done — live in minutes

## Local Preview

```bash
# Python (simplest)
cd personal-website
python3 -m http.server 8080
# open http://localhost:8080

# Node (if available)
npx serve .
```

## Credits

Built as a prototype. Fonts: Inter + Playfair Display (Google Fonts).
No external CSS frameworks or JS libraries used.
