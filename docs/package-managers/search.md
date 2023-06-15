---
sidebar_position: 2
---

# Search

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

Finding an installable.

<Tabs groupId="package-manager">
<TabItem value="apt" label="apt">

```shell
apt search _
```

</TabItem>
<TabItem value="brew" label="🍺 Homebrew">

```shell
brew search _
```

</TabItem>
<TabItem value="pip" label="🐍 Python">

```shell
pip search _
```

:::caution

[PyPI no longer supports 'pip search' (or XML-RPC search)](https://warehouse.pypa.io/api-reference/xml-rpc.html#deprecated-methods)

:::

</TabItem>
<TabItem value="npm" label="npm">

```shell
npm search _
```

</TabItem>
<TabItem value="gem" label="💎 Ruby">

```shell
gem search _
```

</TabItem>
</Tabs>
