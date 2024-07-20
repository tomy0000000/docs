# `bisect`

Native binary search algorithm. See also [`Binary Search`](../snippets/binary-search).

:::info

by default:

- `bisect` = `bisect_right`
- `insort` = `insort_right`

:::

## Finding index

Use `bisect_left` and `bisect_right` to find the index of the leftmost and rightmost value exactly equal to `x`, respectively.

Example:

```python
from bisect import bisect_left, bisect_right

a = [1, 1, 1, 1, 1, 9, 9, 9, 9, 9]
#    0  1  2  3  4  5  6  7  8  9 10
#    ^              ^             ^
#    |              |             bisect_right(a, 9)
#    |              bisect_left(a, 9)
#    |              bisect_right(a, 1)
#    bisect_left(a, 1)
```

## Inserting into sorted list

`bisect_left` and `bisect_right` use `insort_left` and `insort_right` to insert an element into a sorted list.

:::tip

- If the new element does not exist in the list (or not preferred)
  - `insort_left` = `insort_right`
- If the new element already exists in the list:
  - `insort_left` inserts it at the leftmost position
  - `insort_right` inserts it at the rightmost position

:::

Example:

```python
from bisect import insort_left, insort_right

a = [1, 1, 1, 1, 1, 9, 9, 9, 9, 9]
#    0  1  2  3  4  5  6  7  8  9 10
#    ^              ^             ^
#    |              |             insort_right(a, 9)
#    |              insort_left(a, 9)
#    |              insort_right(a, 1)
#    insort_left(a, 1)
```

## Reference

- [Python `bisect` module docs](https://docs.python.org/3/library/bisect.html)
- [`bisect` source code](https://github.com/python/cpython/blob/main/Lib/bisect.py)
