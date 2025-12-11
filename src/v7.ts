/* eslint-disable @masknet/no-top-level */
let lastTime: number = 0
let cachedPrefix: string = ''

export const v7 = (): `${string}-${string}-${string}-${string}-${string}` => {
  const v4 = crypto.randomUUID()

  const now = Date.now()

  if (now !== lastTime) {
    lastTime = now

    const hex = now.toString(16).padStart(12, '0')

    cachedPrefix = `${hex.substring(0, 8)}-${hex.substring(8)}-7`
  }

  return cachedPrefix + v4.substring(15) as `${string}-${string}-${string}-${string}-${string}`
}
