# Heap (Priority Queue)

Some handful snippets for using heap in Python.

For max heap, use negative numbers.

## Create a heap

```python
heap = heapq.heapify([])
```

## Push an item

```python
heapq.heappush(heap, item)
```

## Read the smallest item

```python
item = heapq.heappop(heap)
```

without removing it:

```python
item = heap[0]
```

## Remove an item from a heap

Complexity: $O(n)$

```python
h[i] = h[-1]
h.pop()
heapq.heapify(h)
```

Complexity: $O(log(n))$

```python
h[i] = h[-1]
h.pop()
if i < len(h):
    heapq._siftup(h, i)
    heapq._siftdown(h, 0, i)
```

## Reference

- [Python `heapq` module docs](https://docs.python.org/3/library/heapq.html)
- [Heap queue algorithm](<https://en.wikipedia.org/wiki/Heap_(data_structure)>)
- [StackOverflow](https://stackoverflow.com/a/10163422/10325430)
