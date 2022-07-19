export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr:false,
  target: 'static',
  head: {
    title: "Yusuke Nakagawa's Portfolio",
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '中川雄介のポートフォリオサイト' },
      { hid: 'og:site_name', property: 'og:site_name', content: "Yusuke Nakagawa's Portfolio" },
      { hid: 'og:url', property: 'og:url', content: 'https://yusukesportfolio.web.app' },  //絶対パスで指定
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: 'https://yusukesportfolio.web.app/img/ogp.png' },  //絶対パスで指定
      { hid: 'og:title', property: 'og:title', content: "Yusuke Nakagawa' Portfolio" },
      { hid: 'og:description', property: 'og:description', content: '中川雄介のポートフォリオサイト' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/ress.css',
    '@/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vue-carousel', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/google-gtag',
    'bootstrap-vue/nuxt',
  ],
  'google-gtag': {
    id: 'G-3DT09QMKD8',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
