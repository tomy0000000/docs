# Docs Rules

Various rules for maintaining this docs.

## Core Rules

- Focus on useful, latest and accurate information. No hisotrical data should be kept.
- Prefer schemalized strcuture data over plain text, especially for table data.

## Docs Naming

- Avoid `-ing`, `-ed`, `-s`, `-es`.

## Data

- Draft schema first.
- Alawys validate with JSON schema.
- Use `camelCase` for keys, so that it can be expanded as TypeScript variable.

```json
{
  "_schema": "",
  "id-1": {},
  "id-2": {}
}
```

## Technical

- Stop using `_category_.json`. Use `README.md` instead.
- Always use target blank + noopener + noreferrer for external links.
- Internal links should always be relative, and point to the `.md` file.
