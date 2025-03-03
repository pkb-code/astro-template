import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  server: {
    FOO: z.string().min(1),
  },
  client: {},
  clientPrefix: 'PUBLIC_',
  runtimeEnv: import.meta.env.SSR ? Object.assign({}, import.meta.env, process.env) : import.meta.env,
  emptyStringAsUndefined: true,
  skipValidation: import.meta.env.SSR && process.env.npm_lifecycle_event === 'build',
})
