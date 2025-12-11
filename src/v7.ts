/* eslint-disable @masknet/no-top-level */
let lastTime: number = 0
let cachedPrefix: string = ''

export const v7 = (): `${string}-${string}-${string}-${string}-${string}` => {
  const now = Date.now()

  if (now !== lastTime) {
    lastTime = now

    const hex = now.toString(16)

    cachedPrefix = `0${hex.slice(0, 7)}-${hex.slice(7)}-7`
  }

  const v4 = crypto.randomUUID()

  return cachedPrefix + v4.slice(15) as `${string}-${string}-${string}-${string}-${string}`
}
