module.exports = {
  head: [
    [
      'link',
      { rel: 'shortcut icon', type: 'image/x-icon', href: `favicon.ico` },
    ],
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Tuture',
      description:
        'Toolchain and platform for writing and sharing tech tutorials',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '图雀',
      description: '技术教程写作工具和分享平台',
    },
  },
  themeConfig: {
    // Generate edit links
    docsRepo: 'tutureproject/docs',
    docsBranch: 'master',
    editLinks: true,
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'Reference', link: '/reference/' },
          { text: 'GitHub', link: 'https://github.com/tutureproject/docs' },
        ],
        sidebar: {
          '/guide/': ['', 'installation', 'start-writing'],
          '/reference/': ['', 'cli-commands', 'tuture-yml-spec'],
        },
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          { text: '指南', link: '/zh/guide/' },
          { text: '参考', link: '/zh/reference/' },
          { text: 'GitHub', link: 'https://github.com/tutureproject/docs' },
        ],
        sidebar: {
          '/zh/guide/': ['', 'installation', 'start-writing'],
          '/zh/reference/': ['', 'cli-commands', 'tuture-yml-spec'],
        },
      },
    },
  },
};
