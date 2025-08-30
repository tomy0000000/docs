# 🗣️ Language & Locale

Various specifications define how to represent languages and locales in software. This document aims to provide a high-level overview of these specifications and how to use them.

:::tip

TL;DR:

1. Find a library that wraps CLDR data and use it to format dates, numbers, and currencies.
2. There is only one standard for language tags: BCP 47, but you have to decide which subtags to use.
3. When in doubt, `language-region` is always a safe bet.

:::

## [ISO 639](https://en.wikipedia.org/wiki/ISO_639)

Simply refers to the language, region-agnostic.

- ISO 639-1: two-letter codes
- ISO 639-2: three-letter codes
- ISO 639-3: three-letter codes, one language may have multiple codes

### Examples

| Language | ISO 639-1 | ISO 639-2 | ISO 639-3              |
| -------- | --------- | --------- | ---------------------- |
| English  | `en`      | `eng`     | `eng`                  |
| Chinese  | `zh`      | `zho`     | `zho` + 16 other codes |

The most commonly used is ISO 639-1.

## [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646)

RFC 5646 loosely defines the structure of language tags as follows:

```
{language}[-{script}][-{region}][-{variant}][-{extension}][-{privateuse}]
```

Besides `language`, all other components are optional.

Per specification, the entire tag is case-insensitive, but most implementations use the following conventions:

| Component    | Description                                                                                                                                                    | Case      |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `language`   | ISO 639-1 or ISO 639-2 code (if no ISO 639-1 code exists)                                                                                                      | lowercase |
| `script`     | [ISO 15924](https://en.wikipedia.org/wiki/ISO_15924) code for the script of the language                                                                       | Titlecase |
| `region`     | ISO 3166-1                                                                                                                                                     | UPPERCASE |
| `variant`    | Variant subtags, must be registered in the [IANA Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) | lowercase |
| `extension`  | Extension subtags                                                                                                                                              | lowercase |
| `privateuse` | Private use subtags                                                                                                                                            | lowercase |

### Examples

| Tag           | Description                                                                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `en`          | English                                                                                                                                                      |
| `en-US`       | English in the United States                                                                                                                                 |
| `en-GB`       | English in the United Kingdom                                                                                                                                |
| `zh-Hans`     | Chinese in the simplified script                                                                                                                             |
| `zh-Hant`     | Chinese in the traditional script                                                                                                                            |
| `zh-TW`       | Chinese in Taiwan                                                                                                                                            |
| `zh-Hant-TW`  | Chinese in Taiwan in the traditional script                                                                                                                  |
| `zh-TW-tailo` | [臺灣台語羅馬字拼音方案](https://zh.wikipedia.org/zh-tw/%E8%87%BA%E7%81%A3%E5%8F%B0%E8%AA%9E%E7%BE%85%E9%A6%AC%E5%AD%97%E6%8B%BC%E9%9F%B3%E6%96%B9%E6%A1%88) |
| `sl-nedis`    | Natisone or Nadiza dialect of Slovenian                                                                                                                      |

## [IETF BCP 47](https://www.rfc-editor.org/info/bcp47)

BCP 47 is a combination of RFC 5646 and [RFC 4647](https://datatracker.ietf.org/doc/html/rfc4647), which defines the matching and lookup algorithms for language tags and is the most widely used go-to guide for language tags.

## [CLDR](https://cldr.unicode.org/)

The most common use of language tags is to set the language of your application. Once you set the language, you will likely use that to format dates, numbers, and currencies. That's where <abbr title="Common Locale Data Repository">CLDR</abbr> comes in.

CLDR publishes new versions twice a year, and it's the most comprehensive and up-to-date source for locale data that is used by almost all major software.

You can view the data in the [CLDR Survey Tool](https://st.unicode.org/cldr-apps/v), or access source data from the [CLDR GitHub repository](https://github.com/unicode-org/cldr).

For most actual use cases, you will use a library that wraps CLDR data, such as:

- [ICU](https://icu.unicode.org/)
- [Moment.js](https://momentjs.com/)
- [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)

### [ICU Locale](https://unicode-org.github.io/icu/userguide/locale/)

The ICU Project performs a series of "[canonicalization](https://unicode-org.github.io/icu/userguide/locale/#canonicalization)" steps to convert a locale identifier into a canonical form, which is why hypens (`-`) are being replaced with underscores (`_`). e.g. `en-US` becomes `en_US`.

Some other libraries may do the same, YMMV, but whenever possible, use the RFC format to avoid any issues.
