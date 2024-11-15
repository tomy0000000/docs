---
sidebar_position: 3
---

# Symmetric Encryption

Symmetric encryption is a type of encryption where only one key (a secret key) is used to both encrypt and decrypt electronic information. The entities communicating must exchange the key so that it can be used in the decryption process.

## Order of preference

1. <abbr title="Key Management Service">KMS</abbr>
2. <a href="./glossary#libraries">Well-Known Libraries</a>
3. `Chacha20-Poly1305`
4. `AES-GCM`
5. `AES-CTR` with `HMAC`

## ☠️ AVOID THESE

- `AES-CBC`, `AES-CTR` by itself
- Block ciphers with 64-bit blocks, such as `Blowfish`.
- OFB mode
- `RC4` (comically broken)

## References

- [Cryptographic Best Practices](https://gist.github.com/atoponce/07d8d4c833873be2f68c34f9afc5a78a#symmetric-encryption)
