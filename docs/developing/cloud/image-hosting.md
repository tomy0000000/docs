# 🏞️ Image Hosting

Quick guide on how to host and serve images

## Just use GitHub Pages

Commit your images and serve them with GitHub Pages

- Pros
  - Dead simple
  - Free forever
- Cons
  - Does not scale well
  - No additional features

## AWS [S3](https://aws.amazon.com/s3) + [CloudFront](https://aws.amazon.com/cloudfront)

Create an empty bucket and serve the content with CloudFront.

- Pros
  - Relative simple
  - Some rooms for customization
  - CDN performs well
  - Starts free
- Cons
  - No additional features
  - May incur huge expense if traffic spikes

## Pipelined Solutions

- [Cloudinary](https://cloudinary.com) starts at $0
- [Cloudflare Images](https://www.cloudflare.com/developer-platform/cloudflare-images) starts at $5/month

Provide full-fledged services such as upload, optimize, compression, transformation (Pre-process or On-the-Go), and CDN

- Pros
  - All kinds of features
- Cons
  - Unnecessarily complicated for most simple requirements
