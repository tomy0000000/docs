# 🐚 Shell RC

Guide on maintaining good startup scripts. Also known as rc files, such as `.bashrc`, `.zshrc`, etc.

## Zsh

:::info

TL;DR:

- You don't need `/etc/zshenv`, `~/.zprofile`, `~/.zlogin`, and `~/.zlogout`.
- You only need:
  - `~/.zshenv`: For environment variables.
  - `~/.zshrc`: For aliases, functions, and auto-completion.
- Call `compinit` ASAP in `~/.zshrc`
  - If you use zsh frameworks (e.g. Oh My Zsh), they might have done this for you.
    - That means you should source them ASAP
- `compinit` is not the same as `bashcompinit`
  - Zsh is highly compatible with Bash completion scripts.
  - If you only have Bash completion scripts, you can use `bashcompinit` instead.
  - Call `bashcompinit` it right after `compinit`.
  - They are independent of each other and can be used together.

:::

Depending on how shell is invoked, Zsh reads different files. Here is the order:

1. `/etc/zshenv`
2. `~/.zshenv`
3. `/etc/paths` (only for macOS)
4. `~/.zprofile` (only for login shells)
5. `/etc/zshrc` (only for macOS)
6. `~/.zshrc` (only for interactive shells)
7. `~/.zlogin` (only for login shells)
8. _Your shell session_
9. `~/.zlogout` (only for login shells)

:::note

Different systems (even installations) may behave differently. Use `zsh -x` to findout what happens on shell startup.

:::

### Third party configuration guide

When a CLI tool is installed, they may require some configuration on RC files. For the following reasons:

| Type                                 | Where to put                          |
| ------------------------------------ | ------------------------------------- |
| Environment Variables (beside Paths) | `~/.zshenv`                           |
| Paths                                | `~/.zshrc`                            |
| Aliases                              | `~/.zshrc`                            |
| Functions                            | `~/.zshrc`                            |
| Auto-completion                      | `~/.zshrc` (After calling `compinit`) |

## References

- [flowblok’s blog - Shell startup scripts](https://blog.flowblok.id.au/2013-02/shell-startup-scripts.html)
- [mac.install.guide - .zshrc and .zprofile](https://mac.install.guide/terminal/zshrc-zprofile)
- [A Guide to the Zsh Completion with Examples](https://thevaluable.dev/zsh-completion-guide-examples/)
- [Welcome To Golang By Example - Understand /etc/paths file and /etc/paths.d directory on MAC](https://golangbyexample.com/understand-etc-paths-pathsd-mac/)
