# Tomy's Docs

Personal knowledge base and docs site built with Docusaurus 3.

## Project Map

- `docs/` — MDX content pages, organized by topic.
- `src/data/` — JSON data files with schemas. See `src/data/README.md` for data conventions.

## Landmines & Gotchas

- To import raw markdown into MDX, use `raw-loader`: `import foo from "!!raw-loader!./file.md"`.

## Conventions

- Docs: focus on useful, current, accurate info — no historical data.
- Prefer schematized JSON data over plain text tables.

## For More Context

- Docs rules: see `docs/AGENTS.md`
- Data rules: see `src/data/AGENTS.md`
