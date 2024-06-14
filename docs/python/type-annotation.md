# 🏷️ Type Annotation Guide

How to properly annotate types in Python, to make your editor and linters happy and better auto-complete while coding.

## Basic types

TODO: Refine this

- `str`
- `int`
- `float`
- `bool`
- `list`
- `tuple`
- `dict`
- `set`
- `None`
- `Any`
- `Union`
- `Optional`
- `Callable`
- `Iterable`
- `Iterator`
- `Generator`
- `Sequence`
- `Mapping`
- `Type`
- `Tuple`
- `List`
- `Dict`

## Optional parameters

- Python 3.10+: `SomeType | None`
- Python 3.9 and below: `Union[SomeType, None]`

## Class

```python
class MyClass:
    def __init__(self, name: str) -> None:
        self.name = name

    def say_hello(self, name: str) -> str:
        return f"Hello {name}"
```
