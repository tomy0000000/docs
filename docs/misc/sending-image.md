# 🚀 Sending Image

How to send images while preserving the original quality and metadata.

## Table

| Method                  | Resolution | No Compression | Timestamp | Location | Metadata | File Name | Last Test |
| ----------------------- | ---------- | -------------- | --------- | -------- | -------- | --------- | --------- |
| Email                   | ✅         | ✅ [^1]        | ✅        | ✅       | ✅       | ✅        | -         |
| SMS                     |            |                |           |          |          |           |           |
| AirDrop                 |            |                |           |          |          |           |           |
| iMessage                |            |                |           |          |          |           |           |
| LINE (picture)          |            |                |           |          |          |           |           |
| LINE (album)            |            |                |           |          |          |           |           |
| WhatsApp                |            |                |           |          |          |           |           |
| Telegram                |            |                |           |          |          |           |           |
| Dropbox Request (web)   |            |                |           |          |          |           |           |
| Google Photos (web)     |            |                |           |          |          |           |           |
| Google Photos (iOS app) |            |                |           |          |          |           |           |

[^1]: Image should be sent as an attachment, not embedded in the email. Even so, some email clients might compress the image.

## Key Aspects

When sending images, it is important to consider the following aspects:

- **Resolution**: not be resized.
- **No Compression**: not be compressed.
- **Timestamp**: The timestamp of image creation.
- **Location**: The latitude, longitude, altitude of the location where the image was taken.
- **Metadata**: Such as camera model, lens, aperture, shutter speed, ISO, etc.
- **File name**: The original file name.

### Forensic Analysis

Other properties that might be useful to determine if the image has been tampered with:

- File size
- Checksum

## Motion Photos

Motion photos are a combination of a still image and a video.

TODO

### iOS Live Photos

### Google Motion Photos

### Samsung Motion Photo

### Huawei Moving Picture
