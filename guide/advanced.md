# 进阶使用

这篇文档将介绍图雀工具的一些进阶使用技巧。

## 教程拆分

当代码提交次数变多，教程变得很长时，将其拆分为多个部分是个不错的选择。具体地，在 tuture.yml 文件中添加 `splits` 字段：

```yaml
splits:
  - name: 我的教程（一）
    description: 这是教程第一部分的描述
    start: 起始 Commit ID
    end: 终止 Commit ID
  - name: 我的教程（二）
    description: 这是教程第二部分的描述
    start: 起始 Commit ID
    end: 终止 Commit ID
```

`splits` 字段是一个数组，每个数组元素都定义个教程的一部分。其中，`name` 和 `description` 不是必需的，填写后将覆盖最外层的 `name` 和 `description` 作为此部分教程的名称和描述；`start` 和 `end` 则为必需，用来指定这一部分教程的**起始步骤**和**终止步骤**。

::: warning
终止步骤包括在这一部分的教程中。
:::

在运行 `tuture build` 构建教程时，Tuture 会将整个教程构建成多篇子教程。以上面的 `splits` 字段为例，将会在 tuture-build 目录中构建如下文档：

```
tuture-build
├── 我的教程（一）.md
└── 我的教程（二）.md
```

## 定义需要忽略的文件

在书写教程的过程中，有些文件需要被版本记录系统（Git）追踪，但是在教程中不需要讲解，例如 Node 项目中的 package-lock.json 或是 yarn.lock 文件。对于这种情形，Tuture 默认忽略以下文件：

```
# 与 Git 有关的文件
.gitignore
.gitattributes

# 与 Tuture 有关的文件
tuture.yml
.tuturerc
.tutureignore
```

用户可以在此基础上忽略更多文件。在根目录创建 .tutureignore 文件，例如

```
package-lock.json
yarn.lock
subdirectory/*.js
```

忽略文件的定义支持通配符，与 gitignore 的用法是完全一致的。

::: tip 提示
被忽略的文件只是默认不显示，仍然可以在编辑器中选择展示此文件。
:::