---
skip_plural_check: true
---

# `docs/`

MDX content pages for the docs site, organized by topic.

## Core Rules

- Focus on useful, latest, and accurate information. Remove outdated content rather than marking it historical.
- Prefer schematized JSON data in `src/data/` over plain text or markdown tables.

## Naming

- Filenames: avoid `-ing`, `-ed`, `-s`, `-es` suffixes.

## Technical

- Always use `.mdx`, no `.md` files.
- Each topic directory uses `README.mdx` as its index page — never `_category_.json`.
- All external links: `target="_blank" rel="noopener noreferrer"`.
- Internal links: use absolute doc IDs, e.g. `[label](/some-page)`.
- When adding structured data (apps, airlines, cards, etc.), put it in `src/data/` as JSON, not inline in MDX.
