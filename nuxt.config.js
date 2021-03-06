module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'pmpweb1000',
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: 'Nuxt.js project'
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  vender: [
    'element-ui',
    'axios'
  ],
  babel: {
    'plugins': [
      ['component', [{
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-default'
      },
      'transform-async-to-generator',
      'transform-runtime'
      ]]
    ],
    comments: true
  },
  plugins: [{
    src: '~plugins/element-ui',
    ssr: true
  }],
  css: [
    // 全部引用的时候需要用到
    'element-ui/lib/theme-chalk/index.css'
  ]
}
