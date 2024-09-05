// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts", "@pinia/nuxt"],
  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 700, 900],
    },
  },
  runtimeConfig: {
    public: {
      weatherApiKey: "YOUR-API-KEY",
    },
  },
});
