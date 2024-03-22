export default defineNuxtConfig({
  build: {
    transpile: [
      'trpc-nuxt',
      'drizzle-orm',
    ],
  },
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
    dbUrl: import.meta.env.NUXT_RUNTIME_DB_URL, // can be overridden by NUXT_RUNTIME_DB_URL environment variable
    public: {
      supabaseKey: import.meta.env.NUXT_RUNTIME_SUPABASE_KEY,
      supabaseUrl: import.meta.env.NUXT_RUNTIME_SUPABASE_URL,
    },
  },
  vue: {
    propsDestructure: true,
  },
})
