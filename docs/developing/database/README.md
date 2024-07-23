# 🗃️ Database

Some general ideas about databases and how to choose the right one

## 🌳 Decision Tree

```mermaid
graph LR

A{Data\nType}
A --Structured--> B(<a href="./rdbms">Relational Database</a>)
A --Partially-Structured--> C{Data\nStructure}
  C --Dictionary--> E(<a href="./key-value-db">Key-Value Database</a>)
  C --2-D Key-Value--> F(<a href="./column-db">Column Database</a>)
  C --Entity-Relationship--> G(<a href="./graph-db">Graph Database</a>)
  C --XML, JSON--> H(<a href="./document-db">Document Database</a>)
  C --Analytical--> I(<a href="./time-series-db">Time-Series Database</a>)
  C --Embedding--> J(<a href="./vector-db">Vector Database</a>)
A --Unstructured--> D(Blob Store)
```

## References

- [DB-Engines](https://db-engines.com)
- [Database of Databases](https://dbdb.io)
