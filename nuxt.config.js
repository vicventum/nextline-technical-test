import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // env: {
  //   API_URL: 'https://ecsdevapi.nextline.mx/vdev/tasks-challenge',
  //   TOKEN_API:
  //     'e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd',
  // },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    TOKEN_API: process.env.TOKEN_API,
  },
  
  privateRuntimeConfig: {
    API_URL: process.env.API_URL,
    TOKEN_API: process.env.TOKEN_API,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Task App',
    title: 'Task App',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/axios-port.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    path: '~/components',
    extensions: ['vue'],
    prefix: 'app',
    pathPrefix: false,
    ignore: ['~components/pages', '**/_**'],
  },
  // components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'https://ecsdevapi.nextline.mx/vdev/tasks-challenge',
		// browserBaseURL: 'https://ecsdevapi.nextline.mx/vdev/tasks-challenge',
    // headers: {
    //   Authorization: 'Bearer e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd',
    // },
    baseURL: process.env.API_URL,
		browserBaseURL: process.env.API_URL,
    headers: {
      Authorization: process.env.TOKEN_API,
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/scss/config/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      options: {
        customProperties: true,
      },
      themes: {
        light: {
          primary: colors.teal,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          background: '#F4F6F8',
          dark: '#121721',
          light: '#FAFAFA',
        },
        dark: {
          primary: colors.teal.darken1,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          background: '#121721',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

	loading: { color: '#80CBC', height: '4px', continuous: false },

  transition: {
		name: 'pages',
		mode: 'out-in',
	},
}
