# 🌱 RSS / Atom Feed

Web Feed Syndications in XML format. Feeds are commonly used to keep track of many different websites in a single news aggregator.

## TL;DR

### As Feed Creator

1. Serve both RSS and Atom feed whenever possible
2. Extend RSS fields with proper namespace
3. Make sure to proper sanitize or encode content in tags, sometimes with CDATA
4. Always use UTF-8 encoding

### As Feed User

1. Lookup feed with method describe below.
2. Choose Atom feed if available, because the specification is more unambiguous hence less interpretation error.

## <abbr title="Rich Site Summary">RSS</abbr>

The original specification is published by [Harvard Law](https://cyber.harvard.edu/rss/rss.html), more formal and practically useful version is published at [RSS Advisory Board](https://www.rssboard.org/rss-specification). The latest version is 2.0.11 and has not changed since 2009.

### Extending

RSS 2.0 onward allows custom extending, as long as

1. Custom fields are Documented in namespace
2. Format conformed to [XML 1.0](https://www.w3.org/TR/REC-xml-names/)

See more in [docs](https://www.rssboard.org/rss-specification#extendingRss). One of the widely used extended namespace is Media RSS created by Yahoo!, docs can also be found on [RSS Advisory Board](https://www.rssboard.org/media-rss).

### Autodiscovery

A special `<link>` tag can be added to the `<head>` of HTML to allow other services easily locate feed location. More can be found on [RSS Advisory Board](https://www.rssboard.org/rss-autodiscovery).

### Validation

Use [W3C Feed Validation Service](https://validator.w3.org/feed/). A list of errors and warning can be found in the [docs](https://validator.w3.org/feed/docs/).

## Atom

Atom specification is defined by the following two RFC:

1. [RFC 4287: The Atom Syndication Format](https://datatracker.ietf.org/doc/html/rfc4287)
2. [RFC 5023: The Atom Publishing Protocol](https://datatracker.ietf.org/doc/html/rfc5023)

###

## Feed Location for Specific Sites

| Site    | Example site                               | Feed location                                    |
| ------- | ------------------------------------------ | ------------------------------------------------ |
| Tumblr  | https://example.tumblr.com                 | https://example.tumblr.com/rss                   |
| Blogger | https://example.blogspot.com               | https://example.blogspot.com/feeds/posts/default |
| Medium  | https://medium.com/example-site            | https://medium.com/feed/example-site             |
| YouTube | https://www.youtube.com/channel/channel_id | https://www.youtube.com/feeds/videos.xml?        |

:::tip

Check out [Open RSS](https://openrss.org/) to find feed for more sites.

:::

## Appendix

- [Google News feed requirements](https://support.google.com/news/publisher-center/answer/9545420)
- [Apple News RSS guidelines](https://support.apple.com/en-au/guide/news-publisher/apdc2c7520ff/icloud)
- [Difference Between RSS and ATOM](http://www.differencebetween.net/technology/difference-between-rss-and-atom/)
