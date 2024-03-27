<template>
  <v-app>
    <v-app-bar class="header primary" fixed app flat>
      <v-container class="d-flex align-center">
        <Nuxt-Link to="/">
          <v-toolbar-title class="white--text"> Task App </v-toolbar-title>
        </Nuxt-Link>

        <v-spacer />

        <!-- <div>
				<BaseSwitchTheme />
			</div> -->
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  methods: {
    test() {
      const a = 'as'
      console.log('🚀 ~ test ~ a:', a)
    },
  },
}
</script>
