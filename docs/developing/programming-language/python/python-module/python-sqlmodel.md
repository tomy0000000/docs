# SQLModel

## Primary Key w/ auto increment int

```python
attr: int | None = Field(primary_key=True, default=None)
```

## Primary Key

```python
attr: str = Field(primary_key=True)
```

## Nullable

```python
attr: int | None = None
```

## Non-Nullable

```python
attr: int
```

Non-primitive data type such as `datetime` or `Enum` should explicitly assign `nullable=False`

```python
attr: datetime = Field(nullable=False)
```

## Non-Nullable with default

```python
attr: int = Field(default=0)
```

## Nullable Foreign Key

```python
ext_id: int | None = Field(foreign_key="table.column", default=None)
```

## Non-Nullable Foreign Key

```python
ext_id: int = Field(foreign_key="table.column")
```

## Non-Nullable Foreign Key with default

```
ext_id: int = Field(foreign_key="table.column", default=1)
```
