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
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', next: 'return', prev: '*' },
        { blankLine: 'always', next: 'expression', prev: '*' },
        { blankLine: 'always', next: '*', prev: 'expression' },
        { blankLine: 'any', next: 'expression', prev: 'expression' },

        { blankLine: 'always', next: 'function', prev: '*' },
        { blankLine: 'always', next: '*', prev: 'function' },
        { blankLine: 'always', next: '*', prev: [
          'const',
          'let',
          'var',
        ] },
        { blankLine: 'any', next: [
          'const',
          'let',
          'var',
        ], prev: [
          'const',
          'let',
          'var',
        ] },
      ],
      'putout/add-newline-after-function-call': 'off',
      'putout/add-newline-before-function-call': 'off',
      'putout/add-newline-before-return': 'off',
      'vue/no-undef-components': 'off',
    },
  },
]
