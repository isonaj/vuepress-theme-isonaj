module.exports = (options, ctx) => {
  return {
    plugins: [
      [
        '@vuepress/plugin-blog',
        {
          directories: [
            {
              id: 'post',
              dirname: '_posts',
              path: '/',
              itemPermalink: '/:slug',
              pagination: {
                lengthPerPage: 10
              },
              layout: 'PostList',
              itemLayout: 'Post'
            },
            {
              id: 'draft',
              dirname: '_drafts',
              path: '/drafts/',
              itemPermalink: '/:slug',
              layout: 'PostList',
              itemLayout: 'Draft'
            },
          ]
        }
      ],
      ['vuepress-plugin-reading-time'],
      ['@vuepress/search'],
      ['@vuepress/plugin-nprogress'],
      ['vuepress-plugin-disqus'],
      ['container', { type: 'tip' }],
      ['container', { type: 'warning' }],
      ['container', { type: 'danger' }],
      ['feed', options.feed],
    ]
  };  
}
