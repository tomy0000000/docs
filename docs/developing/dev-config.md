# ⚙️ Configurations

> The best configurations is no configuration.

Defaults are there for a reason. Start with the defaults and only change them when you have a good reason to.

However, these are some opinionated configurations to get started for a new project.

For system-wide configurations, see [dotfiles](https://github.com/tomy0000000/dotfiles).

## EditorConfig

```ini
# .editorconfig
# https://editorconfig.org/

# top-most EditorConfig file
root = true

# Global style
[*]
charset = utf-8  # Set default charset
end_of_line = lf  # Unix-style newlines
insert_final_newline = true  # Ensure newline at the end of file

# Go
# https://go.dev/doc/effective_go#formatting
[*.{go}]
indent_style = tab
indent_size = 4

# JavaScript / TypeScript
[*.{css,html,js,json,jsx,scss,ts,tsx,yaml,yml}]
indent_style = space
indent_size = 2
max_line_length = 80  # Prettier default

# Makefiles
[Makefile,*.mk]
indent_style = tab
indent_size = 4

# Python
# https://peps.python.org/pep-0008/#indentation
[*.{py}]
indent_style = space
indent_size = 4
# PEP 8 recommends:
# 72 for docstrings
# 79 for code (or up to 99)
max_line_length = 88

# Ruby
# https://rubystyle.guide/#tabs-or-spaces
[*.{rb}]
indent_style = space
indent_size = 2

# Shell scripts
[*.{sh}]
indent_style = space
indent_size = 4
```
