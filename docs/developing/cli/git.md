# `git`

Quick reference for `git` commands.

## Commands

- 📄 means the command is built-in.
- ✚ means the command is available from [tj/git-extras](https://github.com/tj/git-extras).
- ⛓️ means the command is available from [nvie/git-toolbelt](https://github.com/nvie/git-toolbelt).

| Subcommand   | Docs                                                                              | Description                                               |
| ------------ | --------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `bulk`       | [✚](https://github.com/tj/git-extras/blob/main/Commands.md#git-bulk)              | Run a git command on multiple repositories                |
| `brv`        | [✚](https://github.com/tj/git-extras/blob/main/Commands.md#git-brv)               | Pretty-print branches with their last commit              |
| `coauthor`   | [✚](https://github.com/tj/git-extras/blob/main/Commands.md#git-coauthor)          | Add a co-author to the last commit                        |
| `contrib`    | [✚](https://github.com/tj/git-extras/blob/main/Commands.md#git-contrib)           | Show a user's contributions to the repository             |
| `count`      | [✚](https://github.com/tj/git-extras/blob/main/Commands.md#git-count)             | Count the number of commits                               |
| `extras`     | [✚](https://github.com/tj/git-extras/blob/main/Commands.md#git-extras)            | Show the man page of `git-extras`                         |
| `lock`       | [✚](https://github.com/tj/git-extras/blob/main/Commands.md#git-lock)              | Lock a file from being changed in the repository          |
| `locked`     | [✚](https://github.com/tj/git-extras/blob/main/Commands.md#git-lock)              | List all locked files                                     |
| `obliterate` | [✚](https://github.com/tj/git-extras/blob/main/Commands.md#git-obliterate)        | Remove a file from the entire history of a git repository |
| `root`       | [⛓️](https://github.com/nvie/git-toolbelt/blob/main/README.md#git-root--git-repo) | Show the root directory of the repository                 |
| `summary`    | [✚](https://github.com/tj/git-extras/blob/main/Commands.md#git-summary)           | Show commit summary                                       |
| `show-tree`  | [✚](https://github.com/tj/git-extras/blob/main/Commands.md#git-show-tree)         | Show commit tree                                          |
| `standup`    | [✚](https://github.com/tj/git-extras/blob/main/Commands.md#git-standup)           | Show a user's contributions in the past n days            |
| `unlock`     | [✚](https://github.com/tj/git-extras/blob/main/Commands.md#git-unlock)            | Unlock a file from being changed in the repository        |

## Snippets

### Remove commits after a certain commit

```bash
git rebase --committer-date-is-author-date -i <commit-hash>^
```
