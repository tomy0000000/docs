# Versions

Quick index of built-in Python version in each Linux distribution and changes made in each minor Python releases.

## Linux dist Pythons

| Python | Debian        | Ubuntu          | Cent OS | Fedora | Alpine     |
| ------ | ------------- | --------------- | ------- | ------ | ---------- |
| 3.4    |               | 14.04 (trusty)  |         |        |            |
| 3.5    | 9 (stretch)   | 16.04 (xenial)  |         |        |            |
| 3.6    |               | 18.04 (bionic)  | 7       |        | 3.9        |
| 3.7    | 10 (buster)   |                 |         |        | 3.10       |
| 3.8    |               | 20.04 (focal)   |         | 32     | 3.11       |
| 3.9    | 11 (bullseye) | 21.04 (hirsute) |         | 33, 34 | 3.14, 3.15 |
| 3.10   |               | 22.04 (jammy)   |         | 35, 36 | 3.16, 3.17 |
| 3.11   | 12 (bookworm) | 23.04 (lunar)   |         | 37, 38 | 3.18       |
| 3.12   |               |                 |         | 39     |            |

## Python 3.12

## Python 3.11

- `tomllib` for loading (but not writing) TOML file/configs ([ref](https://docs.python.org/3.11/library/tomllib.html))

## Python 3.10

- SytaxError hint ([ref](https://docs.python.org/3/whatsnew/3.10.html#syntaxerrors))
- `match`, `switch` a.k.a. Structural Pattern Matching ([ref](https://docs.python.org/3/whatsnew/3.10.html#pep-634-structural-pattern-matching))
- Vertical bar (|) as type hint for `Union` ([ref](https://docs.python.org/3/whatsnew/3.10.html#pep-604-new-type-union-operator))
- `strict` in `zip()`
- `correlation()`, `covariance()`, `linear_regression()` in `statistics` ([ref](https://realpython.com/python310-new-features/#new-functions-in-the-statistics-module))
- `Counter()`'s new method: `total()` ([ref](https://docs.python.org/3.10/library/collections.html#collections.Counter.total))

## Python 3.9

## Python 3.8

- Warlus operator: `:=` ([Ref](https://docs.python.org/3.8/whatsnew/3.8.html#assignment-expressions))

## Python 3.7

- New reserved keyword: `async`, `await` ([Ref](https://docs.python.org/3.7/whatsnew/3.7.html#changes-in-python-behavior))
- `Dataclasses` ([Doc](https://docs.python.org/3.7/library/dataclasses.html#module-dataclasses))
- nano-class `time` functions ([Ref](https://docs.python.org/3.7/whatsnew/3.7.html#pep-564-new-time-functions-with-nanosecond-resolution))

## Python 3.6

- `dict` maintain insertion order by default ([Doc](https://docs.python.org/3/whatsnew/3.6.html#whatsnew36-compactdict), [Ref](https://stackoverflow.com/a/39537308/10325430))
- `pathlib` integrates with `open()` ([Ref](https://stackoverflow.com/a/42694113/10325430))
