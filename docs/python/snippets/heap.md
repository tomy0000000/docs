# Heap (Priority Queue)

Some handful snippets for using heap in Python.

## Create a heap

### Empty heap

```python
heap = []
```

### From a list

Complexity: $O(n)$

```python
heapq.heapify(the_list) # Inplace
```

:::tip

For max heap, use negative numbers.

:::

## Push an item

```python
heapq.heappush(heap, item)
```

## Read the top (smallest) item

```python
item = heapq.heappop(heap)
```

without removing it (peek):

```python
item = heap[0]
```

## Remove an arbitary item from a heap

Removing the item at index `i`[^1]:

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

[^1]: [StackOverflow](https://stackoverflow.com/a/10163422/10325430)

## Keep top K largest items

```python
for item in items:
    if len(heap) == k:
        heappushpop(heap, item)
    else:
        heappush(heap, item)
```

## Reference

- [Python `heapq` module docs](https://docs.python.org/3/library/heapq.html)
- [Wikipedia](<https://en.wikipedia.org/wiki/Heap_(data_structure)>)
