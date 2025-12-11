import assert from 'node:assert/strict'

// eslint-disable-next-line test/no-import-node-test
import { describe, it } from 'node:test'

import { v7 as uuidv7, validate, version } from 'uuid'

import { v7 } from './v7.ts'

await describe('@insel-null/uuid/v7', async () => {
  await it('short', () => {
    const uuids = new Set<string>()

    for (let i = 0; i < 1_000; i++) {
      const uuid = v7()
      const compareUuid = uuidv7()

      assert.strictEqual(uuid.slice(0, 12), compareUuid.slice(0, 12))
      assert.strictEqual(validate(uuid), true)
      assert.strictEqual(version(uuid), 7)

      assert.strictEqual(uuids.has(uuid), false)
      uuids.add(uuid)
    }
  })

  await it('long', () => {
    const uuids = new Set<string>()

    for (let i = 0; i < 100_000; i++) {
      const uuid = v7()

      assert.strictEqual(validate(uuid), true)
      assert.strictEqual(version(uuid), 7)

      assert.strictEqual(uuids.has(uuid), false)
      uuids.add(uuid)
    }
  })
})
