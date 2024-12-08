# Concurrency

How to choose between multiprocessing and multithreading?

| Factor            | Multiprocessing                                                                 | Multithreading                                                           |
| ----------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Task              | CPU-bound tasks                                                                 | I/O-bound tasks                                                          |
| Memory            | Higher overall memory usage                                                     | More memory-efficient                                                    |
| Communication     | <abbr title="Inter-process communication">IPC</abbr> is slower and more complex | Easier and faster                                                        |
| Synchronization   | Process isolation reduces the need for complex synchronization                  | Higher risk of deadlocks and race conditions due to shared memory access |
| Context Switching | Context switching between processes is more resource-intensive                  | Faster context switching between threads                                 |
| Fault Isolation   | Better fault isolation                                                          | More error-prone                                                         |
| Examples          | Data processing pipelines                                                       | Web servers handling multiple connections                                |
