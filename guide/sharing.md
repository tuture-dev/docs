# 分享教程

完成一篇教程仅仅只是开始。这篇文档将详细地介绍如何分享教程，让你的文字被更多的人发现。

## 分享到图雀社区

[图雀社区](https://tuture.co)是我们提供的专门用于发表和交流用图雀工具创作的教程的平台。只需按照以下步骤，即可向我们投稿：

1. 将教程仓库上传到 GitHub

2. Fork 图雀社区的仓库，并 clone 到本地:

```bash
$ git clone --recurse-submodules https://github.com/<username>/hub.git
```

其中 `<username>` 代表的是你的 GitHub 用户名。

3. 进入 hub 仓库，并将你的教程仓库作为 Git 子模块添加到本仓库的 tutorials 目录中：

```bash
$ cd hub
$ git submodule add <repo_git_url> tutorials/<repo_name>
```

`<repo_git_url>` 是你仓库的 Git URL，`<repo_name>` 则是仓库的名称。

:::tip 提示
可以在本地运行并查看效果：

```bash
$ npm install
$ npm run build:tutorials
$ npm start
```

:::

4. 提交修改并上传：

```bash
$ git add .
$ git commit -m "添加 XXX 教程"
$ git push
```

5. 发起 Pull Request！如果通过我们的评审，这篇教程将被合并进主分支，并部署到图雀社区的网站！

:::tip 提示
如果不了解如何发起 Pull Request，可以阅读我们发表的[这篇文章](https://www.jianshu.com/p/ac33f0295629)。
:::

6. 教程成功发布到图雀社区后，后面如果想要更新教程内容，只需上传并推送到你的教程 GitHub 仓库 master 分支即可，我们在部署中会抓取您最新版本的教程。

## 分享到其他平台

图雀工具可以很方便地将你的教程构建成 Markdown 文档。只需运行一行命令：

```bash
$ tuture build
```

教程的 Markdown 文档即可输出到 tuture-build 子目录中，然后就可以上传到您的个人博客或是写作平台分享了！

### 涉及有图片资源的情形

如果您的教程中有图片资源，图雀会将默认的图片文件夹（即 tuture-assets）整个复制到构建的 Markdown 文档同一目录下。如果您想要自定义的路径前缀，build 命令提供了一个参数 `--assetsPath` 用于替换所有图片资源的路径前缀，并且所有图片会放入到这个路径里面。

例如，原先教程中图片的 Markdown 代码可能是 `![](tuture-assets/img.png)，那么通过运行以下命令：

```bash
$ tuture build --assetsPath=images
```

对应的图片代码就会替换成 `![](images/img.png)`。
