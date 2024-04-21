export default defineNuxtConfig({
  app: {
    head: {
      title: 'Farm-25'
    }
  },
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
     "@pinia-plugin-persistedstate/nuxt"
  ],
  css: [
    // Path to your CSS file
    "~/assets/css/main.css",
  ],
  
  
});
