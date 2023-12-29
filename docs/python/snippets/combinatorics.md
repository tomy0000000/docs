# Combinatorics

|                | Linear                                                                                                           | Circular                                                                                              | Non-Ordinal                                                                                                             |
| -------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Non-Repetitive | ![Permutation](https://wikimedia.org/api/rest_v1/media/math/render/svg/3fffa6967dcb9faf21389c000ac6fa97d4e74aa3) | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/aa9e4f710bab4992f92a33220df36ffce879d351) | ![Combination](https://wikimedia.org/api/rest_v1/media/math/render/svg/37eeb6cd5b9062227eb3c5a5965e1d602d95acfb)        |
| Repetitive     | ![Product](https://wikimedia.org/api/rest_v1/media/math/render/svg/0090b61e9671b6ec5177265d5ddbacab91c687de)     | ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/13f576f1658e4840247d6d55803652e8694c6c3c) | ![Counting multisets](https://wikimedia.org/api/rest_v1/media/math/render/svg/10f7530e7df6e04dac8268fae3c2221f05adfd9c) |

## Permutation

![Permutation](https://wikimedia.org/api/rest_v1/media/math/render/svg/3fffa6967dcb9faf21389c000ac6fa97d4e74aa3)

### Counting

```python
import math

def permutation(n, k):
    return math.factorial(n) // math.factorial(n - k)
```

Example:

```python
print(permutation(4, 2)) # 12
```

### Generation

```python
itertools.permutations("ABCD", 2)
# [('A', 'B'),
#  ('A', 'C'),
#  ('A', 'D'),
#  ('B', 'A'),
#  ('B', 'C'),
#  ('B', 'D'),
#  ('C', 'A'),
#  ('C', 'B'),
#  ('C', 'D'),
#  ('D', 'A'),
#  ('D', 'B'),
#  ('D', 'C')]
```

## Product

![Product](https://wikimedia.org/api/rest_v1/media/math/render/svg/0090b61e9671b6ec5177265d5ddbacab91c687de)

### Counting

```python
def product(n, k):
    return n ** k
```

Example:

```python
print(product(4, 2)) # 16
```

### Generation

```python
itertools.product("ABCD", repeat=2)
# [('A', 'A'),
#  ('A', 'B'),
#  ('A', 'C'),
#  ('A', 'D'),
#  ('B', 'A'),
#  ('B', 'B'),
#  ('B', 'C'),
#  ('B', 'D'),
#  ('C', 'A'),
#  ('C', 'B'),
#  ('C', 'C'),
#  ('C', 'D'),
#  ('D', 'A'),
#  ('D', 'B'),
#  ('D', 'C'),
#  ('D', 'D')]
```

## Combination

![Combination](https://wikimedia.org/api/rest_v1/media/math/render/svg/37eeb6cd5b9062227eb3c5a5965e1d602d95acfb)

### Counting

```python
import math

def combination(n, k):
    return math.factorial(n) // (math.factorial(k) * math.factorial(n - k))
```

Example:

```python
print(combination(4, 2)) # 6
```

### Generation

```python
itertools.combinations("ABCD", 2)
# [('A', 'B'),
#  ('A', 'C'),
#  ('A', 'D'),
#  ('B', 'C'),
#  ('B', 'D'),
#  ('C', 'D')]
```

## Counting multisets

![Counting multisets](https://wikimedia.org/api/rest_v1/media/math/render/svg/10f7530e7df6e04dac8268fae3c2221f05adfd9c)

### Counting

```python
import math

def counting_multisets(n, k):
    return math.factorial(n + k - 1) // (math.factorial(k) * math.factorial(n - 1))
```

Example:

```python
print(counting_multisets(4, 2)) # 10
```

### Generation

```python
itertools.combinations_with_replacement("ABCD", 2)
# [('A', 'A'),
#  ('A', 'B'),
#  ('A', 'C'),
#  ('A', 'D'),
#  ('B', 'B'),
#  ('B', 'C'),
#  ('B', 'D'),
#  ('C', 'C'),
#  ('C', 'D'),
#  ('D', 'D')]
```

## Reference

- [Python Documentation - itertools](https://docs.python.org/3/library/itertools.html)
- [Wikipedia (zh)](https://zh.wikipedia.org/wiki/%E7%BB%84%E5%90%88%E6%95%B0%E5%AD%A6#%E6%80%BB%E7%BB%93)
