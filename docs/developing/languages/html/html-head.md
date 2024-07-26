---
title: Head
---

# `<head>`

How to structure the `<head>` of an HTML document.

Order matters, this document will illustrate each section in the order they should appear.

TODO:

- `prefetch`
- `preconnect`
- `preload`

## Parsing and Rendering

1. Setting the character encoding, should always be `utf-8`.
2. If you must support IE, set the `X-UA-Compatible` meta tag. In 2024, this should be AVOIDED.
3. Setting the viewport, should always be `width=device-width, initial-scale=1.0`.

```html
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

## Title

The title of the document, should be descriptive and unique.

```html
<title></title>
```

## Stylesheets

In the order of:

1. External stylesheets
2. Internal stylesheets
3. Inline styles

<!-- prettier-ignore -->
```html
<link type="text/css" rel="stylesheet" href="" integrity="" />
<style></style>
```

## Base URL

The base URL for all relative URLs in the document. This is optional, but if used, should be present before any elements that use relative URLs.

```html
<base href="" target="" />
```

## Favicon

- There should always be a `favicon.ico` in the root directory.

```html
<link rel="shortcut icon" href="favicon.ico" />
<link rel="apple-touch-icon" href="" sizes="" />
<link rel="icon" type="" href="" sizes="" />
<link rel="manifest" href="/site.webmanifest" />
```

## Meta

TODO

### Open Graph

### Twitter

### Facebook

## Scripts

:::warning

Most `<script>` tags should be placed at the end of the `<body>` to prevent render-blocking. Only scripts that are necessary for the initial render should be placed in the `<head>`.

:::

Scripts that must be in `<head>` should always be placed at the bottom of it to prevent render-blocking. In the order of:

1. External scripts
2. Internal scripts
3. Inline styles

```html
<script src=""></script>
<noscript>Please enable JavaScript to view this page.</noscript>
```

## Putting Together

```html
<head>
  <!-- The MUST -->
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title></title>
  <!-- Meta -->
  <meta name="title" content="" />
  <meta name="description" content="" />
  <meta name="author" content="Tomy Hsieh" />
  <meta name="keywords" content="" />
  <meta
    name="theme-color"
    content="#FFFFFF"
    media="(prefers-color-scheme: light)"
  />
  <meta
    name="theme-color"
    content="#000000"
    media="(prefers-color-scheme: dark)"
  />
  <!-- Base -->
  <base href="" target="" />
  <!-- Favicon -->
  <link rel="shortcut icon" href="favicon.ico" />
  <link rel="apple-touch-icon" href="" sizes="" />
  <link rel="icon" href="" sizes="" type="" />
  <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
  <link rel="manifest" href="/site.webmanifest" />
  <!-- Stylesheets -->
  <link rel="stylesheet" href="" type="text/css" integrity="" />
  <style></style>
  <!-- Link -->
  <link rel="canonical" href="" />
  <link rel="alternate" type="application/rss+xml" href="/index.xml" title="" />
  <link rel="alternate" type="application/json" href="/index.json" title="" />
  <script type="application/ld+json"></script>
  <!-- Open Graph -->
  <meta property="og:title" content="" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="" />
  <meta property="og:description" content="" />
  <meta property="og:locale" content="" />
  <meta property="og:locale:alternate" content="" />
  <!-- Facebook -->

  <!-- Twitter -->
  <meta name="twitter:card" content="" />
  <meta name="twitter:site" content="" />
  <meta name="twitter:creator" content="" />
  <meta name="twitter:description" content="" />
  <meta name="twitter:title" content="" />
  <!-- Author's social link -->
  <link rel="me" href="" />
  <!-- Script -->
  <script src=""></script>
  <noscript>Please enable JavaScript to view this page.</noscript>
</head>
```

## References

- [🤯 HEAD](https://htmlhead.dev/)
- [GitHub: whatwg/html](https://github.com/whatwg/html)
- [StackExchange: Order of HTML meta tags](https://webmasters.stackexchange.com/a/81409/145798)
- [MDN - What's in the head? Metadata in HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
- [MDN - `<base>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base)
- [HTML attribute: rel](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel)
