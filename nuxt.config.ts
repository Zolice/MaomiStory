// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-vuefire',],
  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
  vuefire: {
    config: {
      apiKey: "AIzaSyB2hVj9ScWa8sUTzAn6Qmcd1ffuHdTe_ZY",
      authDomain: "maomi-75c3e.firebaseapp.com",
      projectId: "maomi-75c3e",
      storageBucket: "maomi-75c3e.appspot.com",
      messagingSenderId: "515954880006",
      appId: "1:515954880006:web:756ae2d6109668019d9d87"
    },
    auth: true,
  }
})
