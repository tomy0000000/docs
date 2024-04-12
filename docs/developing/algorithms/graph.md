---
sidebar_position: 4
---

# Graph

## Traverse

| Algorithm | Time Complexity                    | Space Complexity   | Notes                   |
| --------- | ---------------------------------- | ------------------ | ----------------------- |
| DFS       | $O(\vert V \vert + \vert E \vert)$ | $O(\vert V \vert)$ | Use stack for iteration |
| BFS       | $O(\vert V \vert + \vert E \vert)$ | $O(\vert V \vert)$ | Use queue for iteration |

## Shortest Path

- **Dijkstra**: Weighted BFS + Priority Queue iteration
  - Sparse graph, use Adjacency List: $O(\vert V \vert + \vert E \vert)$
  - Dense graph, use Adjacency Matrix: $O(\vert V \vert ^ 2)$
- **Bellman-Ford**: Based on Dijkstra, but checks all edges for each iteration
- **Floyd-Warshall**: Bottom-up DP to calculate shortest distances between all pairs

| Algorithm      | Time Complexity                                       | Space Complexity       | Pros      | Cons                                    |
| -------------- | ----------------------------------------------------- | ---------------------- | --------- | --------------------------------------- |
| Dijkstra       | $O(\vert E \vert + \vert V \vert \log \vert V \vert)$ | See above              | Intuitive | No negative cycle detection             |
| Bellman-Ford   | $O(\vert V \vert \vert E \vert)$                      | $O(\vert V \vert)$     | Robust    | Slow                                    |
| Floyd-Warshall | $O(\vert V \vert ^ 3)$                                | $O(\vert V \vert ^ 2)$ | Fast      | Need additional steps to construct path |

:::info

**Bellman-Ford** and **Floyd-Warshall** can handle negative weights and detect negative cycles, while **Dijkstra** can not.

:::

## Minimum Spanning Tree

- **Borůvka's**: Greedy algorithm, select the cheapest edge for each component
- **Prim**: Greedy algorithm, select the cheapest edge that connects exactly one old vertex and one new vertex
  - Sparse graph, use Adjacency List
    - with binary heap: $O(\vert E \vert \log \vert V \vert)$
    - with Fibonacci heap: $O(\vert E \vert + \vert V \vert \log \vert V \vert)$
  - Dense graph, use Adjacency Matrix: $O(\vert V \vert ^ 2)$
- **Kruskal**: Greedy algorithm, select the cheapest edge that connects at least one new vertex

| Algorithm | Time Complexity                       |
| --------- | ------------------------------------- |
| Borůvka's | $O(\vert E \vert \log \vert V \vert)$ |
| Prim      | See above                             |
| Kruskal   | $O(\vert E \vert \log \vert V \vert)$ |

:::tip

See optimization for special cases on [Wikipedia](https://en.wikipedia.org/wiki/Minimum_spanning_tree#Linear-time_algorithms_in_special_cases)

:::
