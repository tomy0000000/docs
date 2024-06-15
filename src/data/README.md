# Data Rules

- All fields should be requried, but if field info is not unknown / unchecked, it should be not be added.
- Expects some fields to be `undefined` / key not present
- Use `null` to intentionally represent an empty value, e.g.
  - Apps that are not open-source can left `github` field as `null`
  - Airlines that are not part of any alliance can leave `alliance` field as `null`
