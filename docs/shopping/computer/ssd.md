# SSD

<abbr title="Solid State Drive">SSD</abbr> is a storage device that uses integrated circuit assemblies as memory to store data persistently.

### Checking SSD Health

1. Install `smartmontools`

```bash
brew install smartmontools
```

2. Check status

```bash
sudo smartctl --all /dev/disk0 # Replace disk0 with the disk you want to check
```

:::tip

Look for the "Media Wearout Indicator" value. New SSDs have a value of 100, and the value decreases as the drive wears out.

:::
