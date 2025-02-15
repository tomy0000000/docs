---
skip_plural_check: true
---

# `defaults`

In macOS, the `defaults` command is used to read, write, and delete user defaults. In another word, settting user preferences, for both system and user applications.

:::info

User defaults are stored in the `~/Library/Preferences` directory in the form of `.plist` files. You can always view them to gain a better understanding of each application's settings, but you should **never edit them directly** even if the app is not running.

macOS caches the user defaults in memory and handle the modifications internally. Always use the `defaults` command to change the user defaults, and restart the application to apply the changes.

:::

## Steps

1. Find the domain of the application you want to modify. It should be in the form of something like `com.company.app_name`

```shell
defaults domains | tr ',' '\n'
```

2. Read all keys in domain

```shell
defaults read "${domain}"
```

3. Locate the key you want to modify, inspect its type

```shell
defaults read-type "${domain}" "${key}"
```

4. Modify the key

```shell
defaults write "${domain}" "${key}" "${value}"
```

:::tip

You can use `defaults read "${domain}" | pbcopy` to snapshot the current settings to the clipboard. Paste it to diff tools, change the settings, and compare the differences to find the key you want to modify.

:::

## References

- [Paweł Grzybek - Change macOS user preferences via command line](https://pawelgrzybek.com/change-macos-user-preferences-via-command-line/)
