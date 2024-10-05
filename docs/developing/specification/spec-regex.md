# 🎰 Regular Expressions

Various useful tools and resources for working with regular expressions.

## 💡 Tips

- Think about you want to "match" or "search"
- For matching, use `^` and `$` to match the beginning and end of the string
  - Be careful with multi-line strings
- Different tools may have different syntax

## Characters

| Character        | RegEx      | Notes                     |
| ---------------- | ---------- | ------------------------- |
| Lowercase letter | `[a-z]`    |                           |
| Uppercase letter | `[A-Z]`    |                           |
| Letter           | `[a-zA-Z]` |                           |
| Digit            | `\d`       | Equal to `[0-9]`          |
| Non-digit        | `\D`       |                           |
| Whitespace       | `\s`       | Could be space, tab, etc. |
| Non-whitespace   | `\S`       |                           |
| Word character   | `\w`       | Equal to `[a-zA-Z0-9_]`   |
| Non-word         | `\W`       |                           |
| Word boundary    | `\b`       |                           |
| Non-boundary     | `\B`       |                           |

## Quantifiers

:::note

In possessive match mode, the regex engine will not backtrack to find a match. This is useful when you know that there is only one possible match. This can be more efficient than greedy or reluctant matching, but more prone to not finding a match.

:::

| Quantifiers     | RegEx                 | Notes                         |
| --------------- | --------------------- | ----------------------------- |
| More or 0       | `*`                   | Greedy Match (Prefer more)    |
| More or 1       | `+`                   | Greedy Match (Prefer more)    |
| 1 or 0          | `?`                   | Greedy Match (Prefer one)     |
| 0 or more       | `*?`                  | Reluctant Match (Prefer 0)    |
| 1 or more       | `+?`                  | Reluctant Match (Prefer 1)    |
| 0 or 1          | `??`                  | Reluctant Match (Prefer 0)    |
| 0 or more       | `*+`                  | Possessive Match              |
| 1 or more       | `++`                  | Possessive Match              |
| 1 or 0          | `?+`                  | Possessive Match              |
| Exactly n       | `{n}`, `{n}+`, `{n}?` |                               |
| At least n      | `{n,}`                | Greedy Match (Prefer more)    |
| Between n and m | `{n,m}`               | Greedy Match (Prefer more)    |
| At least n      | `{n,}?`               | Reluctant Match (Prefer less) |
| Between n and m | `{n,m}?`              | Reluctant Match (Prefer less) |
| At least n      | `{n,}+`               | Possessive Match              |
| Between n and m | `{n,m}+`              | Possessive Match              |

## Tools

- [regex101](https://regex101.com/)
- [Debuggex](https://www.debuggex.com/)
- [RegExr](https://regexr.com/)
- [Rubular](https://rubular.com/)

## Snippets

### Email

TODO

### URL

TODO

### Base64 encoded string

```regex
^[a-zA-Z0-9+/]*={0,2}$
```

### Semantic Version

```regex
^(\d+)\.(\d+)\.(\d+)$
```

### Chinese Characters

```regex
[\u4e00-\u9fa5]
```

### 🇹🇼 Taiwan Address

This is a WIP, might not be perfect.

```regex
^[\u4e00-\u9fa5]+?(縣|市)[\u4e00-\u9fa5]+?(鄉|鎮|市|區)[\u4e00-\u9fa5]+?(路|街|大道)([\u4e00-\u9fa5]+?段)?(\d+?巷)?(\d+?弄)?[\d\-、]+?號(.+?棟)?((B?[\d]+?|G|L)樓)?(之\d+?)?$
```

### 🇹🇼 Taiwan Address with Village

```regex
^[\u4e00-\u9fa5]+?(縣|市)[\u4e00-\u9fa5]+?(鄉|鎮|市|區)([\u4e00-\u9fa5]+?(村|里))?(\d+?鄰)?[\u4e00-\u9fa5]+?(路|街|大道)([\u4e00-\u9fa5]+?段)?(\d+?巷)?(\d+?弄)?[\d\-、]+?號(.+?棟)?((B?[\d]+?|G|L)樓)?(之\d+?)?$
```

## References

- [ICU Regular Expressions](https://unicode-org.github.io/icu/userguide/strings/regexp.html)
