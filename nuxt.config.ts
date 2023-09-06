// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        // Include Google Fonts Material Icons CDN
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0' },
        // ...other link tags
      ],
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image',],
  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
  // vuefire: {
  //   config: {
  //     apiKey: "AIzaSyB2hVj9ScWa8sUTzAn6Qmcd1ffuHdTe_ZY",
  //     authDomain: "maomi-75c3e.firebaseapp.com",
  //     projectId: "maomi-75c3e",
  //     storageBucket: "maomi-75c3e.appspot.com",
  //     messagingSenderId: "515954880006",
  //     appId: "1:515954880006:web:756ae2d6109668019d9d87"
  //   },
  //   auth: true,
  // }
})
