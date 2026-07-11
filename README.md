# 湖畔 — 诗心的博客

A clean, minimal personal blog built with Jekyll, inspired by the Cenote WordPress theme. Deployed on GitHub Pages.

## Features

- Classic blog layout with right sidebar
- Responsive design (desktop, tablet, mobile)
- Client-side search
- Categories and tags archive pages
- Pagination
- RSS feed
- SEO meta tags (Open Graph, Twitter Card)

## Local Development

```bash
# Install dependencies
bundle install

# Start local server
bundle exec jekyll serve

# Visit http://localhost:4000
```

## Configuration

Edit `_config.yml` to customize:

- `title`, `description`, `author` — Site identity
- `url` — Your GitHub Pages URL (e.g., `https://username.github.io`)
- `social.github`, `social.twitter`, `social.linkedin` — Social links

## Writing Posts

Create new `.md` files in the `_posts/` directory following the naming convention `YYYY-MM-DD-title-slug.md`. Each post needs front matter:

```yaml
---
title: "Your Post Title"
date: YYYY-MM-DD
categories: [Category1, Category2]
tags: [tag1, tag2, tag3]
---
```

## Deployment

Push to GitHub and enable GitHub Pages in the repository settings. The site will build and deploy automatically.
