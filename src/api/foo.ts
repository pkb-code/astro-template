import { procedure, router } from '~/trpc'

export const foo = router({
  hello: procedure.query(async () => {
    return { message: 'I am foo!' }
  }),
})
