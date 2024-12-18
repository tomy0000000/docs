# Encoding

List of commonly used string encoding techniques.

**Encoding != Encryption**

:::tip

Use [DenCode](https://dencode.com/) to guess the encoding of a cipher text.

:::

## [Percent-encoding](https://en.wikipedia.org/wiki/Percent-encoding)

Often has the form `%XX` where `XX` is the hexadecimal representation of a character.

Typically used in URLs to encode special characters that are not allowed.

:::tip

- Sometimes space characters are encoded as `+` instead of `%20`.
- If you see `%25` many times, the string may be double-encoded.

:::

## [Base64](https://en.wikipedia.org/wiki/Base64)

Often ends with `=` or `==`.

Typically used to encode binary data into ASCII characters.
