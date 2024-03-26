export default defineNuxtConfig({
  build: {
    transpile: [
      'trpc-nuxt',
      'drizzle-orm',
    ],
  },
  components: [
    {
      path: '~/client/components',
      pathPrefix: false,
    },
    {
      path: '~/client/modules',
      pathPrefix: false,
    },
  ],
  css: [
    '~/client/assets/styles/index.css',
  ],

  devtools: { enabled: true },
  dir: {
    assets: 'client/assets',
    layouts: 'client/layouts',
    middleware: 'client/middleware',
    pages: 'client/pages',
    plugins: 'client/plugins',
    public: 'client/public',
  },
  experimental: {
    typedPages: true,
  },
  i18n: {
    defaultLocale: 'nl',
    langDir: 'client/locales',
    locales: [
      { code: 'nl', file: 'nl.json', iso: 'nl-BE' },
      { code: 'en', file: 'en.json', iso: 'en-GB' },
    ],
    strategy: 'prefix',
    vueI18n: '~/client/locales/i18n.ts',
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
