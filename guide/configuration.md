# 配置

Tuture 使用 [rc](https://www.npmjs.com/package/rc) 来进行系统的配置。这篇文档将阐述配置文件的格式（及具体配置项），以及配置生效的优先级。

## 配置文件格式

配置文件格式为 JSON。样例配置文件的内容如下（包括全部可配置项）：

```json
{
  // 资源文件的存储目录
  "assetsRoot": "tuture-assets",

  // 构建教程的输出目录
  "buildPath": "tuture-build",

  // 编辑器服务器端口
  "port": 3000
}
```

## 配置生效优先级

配置文件可存放在以下地方：

- 教程根目录：.tuturerc
- 用户级主目录：~/.tuturerc
- 用户级配置目录：~/.config/tuturerc
- 系统主目录：/etc/tuturerc

从上到下，配置的优先级依次降低。也就是说，教程根目录中的配置文件会覆盖下面所有配置。