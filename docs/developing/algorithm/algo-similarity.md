# ↔️ Similarity

Different ways to measure the similarity between two objects.

## [Jaccard Similarity](https://en.wikipedia.org/wiki/Jaccard_index)

$J(A, B) = \frac{|A \cap B|}{|A \cup B|}$

Mostly used for comparing two sets or regions, such as evaluating the accuracy of a clustering algorithm or object detection.

:::warning

When used to compare two sentences, it ignores semantics.

:::

## [Cosine Similarity](https://en.wikipedia.org/wiki/Cosine_similarity)

$cos(\theta) = \frac{A \cdot B}{||A|| \cdot ||B||} = {\frac {\sum \limits _{i=1}^{n}{A_{i}B_{i}}}{{\sqrt {\sum \limits _{i=1}^{n}{A_{i}^{2}}}}\cdot {\sqrt {\sum \limits _{i=1}^{n}{B_{i}^{2}}}}}}$

Mostly used for comparing two vectors, such as evaluating the similarity of two documents with TF-IDF or word embeddings.

## [Pearson Correlation Coefficient](https://en.wikipedia.org/wiki/Pearson_correlation_coefficient)

$\rho_{A, B} = \frac{cov(A, B)}{\sigma_{A} \cdot \sigma_{B}}$

Mostly used for comparing two continuous variables, such as evaluating the correlation between two stocks or the relationship between two features.
