# Dunder Methods

An overview of Python's dunder methods.

## General

- `__init__`: Constructor
- `__str__`: Overwrites the `str()` function
- `__bool__`: Overrides the `bool()` function
- `__len__`: Overrides the `len()` function
- `__hash__`: Overrides the `hash()` function, this is used in dictionaries
- `__repr__`: String representation shown in the REPL
- `__call__`: Caller function, lets you call the object like a function
- `__enter__`: Setup function for context managers, calls when entering a `with` block
- `__exit__`: Cleanup function for context managers, calls when exiting a `with` block

## Indexing

- `__getitem__`: You get an item from the object using an index
- `__setitem__`: Let's use an index to set or change an item in the object
- `__delitem__`: Lets you delete an item from the object using an index
- `__iter__`: Iterators, lets you loop over the object
- `__next__`: Next function for iterators, lets you loop over the object
- `__contains__`: Overwrites the `in` operator

## Arithmetic

| Operator | Forwards (`self ? other`) | Backwards (`other ? self`) |
| -------- | ------------------------- | -------------------------- |
| `+`      | `__add__`                 | `__radd__`                 |
| `-`      | `__sub__`                 | `__rsub__`                 |
| `*`      | `__mul__`                 | `__rmul__`                 |
| `/`      | `__truediv__`             | `__rtruediv__`             |
| `//`     | `__floordiv__`            | `__rfloordiv__`            |
| `%`      | `__mod__`                 | `__rmod__`                 |
| `**`     | `__pow__`                 | `__rpow__`                 |

## Comparison

| Comparison | Method   |
| ---------- | -------- |
| `==`       | `__eq__` |
| `!=`       | `__ne__` |
| `<`        | `__lt__` |
| `<=`       | `__le__` |
| `>`        | `__gt__` |
| `>=`       | `__ge__` |
