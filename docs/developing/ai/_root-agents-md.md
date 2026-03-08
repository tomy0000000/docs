# [Project Name]

[One sentence: what this project does and why it exists.]

## Project Map

- `path/to/dir` — Non-trivial info that agents can't easily infer.
- `path/to/dir` — This file is the entry point for X, it does Y and Z. If you want to modify X, this is the file to start with.
- `path/to/dir` — This is where the core domain logic lives, pure functions with no I/O.

## Landmines & Gotchas

<!-- Things the agent CANNOT discover by reading your code. -->
<!-- If it can figure it out from a directory listing or README, don't put it here — you're just adding noise. -->

- Use `uv` for Python deps, NOT pip
- Always run tests with `--no-cache` — fixture setup causes false positives otherwise
- `some.file` is auto-generated. Never edit it — modify `some.other.files` instead.
- The auth module uses a custom middleware pattern. Do NOT refactor to standard Express middleware.
- `some-path/` is deprecated but still imported by 3 production modules — do not delete anything in it
- When adding a new API route, you MUST also update `some.file`.

## Conventions & Workflow

- Prefer small, focused diffs
- Use Plan Mode for any refactor touching `src/core/`

## For More Context

<!-- Use progressive disclosure: don't paste docs here, point to them. -->
<!-- The agent will read these on-demand when relevant.                -->

- Architecture deep-dive: see `agent-docs/architecture.md`
- Testing patterns: see `agent-docs/testing-guide.md`
- API conventions: see `agent-docs/api-conventions.md`
