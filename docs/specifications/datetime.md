# Datetime

Various datetime formats at a glance.

:::tip

1. Store datetimes as UTC in databse and convert to local time when displaying to users.
2. If you need to store timezone information, store it in a separate column.

:::

## ISO 8601

International standard, most common datetime format. Natively supported by JavaScript

Format: `YYYY-MM-DDTHH:MM:SSZ`

Examples:

- `2021-01-01T00:00:00Z`
- `2021-01-01T00:00:00+00:00`
- `2021-01-01T00:00:00-05:00`

## RFC 2822

Used in email headers

Format: `Day, DD Mon YYYY HH:MM:SS +0000`

Examples:

- `Fri, 01 Jan 2021 00:00:00 +0000`
- `Fri, 01 Jan 2021 00:00:00 -0500`

## Unix Timestamp

Number of seconds since 1970-01-01 00:00:00 UTC

Examples:

- `1609459200` (2021-01-01 00:00:00 UTC)

## References

- [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
