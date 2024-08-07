# Python Environment Tools

A brief overview of various environment tools available for Python.

## Manage Python Version

### Windows Store

Windows Store offers [multiple versions](https://apps.microsoft.com/search?query=Python) of Python.

### Homebrew

Homebrew can install [multiple versions](https://formulae.brew.sh/formula/) of Python, e.g.

```shell
brew install python@3.12
```

:::warning

Homebrew pythons exists to serve other formulas. Always use virtual environment and do not install other packages into Homebrew Python.

:::

### [`pyenv`](https://github.com/pyenv/pyenv)

- Install and managed multiple versions of Python on the same machine.
- Control python version in _global_, _local_, and _shell_ levels.
- 👍🏻 Written in shell script, does not require pre-existed Python installation.
- 👎🏻 Use shims to inject the correct Python version into your shell.

## Virtual Environment

### `venv`

- Standard library module for creating lightweight virtual environments.
- Built-in module in Python 3.3 and later.

```shell
python3 -m venv path-to-env
```

:::tip

Think about where you'd like to store your virtual environments.

| Directory         | Path             | Pros                                     | Cons                                                                            |
| ----------------- | ---------------- | ---------------------------------------- | ------------------------------------------------------------------------------- |
| Project directory | `./venv`         | Straightforward and easy to manage.      | - Should be added to `.gitignore`<br/>- Bloated project directory               |
| User directory    | `~/.virtualenvs` | Manage virtual environments in one place | - May pile up over time<br/>- Easy to forget to delete after project completion |

:::

### [`virtualenv`](https://github.com/pypa/virtualenv)

- The predecessor of `venv`.
- Now offers as a more feature-rich edition of `venv`.
- Use `virtualenv` if you need to...
  - Faster environment setup.
  - More control over the environment.

## Manage Project Dependencies

TODO

### [`pipenv`](https://github.com/pypa/pipenv)

### [`poetry`](https://github.com/python-poetry/poetry)

### [`pdm`](https://github.com/pdm-project/pdm)

### [`hatch`](https://github.com/pypa/hatch)

### [`uv`](https://github.com/astral-sh/uv)

### [`rye`](https://github.com/astral-sh/rye)
