import { bench, run, summary } from 'mitata'
import { v7 as uuid_v7 } from 'uuid'
import { uuidv7 } from 'uuidv7'

import { v7 as insel_null_v7 } from './v7.ts'

summary(() => {
  bench('@insel-null/uuid/v7', () => insel_null_v7())
  bench('uuid', () => uuid_v7())
  bench('uuidv7', () => uuidv7())
  bench('crypto.randomUUID', () => crypto.randomUUID())
})

await run()
