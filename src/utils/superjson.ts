import { Temporal } from 'temporal-polyfill'
import superjson from 'superjson'

superjson.registerCustom<Temporal.PlainDate, string>(
  {
    isApplicable: (v): v is Temporal.PlainDate => v instanceof Temporal.PlainDate,
    serialize: (v) => v.toJSON(),
    deserialize: (v) => Temporal.PlainDate.from(v),
  },
  'Temporal.PlainDate',
)

superjson.registerCustom<Temporal.Instant, string>(
  {
    isApplicable: (v): v is Temporal.Instant => v instanceof Temporal.Instant,
    serialize: (v) => v.toJSON(),
    deserialize: (v) => Temporal.Instant.from(v),
  },
  'Temporal.Instant',
)
