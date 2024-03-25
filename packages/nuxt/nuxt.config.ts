export default defineNuxtConfig({
  build: {
    transpile: [
      'trpc-nuxt',
      'drizzle-orm',
    ],
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
    {
      path: '~/modules',
      pathPrefix: false,
    },

  ],
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
    vueI18n: '~/locales/i18n.ts',
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
    dbUrl: import.meta.env.NUXT_RUNTIME_DB_URL,
    public: {
      supabaseKey: import.meta.env.NUXT_RUNTIME_SUPABASE_KEY,
      supabaseUrl: import.meta.env.NUXT_RUNTIME_SUPABASE_URL,
    },
    spotifyClientId: import.meta.env.NUXT_RUNTIME_SPOTIFY_CLIENT_ID,
    spotifyClientSecret: import.meta.env.NUXT_RUNTIME_SPOTIFY_CLIENT_SECRET,
  },
  vue: {
    propsDestructure: true,
  },
})
