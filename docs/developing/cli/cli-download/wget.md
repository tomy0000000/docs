# `wget`

## Snippets

### Download one webpage with assets

```bash
wget \
    --recursive # specify recursive download
    --span-hosts # go to foreign hosts when recursive
    --convert-links # make links in downloaded HTML or CSS point to local files
    --user-agent="User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:32.0) Gecko/20100101 Firefox/32.0"
    --page-requisites [url]
    --level=1
```

### Archive all pages of a website

```bash
wget \
    --recursive \
    --no-clobber \
    --page-requisites \
    --html-extension \
    --convert-links \
    --domains git-scm.com \
    --no-parent git-scm.com/docs
```
