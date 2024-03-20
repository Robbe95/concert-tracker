// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/styles/index.css',
  ],
  devtools: { enabled: true },
  experimental: {
    typedPages: true,
  },
  i18n: {
    defaultLocale: 'nl',
    langDir: 'locales',
    locales: [
      { code: 'nl', file: 'nl.json', iso: 'nl-BE' },
      { code: 'en', file: 'en.json', iso: 'en-GB' },
    ],
    strategy: 'prefix',
  },
  modules: [
    '@nuxtjs/i18n',
  ],
  modulesDir: [
    './tasks',
  ],
  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {},
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: '', // can be overridden by NUXT_PUBLIC_API_URL environment variable
      apiClientId: '', // can be overridden by NUXT_PUBLIC_API_CLIENT_ID environment variable
      apiClientSecret: '', // can be overridden by NUXT_PUBLIC_API_CLIENT_SECRET environment variable
      apiEndpoint: '', // can be overridden by NUXT_PUBLIC_API_ENDPOINT environment variable
    },
  },
  vue: {
    propsDestructure: true,
  },
})
