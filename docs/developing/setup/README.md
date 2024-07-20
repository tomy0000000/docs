# 🚀 Setup

SOP for setting up new computer/server.

## Steps

1. **Setup hardware**: Get machine ready for use.
2. **Networking**: Configure static IP, DNS.
3. Configure SSH
4. Configure Non-root User
5. Configure Firewall
6. Install Core Utilities
7. Configure Dotfiles
8. Install Core Applications
9. Install Application Suite

### How they are done

| Step | Bare server       | Cloud VM          | Container | Device            |
| ---- | ----------------- | ----------------- | --------- | ----------------- |
| 1    | 🐒 Monkey         | terraform         | -         | -                 |
| 2    | 🐒 Monkey         |                   | -         | -                 |
| 3    | dotfiles (script) | -                 | -         | dotfiles (script) |
| 4    | dotfiles (script) | dotfiles (script) | -         | dotfiles (script) |
| 5    | playbook          | playbook          | -         | -                 |
| 6    | playbook          | playbook          | dotfiles  | dotfiles          |
| 7    | playbook          | playbook          | dotfiles  | dotfiles          |
| 8    | playbook          | playbook          | dotfiles  | dotfiles          |
| 9    | playbook          | playbook          | dotfiles  | dotfiles          |

### Principles

- [terraform](https://github.com/tomy0000000/terraform) covers VM provisioning
- [dotfiles](https://github.com/tomy0000000/dotfiles) stores configs
  - There should "hopefully" be no script in dotfiles
  - STUDY `compinit` `zcompile` `zstyle` `autoload`
- Script covers
  - SSH settings
  - User creation
  - Setup machine to accept ansible commands
- All remaining steps are covered by [playbooks](https://github.com/tomy0000000/playbooks)

## Core Utilities

- `bash`: Most scripts are written in bash.
- `curl`: Used to fetch remote artifacts.
- git
- make (> 4.4.1 to use --print-targets)
- nano
- sudo
- wget
- zsh

## Core Applications

- Homebrew (include XCode CLI tools)
- iTerm2
- Brave
- Dropbox
- 1Password

## Handful

- Alfred
- Rectangle Pro
- Hammerspoon

## Windows

I don't use Windows much so nothing is automated. Here's a general step by step guide:

- Install Windows Terminal (from MS Store)
- Install `winget` by upgrading `Get App Installer`
- Install PowerShell 7
- Install `gsudo` with `winget`
- Install `choco` with `winget`
