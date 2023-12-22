# Sorting

Various implementations of sorting algorithms.

## Tim Sort

Python's default sorting algorithm.

```python
sorted(iterable)
```

or

```python
the_list.sort(*, key=None, reverse=False)
```

## Heap Sort

```python
import heapq

def heapsort(iterable):
    h = []
    for value in iterable:
        heapq.heappush(h, value)
    return [heapq.heappop(h) for i in range(len(h))]

heapsort(the_list)
```

## Reference

- [TimSort](https://en.wikipedia.org/wiki/Timsort)
- [Python `heapq` module docs](https://docs.python.org/3/library/bisect.html#examples)
