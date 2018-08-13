module.exports = {
  title: "Tuture",
  description: "Just playing around",
  head: [
    [
      "link",
      { rel: "shortcut icon", type: "image/x-icon", href: `favicon.ico` }
    ]
  ],
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: "文档", link: "/" },
      { text: "GitHub", link: "https://github.com/tutureproject/docs" }
    ],
    // 为以下路由添加侧边栏
    sidebar: [
      "/",
      "/usage/getting-started.zh-CN.md",
      "/usage/cli-commands.zh-CN.md",
      "/usage/tuture-yml-spec.zh-CN.md"
    ]
  }
};
