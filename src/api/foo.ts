import { procedure, router } from '~/trpc'

export const foo = router({
  hello: procedure.query(async () => {
    let now = new Date()
    if ((now.getSeconds() * Math.floor(Math.random() * 10)) % 2 !== 0) {
      throw new Error('Forced Error for test.')
    }
    let messages = ['I am foo', 'I am foo too', 'I am another foo', 'I will be always foo']
    return { message: messages[Math.floor(Math.random() * messages.length)] }
  }),
})
