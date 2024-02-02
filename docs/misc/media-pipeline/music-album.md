# Music Album

## Process

1. Ripping (FLAC, 16bit, 44.1kHz)
2. Metadata (see [Fields](#fields))
3. Artwork (3000px x 3000px)
4. Rename Files (`{Disc Number}-{Track Number} - {Title}`)
5. Rename Folder (`{Album Artist} - {Album} ({Release Year})`)

When renaming:

- `Disc Number` and `Track Number` are zero-padded to 2 digits
- Make sure the name is sanitized and compatible with all file systems (macOS, NTFS, SMB, CIFS, etc.)

## Fields

- Album
  - Album Artist
  - Album Name
  - Genre
  - Release Time (Date, or Year if not available)
  - Compilation
  - Explicit / Clean
  - Publisher / Label
  - Copyright
  - Credits
- Track
  - Title
  - Artist
  - Disc Number
  - Track Number
  - Composer
  - Lyricist
  - Language
