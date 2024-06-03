# Scripting

Guide to writing good shell scripts.

## Shebang

Put at the first line of the script. It tells the system which interpreter to use.

- Bash: `#!/bin/bash` or `#!/usr/bin/env bash`
- POSIX: `#!/bin/sh`

If you meet any of the following criteria, use POSIX:

- Executing on a minimal environment
- Bash is not available
- You want to ensure high portability (Think again if you really need this)

Otherwise, use Bash.

### Bash-only features

- Arrays
- Associative arrays
- `[[`
- `((`
- `declare`
- `local`
- `source`

### `env` or `bash`?

- Use `#!/usr/bin/env bash` if:
  - You need your script to be portable and run on various systems.
  - You don't have control over the environment where the script will be executed.
- Use `#!/bin/bash` if:
  - You are working in a controlled environment where you can ensure Bash is located at `/bin/bash`.
  - You need the slight performance benefit of directly invoking the interpreter without using env.

## `set` flags

Most commonly used flags:

- `-x`: Print commands before executing
- `-e`: Exit on error
- `-u`: Exit on unset variable
- `-o pipefail`: Exit on pipe fail

TL;DR: Use this starter template:

```bash
!#/bin/bash
set -xeuo pipefail
```

after script is done, you can remove the `-x` flag.

## Bracketing

TODO

## Piping remote script

### `curl`

```bash
bash -c "$(curl -fsSL https://init.tomy.tech)"
```

### `wget`

```bash
bash -c "$(wget -O - https://example.com)"
```

:::danger

Don't ever `curl | bash` or `wget -O - | bash`. Malicious server could potentially change the script if they observe the response is being piped to bash.

The above examples are safe because the script is fetched first and then executed.

:::

## References

- [Bash `set` flags list](https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html)
