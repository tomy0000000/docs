# 🍪 Cookie

How to work with cookie in the browser.

## TL;DR

Cookie has pretty good defaults, so no need to waste time for most cases.

Quick summary:

|             | `Domain`         | `Path`    | `SameSite` | `Max-Age` / `Expires` | `Secure` | `HttpOnly` |
| ----------- | ---------------- | --------- | ---------- | --------------------- | -------- | ---------- |
| Baseline    | (Current domain) | `/`       | `None`     | `Max-Age: 86400`      |          |            |
| Good enough | (Default)        | `/`       | `Lax`      | (Default)             |          |            |
| Most secure | (Default)        | (Default) | `Strict`   | (Default)             | `Secure` | `HttpOnly` |

## Scope

There are three attributes that define the scope of a cookie:

### `Domain`

By default `Domain` would just be the domain of the current page, which is normally fine.

You can include sub-domain when you want to share cookie with them, but you can't set cookie for parent domain from sub-domain.

### `Path`

By default, `Path` would be one level up from the current path. (e.g. `Path: /a` when set at `/a/b`) [^1]

Leave it as default, or set to `/` to make it available to all pages on the domain.

:::danger

Be extra careful if you have another application on the same domain under a different path!

:::

[^1]: It's sometimes a little complicated, see [this StackOverflow](https://stackoverflow.com/questions/43324480/how-does-a-browser-handle-cookie-with-no-path-and-no-domain).

### `SameSite`

By default, `SameSite` is set to `Lax`, which is good because it gives you some protection against CSRF attacks.

Given that your application would be linked to from other sites. If you want users to re-login when they come from another site, you can set it to `Strict`. e.g. When you are building a banking application.

If your application would be embedded in another site, or accessed with an API, you can set it to `None`. e.g. When you are building a form or comment widget that can be embedded in other sites.

## Expiry

Cookies expire after session is closed by default.

If you want to retain between session, sucha as "remember me" for login, set `Max-Age` to denotes how long the cookie should be retained (in seconds), up to 400 days. (May vary by browser). Another way is to use `Expires` to set a specific date.

## Safety

### `Secure`

By default this is not set, which means Cookie is sent over HTTP and HTTPS.

If you want to make sure it's only sent over HTTPS, set `Secure`.

:::info

`localhost` behaves differently across browsers. Check the references for more details.

:::

### `HttpOnly`

By default this is not set, which means Cookie can be accessed by JavaScript.

If you want to make sure it's not accessible by JavaScript (through `Document.cookie`), set `HttpOnly`.

:::warning

Request initiated by JavaScript (e.g. with `fetch()`) will still send the cookie!

:::

## Test if Cookie is enabled

```javascript
console.log(navigator.cookieEnabled);
```

## References

- [Cookie Status](https://www.cookiestatus.com/)
- [MDN - Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
- [RFC 6265bis](https://httpwg.org/http-extensions/draft-ietf-httpbis-rfc6265bis.html)
