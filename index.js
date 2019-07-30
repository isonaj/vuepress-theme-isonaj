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
                lengthPerPage: 20
              }
            },
            {
              id: 'draft',
              dirname: '_drafts',
              path: '/',
              itemPermalink: '/:slug'
            },
          ]
        }
      ],
      ['vuepress-plugin-reading-time'],
      ['@vuepress/search'],
      ['@vuepress/plugin-nprogress'],
      ['container', { type: 'tip' }],
      ['container', { type: 'warning' }],
      ['container', { type: 'danger' }],
    ]
  };  
}
