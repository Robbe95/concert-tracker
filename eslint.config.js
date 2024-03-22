import path from 'node:path'
import { fileURLToPath } from 'node:url'

import WisemenEslintConfig from '@wisemen/eslint-config-vue'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default [
  ...(await WisemenEslintConfig),
  {
    settings: {
      tailwindcss: {
        config: path.join(__dirname, './packages/nuxt/tailwind.config.ts'),
      },
    },
  },
  {
    rules: {
      'vue/no-undef-components': 'off',
    },
  },
]
