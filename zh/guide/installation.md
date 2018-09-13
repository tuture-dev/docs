# 安装

## Git

图雀基于 Git 仓库进行教程写作，因此首先要确保 Git 安装成功。如果没有安装过，请访问 [git-scm.com](https://git-scm.com/downloads) 下载。安装完成后，在终端（控制台）中运行以下命令以确认安装成功：

```bash
$ git version
```

如果能够成功显示版本信息，则说明已安装成功！

## Node.js

图雀写作工具的运行需要 Node 环境（以及 npm 包管理器），可访问 [nodejs.org](https://nodejs.org) 进行下载并安装。

::: warning 警告
请确保下载并安装的 Node 版本不小于 8.0.0！
:::

同样地，输入以下命令以确保安装成功：

```bash
$ node -v
$ npm -v
```

## tuture 和 tuture-cli

最后，我们全局安装 tuture 和 tuture-cli 这两个 npm 包：

```bash
$ npm i -g tuture tuture-cli
```

::: tip 提示
你可能需要 `sudo`（对于 Windows 用户来说是管理员身份）来全局安装 npm 包。
:::

如果你偏爱 [yarn](https://yarnpkg.com) 安装：

```bash
$ yarn global add tuture tuture-cli
```

## 从源代码安装

如果你想要体验最新的功能或是想要为 tuture 和 tuture-cli 贡献源代码，那么推荐从源代码安装。首先请访问 [tuture](https://github.com/tutureproject/tuture) 以及 [tuture-cli](https://github.com/tutureproject/cli) 的 GitHub 仓库并 clone 到本地，进入仓库后进行安装：

```bash
$ npm i -g
```
