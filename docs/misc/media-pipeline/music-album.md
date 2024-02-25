# Music Album

## Process

1. Ripping (FLAC, 16bit, 44.1kHz)
2. Metadata (see [Fields](#fields))
3. Artwork (3000px x 3000px)
4. Rename Files (`{Disc Number}-{Track Number} - {Title}`)
5. Rename Folder (`{Album Artist} - {Album} ({Release Year})`)

Regarding rename:

- `Disc Number` and `Track Number` are zero-padded to 2 digits
- There might be multiple Album Artists, choose the main one only
- Make sure the name is sanitized and compatible with all file systems (macOS, NTFS, SMB, CIFS, etc.)

## Fields

| Group | Field Name       | Multiple | Vorbis               | ID3v2.4 | Notes                                               |
| ----- | ---------------- | -------- | -------------------- | ------- | --------------------------------------------------- |
| Album | Album            | ❌       | `ALBUM`              | `TALB`  |                                                     |
| Album | Album Artist     | ✅       | `ALBUMARTIST`        |         |                                                     |
| Album | Discs            | ❌       | `DISCTOTAL`          |         | Total number of disc in the album                   |
| Album | Tracks           | ❌       | `TRACKTOTAL`         |         | Total number of track in the disc                   |
| Album | Year             | ❌       | `DATE`               |         | Release Year                                        |
| Album | Release Time     | ❌       | `RELEASETIME`        | `TDRL`  | Precision to date, e.g. `2023-08-10T00:00:00-04:00` |
| Album | Compilation      | ❌       | `PARTOFACOMPILATION` |         |                                                     |
| Album | Explicit/Clean   |          |                      |         | iTunes custom tag, not supported                    |
| Album | Publisher        | ❌       | `LABEL`              | `TPUB`  |                                                     |
| Album | Copyright        | ❌       | `COPYRIGHT`          | `TCOP`  |                                                     |
| Album | Credits          |          | `MUSICIANCREDITS`    |         | Mapping of instruments to artists                   |
| Album | Spotify Album ID | ✅       |                      |         | Custom field                                        |
| Track | Title            | ❌       | `TITLE`              | `TIT2`  |                                                     |
| Track | Artist           | ✅       | `ARTIST`             |         |                                                     |
| Track | Disc Number      | ❌       | `DISCNUMBER`         |         |                                                     |
| Track | Track Number     | ❌       | `TRACKNUMBER`        | `TRCK`  |                                                     |
| Track | Genre            |          | `GENRE`              |         | See the list of [genre](#genres)                    |
| Track | Composer         | ✅       | `COMPOSER`           | `TCOM`  |                                                     |
| Track | Lyricist         | ✅       | `LYRICIST`           | `TEXT`  |                                                     |
| Track | Language         |          | `LANGUAGE`           | `TLAN`  |                                                     |
| Track | Lyrics           | ❌       | `LYRICS`             | `USLT`  |                                                     |

## References

- [Vorbis Comment](https://xiph.org/vorbis/doc/v-comment.html)
- [id3v2.4.0-frames - ID3.org](https://web.archive.org/web/20220903174949/https://id3.org/id3v2.4.0-frames)
- [Mapping of Properties to Various Formats (TagLib)](https://taglib.org/api/p_propertymapping.html)
