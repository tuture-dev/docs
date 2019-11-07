module.exports = {
  base: '/',
  ga: 'UA-125714435-1',
  head: [
    [
      'link',
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    [
      'script',
      {
        'data-ad-client': 'ca-pub-9380061057176058',
        async: true,
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      },
    ],
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '图雀文档',
      description: '关于图雀，你所需要知道的一切',
    },
  },
  themeConfig: {
    // Generate edit links
    docsRepo: 'tuture-dev/docs',
    docsBranch: 'master',
    editLinks: true,
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          { text: '指南', link: '/guide/' },
          { text: '参考', link: '/reference/' },
          { text: '社区', link: 'https://tuture.co' },
          { text: 'GitHub', link: 'https://github.com/tuture-dev/docs' },
        ],
        sidebar: {
          '/guide/': [
            '',
            'installation',
            'start-writing',
            'sharing',
            'advanced',
          ],
          '/reference/': ['', 'cli-commands', 'tuture-yml-spec'],
        },
        lastUpdated: '上次更新于',
      },
    },
  },
};
