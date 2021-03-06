// 目录页配置 文档
// https://xugaoyi.github.io/vuepress-theme-vdoing-doc/pages/54651a/

module.exports = [
  { text: '主页', link: '/' },
  {
    text: '前端',
    link: '/web/',
    items: [{
      // 1、以下link的值是相应md文件定义的永久链接(不是什么特殊生成的编码);
      // 2、link的值与对应文件夹内的首个md文件中的permalink的值一致
      text: '文章范畴',
      items: [
        { text: 'Vue', link: '/web/269c41/' },
        { text: 'React', link: '/web/39e071/' },
        { text: 'JavaScript', link: '/web/24e95c/' }
      ]
    }, {
      text: '静态页面',
      items: [
        { text: 'HTML', link: '/web/c80c28/' },
        { text: 'Css&Less&Sass', link: '/web/4bfbb4/' }
      ]
    }, {
      text: '笔记专栏',
      items: [
        { text: '《React》笔记', link: '/react/' }
      ]
    }]
  },
  {
    text: '题库',
    link: '/question/',
    items: [
      { text: '编程题', link: '/question/efd07f/' },
      { text: '算法题', link: '/question/a98d32/' }
    ]
  },
  {
    text: '技巧',
    link: '/skill/',
    items: [
      { text: '技术文档', link: '/skill/2d9c8f/' }
    ]
  },
  {
    text: '其它',
    link: '/other/',
    items: [
      { text: '技术文档', link: '/other/ed0cac/' },
      { text: '友情链接', link: '/friends/' },
    ]
  },
  {
    text: '关于',
    link: '/about/',
  },
  {
    text: '收藏',
    link: '/favorites/',
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  }
]
