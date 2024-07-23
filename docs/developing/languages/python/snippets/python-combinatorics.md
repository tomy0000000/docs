# Combinatorics

|                | Linear                      | Circular                                                                | Non-Ordinal                                   |
| -------------- | --------------------------- | ----------------------------------------------------------------------- | --------------------------------------------- |
| Non-Repetitive | $P^n_k = \frac{n!}{(n-k)!}$ | $\frac{n!}{k \cdot (n-k)!}$                                             | $C_{k}^{n}={\frac{n!}{k!\cdot (n-k)!}}$       |
| Repetitive     | $U^n_k = n^k$               | $\frac{\sum_{r \vert k}(r \cdot \varphi (r) \cdot n^{\frac{k}{r}})}{k}$ | $H_{k}^{n}={\frac{(n+k-1)!}{k!\cdot (n-1)!}}$ |

## Permutation

$P^n_k = \frac{n!}{(n-k)!}$

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

$U^n_k = n^k$

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

$C_{k}^{n}={\frac{n!}{k!\cdot (n-k)!}}$

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

$H_{k}^{n}={\frac{(n+k-1)!}{k!\cdot (n-1)!}}$

:::tip

Multiset can be used to calculate the number of combinations of non-negative integers that sum to a given number.

E.g. The number of ways to sum 3 non-negative integers to 4 is $H^3_4 = C^6_2 = 15$.

:::

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
