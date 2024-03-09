# Binary Search

## Use `bisect` module

```python
from bisect import bisect_left

a = list(range(1, 10))  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

bisect_left(a, 3) # 2
```

:::warning

`bisect_left()` is not the same as `bisect()` and `bisect_right()`!

:::

## Handcrafted

### with while loop

```python
def binary_search(a, x):
    """Return the index of the leftmost value exactly equal to x."""
    lo = 0
    hi = len(a)
    # highlight-next-line
    while lo < hi:
        mid = (lo + hi) // 2
        if a[mid] < x:
            lo = mid + 1
        else:
            hi = mid
    return lo
```

### with recursion

```python
def binary_search(a, x, lo=0, hi=None):
    """Return the index of the leftmost value exactly equal to x."""
    if hi is None:
        hi = len(a)
    if lo < hi:
        mid = (lo + hi) // 2
        if a[mid] < x:
            return binary_search(a, x, mid + 1, hi)
        else:
            return binary_search(a, x, lo, mid)
    return lo
```

## Reference

- [Python `bisect` module docs](https://docs.python.org/3/library/bisect.html)
