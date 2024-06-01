# RC Files

Guide on maintaining good startup scripts. Also known as rc files, such as `.bashrc`, `.zshrc`, etc.

## Zsh

Depending on how shell is invoked, Zsh reads different files. Here is the order:

1. `/etc/zshenv`
2. `~/.zshenv`
3. `~/.zprofile` (only for login shells)
4. `~/.zshrc` (only for interactive shells)
5. `~/.zlogin` (only for login shells)
6. commands...
7. `~/.zlogout` (only for login shells)

## References

- [flowblok’s blog - Shell startup scripts](https://blog.flowblok.id.au/2013-02/shell-startup-scripts.html)
