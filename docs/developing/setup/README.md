# 🚀 Setup

SOP for setting up new computer/server.

## Steps & How they are done

| #   | Step                      | Bare server       | Cloud VM          | Container | Device            |
| --- | ------------------------- | ----------------- | ----------------- | --------- | ----------------- |
| 1   | Setup Hardware            | 🐒 Monkey         | terraform         | -         | -                 |
| 2   | Networking                | 🐒 Monkey         |                   | -         | -                 |
| 3   | Configure SSH             | dotfiles (script) | -                 | -         | dotfiles (script) |
| 4   | Configure Non-root User   | dotfiles (script) | dotfiles (script) | -         | dotfiles (script) |
| 5   | Configure Firewall        | playbook          | playbook          | -         | -                 |
| 6   | Install Core Utilities    | playbook          | playbook          | dotfiles  | dotfiles          |
| 7   | Configure Dotfiles        | playbook          | playbook          | dotfiles  | dotfiles          |
| 8   | Install Core Applications | playbook          | playbook          | dotfiles  | dotfiles          |
| 9   | Install Application Suite | playbook          | playbook          | dotfiles  | dotfiles          |

- **Setup hardware**: Get machine ready for use.
- **Networking**: Configure static IP for server, hosts, DNS.

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
