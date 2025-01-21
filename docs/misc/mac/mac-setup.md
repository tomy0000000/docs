# Setup

How my Mac is setup.

## Hierarchy

There are mainly three artifacts:

### Applications / CLIs

GUI Applications and Command line tools.

Install method ordered by preference:

- [Homebrew](https://brew.sh/)
- Mac App Store: Manually login to the Mac App Store and batch install all the apps with [`mas`](https://github.com/mas-cli/mas) CLI.
- Setapp: Manually install all necessary apps.
- DMG: Download and install the app mounted from the `.dmg` file.
- PKG Installer: Download and execute the `.pkg` installer. **Be careful when password is prompted.**

<details>

<summary>Install Homebrew on multi-user machine</summary>

```shell
sudo dseditgroup -o create brew
sudo dseditgroup -o edit -a tomy0000000 -t user brew
sudo chgrp -R brew $(brew --prefix)/*
sudo chmod -R g+w $(brew --prefix)/*
```

</details>

### Data

Files, Documents, and other user data.

Handled by Dropbox.

### Preferences / Configurations

System Preferences, Application Preferences, and Configuration files.

Managed by:

- [`mackup`](https://github.com/lra/mackup) CLI
- [dotfiles repo](https://github.com/tomy0000000/dotfiles)

:::note

Some preferences and configurations are stored in the Dropbox folder.

:::

#### List of Preferences

- Keyboard Shortcuts

## Dependency Graph

- Homebrew node is not installed because all node CLI should be installed and managed by `pnpm`.
- Since pipx depends on Homebrew Python, every time Python is updated, all the Python CLIs installed by pipx should be reinstalled. Good news is that this is as easy as running `pipx reinstall-all`. Think of a better way to manage this someday ¯\\\_(ツ)\_/¯

```mermaid
graph TD
  A(alias)
  B(Xcode CLI) --> C(Homebrew)
  C --> D(Hombrew Python) --> E(pipx)
    E --> F(Python CLIs)
    E --> G(poetry)
  C --> H(pyenv) --> I(Python 3.x)
  C --> K(pnpm)
    K --> L(Node 18)
    K --> M(Node 20)
    K --> N("Node 22 (LTS)") --> O(Node CLIs)
  C --> P(rbenv) --> Q(Ruby 3.x)
  C --> R(goenv) --> S(Go 1.x)
  C --> T(mas)
  C --> U(git)
  C --> V(zsh)
```
