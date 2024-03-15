# MapReduce & Spark

## MapReduce

|                         | MapReduce 1.0                            | MapReduce 2.0 (YARN)                                        |
| ----------------------- | ---------------------------------------- | ----------------------------------------------------------- |
| Programming Model       | MapReduce                                | Multiple programming model support (e.g., MPI)              |
| Resource Management     | `JobTracker`                             | Resource Manager (RM)                                       |
| Application Parallelism | One application at a time                | Multiple applications running in parallel                   |
| Resource Allocation     | Slot, static for map or reduce at a time | Container, dynamically created and allotted to applications |

## Hadoop vs Spark

|                 | Apache Hadoop    | Apache Spark                |
| --------------- | ---------------- | --------------------------- |
| Compute Storage | Disk-based       | In-memory                   |
| Fault Tolerance | HDFS replication | RDD lineage                 |
| Data Processing | Batch processing | Batch, Real-time processing |
| Languages       | Primarily Java   | Java, Scala, Python, R      |
| Ecosystem       | Hive, Pig, HBase | Spark SQL, Spark Streaming  |
