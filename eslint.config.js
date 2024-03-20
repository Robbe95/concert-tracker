import WisemenEslintConfig from '@wisemen/eslint-config-vue'

export default [
  ...(await WisemenEslintConfig),
  {
    rules: {
      'vue/no-undef-components': 'off',
    },
  },
]
