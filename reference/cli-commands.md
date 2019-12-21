# CLI 命令

以下命令假定你处在一个 Git 仓库中。如果你还没有安装 Git，请从[此处](https://git-scm.com/downloads)下载。

## init

初始化一个 Tuture 教程。

此命令会执行以下步骤：

1. 检查 Git 是否在本机安装。如果没有安装，Tuture 会停止运行并显示出错信息。

2. 检查当前所在目录是否为 Git 仓库。如果不是 Git 仓库并且没有提供 `-y` 选项，Tuture 就会询问是否确认要将当前目录初始化为 Git 仓库。如果你回答了否，Tuture 会终止运行。否则 Tuture 会执行 `git init` 命令并继续执行。

3. 询问你以下问题（如果使用了 `-y` 或 `--yes` 则不会询问）：

| 询问           | 对应字段 | 必要/可选 | 默认值             | 含义             |
| -------------- | -------- | --------- | ------------------ | ---------------- |
| Tutorial Name? | `name`   | 必要      | My Awesome Project | 此教程的标题     |
| Topics         | `topics` | 可选      | -                  | 此教程涉及的主题 |

::: tip 提示
填写 `topics` 可以用任何*非字母数字*字符将多个话题隔开，例如：`JavaScipt,React,Mobx` 或是 `Python/TensorFlow`。
:::

4. 创建存储教程所需的 **tuture.yml** 文件（详细说明请参考 [tuture.yml 规格说明](tuture-yml-spec.md)）和用于存放所需的 diff 数据 **.tuture** 目录。

5. 在你的 `.gitignore` 中添加以下规则（如果没有会为你创建）：

```
# Tuture supporting files

.tuture
```

6. 增加 Git post-commit 钩子（如果没有会为你创建），用于每次提交后触发 `tuture reload`。

### 选项

#### `-y`, `--yes`

不要询问任何问题，全部用默认值填充。

#### `--contextLines`

指定展示代码变化的上下文行数（默认为 3）。相当于 `git show` 命令中的 `--unified` 或 `-U` 参数。

#### `-h`, `--help`

显示使用方法信息。

## reload

将 Tuture 文件更新到与仓库最新状态同步。

Tuture 通过从 Git 日志中提取最新的变化来实现以下两件事：

- 添加新的提交的 diff 文件
- 在 tuture.yml 中添加新的步骤

::: tip 提示
这个命令会在每次提交后自动执行。你也可以手动运行此命令。
:::

::: warning 警告
当前工作目录应当已经用 `tuture init` 命令初始化完成。
:::

### 选项

#### `--contextLines`

指定展示代码变化的上下文行数（默认为 3）。相当于 `git show` 命令中的 `--unified` 或 `-U` 参数。

#### `-h`, `--help`

显示使用方法信息。

## up

在浏览器中渲染教程。

不管你已经用 `tuture init` 命令初始化过，还是刚刚 clone 了一个 Tuture 教程仓库，运行 `tuture up` 都已足够。

::: warning 警告
当前工作目录应当是包含 **tuture.yml** 文件的 Git 仓库。
:::

### 选项

#### `-p`, `--port`

用于打开编辑器服务器的端口。

#### `-h`, `--help`

显示使用方法信息。

## destroy

删除所有 Tuture 相关文件。

Tuture 会让你确认此次操作。如果输入真值（例如 `y`，`yes` 和 `1`），那么 **.tuture** 目录和 **tuture.yml** 就会被删除。如果输入非真值（例如 `n`，`no` 和 `0`）或者直接按回车，那么就会取消此命令的执行。

::: warning 警告
当前工作目录应当已经用 `tuture init` 命令初始化完成。
:::

### 选项

#### `-f`, `--force`

无需确认，直接强行删除。

#### `-h`, `--help`

显示使用方法信息。

## build

将教程构建成 Markdown 文档。

### 选项

#### `-o`, `--output`

输出文件的路径。

#### `--assetsPath`

Path to assets root directory. This is used for replacing paths of all image assets in the markdown document. The assets root specified will be created relative to the output file.

图片资源根目录路径。这个参数用于替换 Markdown 文档中所有图片的路径，并且指定的资源目录会被创建。

#### `--hexo`

[Hexo](https://hexo.io) 博客构建模式。 将会用 tuture.yml 中指定的元数据添加 Hexo [front-matters](https://hexo.io/docs/front-matter)。

::: warning 警告
这项功能处于**试验阶段**，并且当前仅用来构建[图雀社区](https://tuture.co)的文章。
:::

#### `-h`, `--help`

显示使用方法信息。

## help

显示任何命令的使用方法。

例如，`tuture build` 会打印所有子命令的使用方法，`tuture build <subcommand>` 会打印子命令 `<subcommand>` 的使用方法。
