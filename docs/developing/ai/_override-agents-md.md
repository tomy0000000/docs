# [directory-name/]

[One sentence: what this package/module/service is responsible for.]

## Commands (overrides root)

<!-- Only include if commands differ from root AGENTS.md. -->
<!-- The closest AGENTS.md to the file being edited wins. -->

```bash
# Run tests for this package only
make test-module

# Lint this package only
make lint-module
```

## Domain Rules

<!-- Non-obvious constraints specific to this part of the codebase. -->
<!-- Skip anything that's obvious from reading the code itself.     -->

- All monetary values MUST use `Decimal` type — never floats
- webhook handlers go in `some/path/`, nowhere else
- PCI compliance: never log card numbers or CVVs, even in debug mode
- This service talks to `orders-service` via gRPC, not REST

## Key Files

<!-- Pointers to the files that matter most in this directory.   -->
<!-- Helps the agent orient quickly without scanning everything. -->

- `path/to/file` — main webhook entrypoint
- `path/to/file` — subscription lifecycle logic
- `path/to/file` — shared test data — do not modify without updating all tests

## Local Conventions

<!-- Only include conventions that DIFFER from or ADD TO the root file. -->
<!-- Don't repeat root-level rules here.                                -->

- Error responses must use `SomeError` class from `some/file`, not generic `Error`
- All new endpoints require an integration test in `__tests__/integration/`
- Database queries go through `repo/` layer — never call Prisma directly in handlers
