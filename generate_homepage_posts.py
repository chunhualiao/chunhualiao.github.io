#!/usr/bin/env python3
"""Generate the Latest Posts section for index.html from _posts/ markdown files."""
import os, re, glob
from datetime import datetime

POSTS_DIR = os.path.join(os.path.dirname(__file__), '_posts')
NUM_POSTS = 6

# Category keywords
TECH_KEYWORDS = ['ai', 'agent', 'llm', 'compiler', 'code', 'codex', 'openclaw', 'telegram', 'bridge', 'gpt', 'hpc', 'programming', 'multi-agent', 'mirror']
  
posts = []
for md_file in glob.glob(os.path.join(POSTS_DIR, '*.md')):
    with open(md_file) as f:
        content = f.read()
    
    # Parse frontmatter
    fm_match = re.match(r'^---\s*\n(.*?)\n---', content, re.DOTALL)
    if not fm_match:
        continue
    fm = fm_match.group(1)
    
    title = re.search(r'^title:\s*(.+)', fm, re.M)
    date = re.search(r'^date:\s*(\S+)', fm, re.M)
    slug = re.search(r'^slug:\s*(\S+)', fm, re.M)
    desc = re.search(r'^description:\s*(.+)', fm, re.M)
    tags = re.search(r'^tags:\s*(.+)', fm, re.M)
    
    if not title or not date:
        continue
    
    title_text = title.group(1).strip().strip('"\'')
    date_str = date.group(1).strip()
    slug_text = slug.group(1).strip() if slug else os.path.basename(md_file).replace('.md', '')
    desc_text = desc.group(1).strip().strip('"\'') if desc else ''
    tags_text = tags.group(1).strip() if tags else ''
    
    # If no description, grab first paragraph of content
    if not desc_text:
        body = content[fm_match.end():].strip()
        # Skip headers, get first real paragraph
        for line in body.split('\n'):
            line = line.strip()
            if line and not line.startswith('#') and not line.startswith('!['):
                desc_text = line[:200]
                break
    
    # Clean description
    desc_text = re.sub(r'["\u201c\u201d]', '', desc_text)
    if len(desc_text) > 160:
        desc_text = desc_text[:157] + '...'
    
    # Determine category
    check_text = (title_text + ' ' + tags_text + ' ' + desc_text).lower()
    category = 'tech' if any(kw in check_text for kw in TECH_KEYWORDS) else 'thoughts'
    cat_label = 'Tech & AI' if category == 'tech' else 'Thoughts'
    
    try:
        dt = datetime.strptime(date_str, '%Y-%m-%d')
    except:
        continue
    
    posts.append({
        'title': title_text,
        'date': date_str,
        'date_display': dt.strftime('%B %-d, %Y'),
        'slug': slug_text,
        'desc': desc_text,
        'category': category,
        'cat_label': cat_label,
        'dt': dt
    })

# Sort newest first
posts.sort(key=lambda p: p['dt'], reverse=True)

# Generate HTML for top N
for p in posts[:NUM_POSTS]:
    print(f'''          <article class="post-card">
            <a href="blog/{p['slug']}.html" class="post-card-link">
              <div class="post-card-meta">
                <time datetime="{p['date']}" class="post-date">{p['date_display']}</time>
                <span class="category-badge cat-{p['category']}">{p['cat_label']}</span>
              </div>
              <h3 class="post-card-title">{p['title']}</h3>
              <p class="post-card-desc">{p['desc']}</p>
              <span class="post-read-more">Read more &rarr;</span>
            </a>
          </article>''')
