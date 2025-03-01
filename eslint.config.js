import config from '@altipla/eslint-config-vue-ts'

export default [
  ...config,
  {
    ignores: ['public', 'src/env.d.ts'],
  },
]
