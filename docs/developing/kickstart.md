# 🎬 Kickstart a Project

## Naming

- **Repository**: Use lowercase[^1], and hyphen (`-`) to separate words. For example, `my-awesome-project`.

[^1]: Although GitHub supports uppercase, but many package managers and tools do not.

## Branching

The default branch should always be `main`. For existing projects, rename them by following [GitHub's instructions](https://docs.github.com/en/github/administering-a-repository/renaming-a-branch) and the following command on local machine:

```bash
git branch -m master main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a
git remote prune origin
```

## Versioning

Select from the following options:

- [Semantic Versioning](https://semver.org/): No-brainer, most projects use this and don't have too many issues with it.
- [ZeroVer](https://0ver.org/): When you believe that this project is just for fun and it might never reach `1.0.0`.
- [CalVer](https://calver.org/): When a project has a very short release cycle or date is a key information for the users of the project (e.g. A constantly updated data, API, or SDK).

## Development Flow

For smaller projects, use [GitHub Flow](https://githubflow.github.io/). For larger projects, use [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/).

Some Pros and cons:

|      | GitHub Flow                                                      | GitFlow                                                                                                                        |
| ---- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Pros | 1. Plain simple, easy to maintain<br/>2. Dev iteration is faster | 1. More suitable for large team collaboration<br/>2. Can easily work on different features at the same time.                   |
| Cons | Bugs are accidentally merged into main branch more often         | 1. Maintaining CI on multiple branch can be a nightmare<br/>2. Need to cherry-pick hotfixes to dev/feature branch quite often. |

Read more in this [article](https://www.alexhyett.com/git-flow-github-flow/).

## GitHub Settings

### General > Features

- [ ] `Wikis`: Ues as minimal documentation if project needs one. Consider a dedicated site if project needs more than a few pages.
- [ ] `Issues`: Disable only if project is not open source.
- [ ] `Sponsorships`: Enable if project is offered more or less as a product/service. Use the template from [here](https://github.com/tomy0000000/github/blob/main/.github/FUNDING.yml)
- [ ] `Discussions`: Always enable. Use as a forum for users to ask questions and share ideas, and making announcements.
- [ ] `Projects`: Always disable. Use alternatives.

### General > Pull Requests

Checks only `Allow merge commits`, and `Pull request title and description` as Default commit message.

This is an idea from [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/#incorporating-a-finished-feature-on-develop). The main benefit is that you can easily identify which branch a commit came from, and it's easier to revert a feature.

Also checks the following:

- [ ] `Always suggest updating pull request branches`
- [ ] `Allow auto-merge`
- [ ] `Automatically delete head branches`

Because they are useful, and does not yield any downsides so far.

### Branches > `main`

If not mentioned, leave as default.

- [x] `Require a pull request before merging`
  - [x] `Require approvals`: 2 is ideal, but 1 is fine too.
- [x] `Require status checks to pass before merging`
- [x] `Do not allow bypassing the above settings`
