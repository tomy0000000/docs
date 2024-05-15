# Python Environment Tools

A brief overview of various environment tools available for Python.

## Manage Python Version

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

TBA
