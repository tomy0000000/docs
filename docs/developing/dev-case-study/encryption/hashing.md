---
sidebar_position: 2
---

# #️⃣ Hash Functions

Trade off between speed and collision rate.

TL;DR: Just use Facebook XXHash.

| Algorithm                                             | Year | Description                                            |
| ----------------------------------------------------- | ---- | ------------------------------------------------------ |
| [CRC-64](https://create.stephan-brumme.com/crc32/)    | 1975 | Used in networking for error detection.                |
| [MurmurHash](https://github.com/aappleby/smhasher)    | 2008 | Designed as a fast, general-purpose hash function.     |
| [Google CityHash](https://github.com/google/cityhash) | 2011 | Designed to be faster for short keys (\<64 bytes).     |
| [Facebook XXHash](https://xxhash.com/)                | 2012 | From the creator of zstd compression. SOTA             |
| [Google FarmHash](https://github.com/google/farmhash) | 2014 | Newer version of CityHash with better collision rates. |

## References

- [CMU 15-445](https://15445.courses.cs.cmu.edu/fall2024/slides/07-hashtables.pdf)
