# Scripting

Guide to writing good shell scripts.

## Shebang

Put at the first line of the script. It tells the system which interpreter to use.

- Bash: `#!/bin/bash`
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

## References

- [Bash `set` flags list](https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html)
