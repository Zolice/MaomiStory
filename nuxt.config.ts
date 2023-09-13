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
  runtimeConfig: {
    apiSecret: "123",
    public: {
      apiKey: process.env.API_KEY || "apikey",
      authDomain: process.env.AUTH_DOMAIN || "apikey",
      projectId: process.env.PROJECT_ID || "apikey",
      storageBucket: process.env.STORAGE_BUCKET || "apikey",
      messagingSenderId: process.env.MESSAGING_SENDER_ID || "apikey",
      appId: process.env.APP_ID || "apikey",
    }
  }
})
