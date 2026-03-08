# `src/data`

schematized JSON data files.

## Technical

- Draft schema first.
- Always validate with JSON schema.
- Use `camelCase` for keys.
- Derived a global id for each entity.
- Top-level structure: `{ "_schema": "", "id-1": {}, "id-2": {} }`.
- All fields should be required, but omit a field entirely if the info is unknown/unchecked.
- Use `null` to intentionally represent an empty value (e.g. apps with no GitHub repo, airlines with no alliance).
