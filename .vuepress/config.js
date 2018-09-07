module.exports = {
  title: '图雀',
  description: '技术教程写作工具和分享平台',
  head: [
    [
      'link',
      { rel: 'shortcut icon', type: 'image/x-icon', href: `favicon.ico` },
    ],
  ],
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '参考', link: '/reference/' },
      { text: 'GitHub', link: 'https://github.com/tutureproject/docs' },
      { text: 'tuture.co', link: 'https://tuture.co' },
    ],
    sidebar: {
      '/guide/': ['', 'installation.zh-CN', 'start-writing.zh-CN'],
      '/reference/': ['', 'cli-commands.zh-CN', 'tuture-yml-spec.zh-CN'],
    },
  },
};
