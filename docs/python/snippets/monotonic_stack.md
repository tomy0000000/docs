# Monotonic Stack

Use a monotonic stack to record the index of the next greater/smaller element.

## Initialize

Just use a list.

```python
mont = []
```

## Push an item

```python
from bisect import insort

insort(mont, item)
```

:::note

By default, `bisect.insort` is the same as `bisect.insort_right` and uses binary search to find the insertion point. If the item is already in the list, it will be inserted to the right of any existing entries. To insert the item to the left of existing entries, use `bisect.insort_left`.

:::

:::info

Note that finding the insertion point is $O(log n)$ but inserting the item involves a shift of all subsequent items and takes $O(n)$. Therefore, the overall cost is $O(n)$.

:::

:::tip

To preserve the original index of the item in the list, use a tuple `(item, index)` instead of just `item`.

:::

## Pop an item

Just use `list.remove()`.

```python
mont.remove(item)
```

## Peek the top item

```python
mont[-1]
```

## Reference

- [Python `bisect` module docs](https://docs.python.org/3/library/bisect.html)
