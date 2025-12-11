# @insel-null/uuid

A simple, fast UUID implementation.

## Usage

###### v7

```ts
import { v7 } from '@insel-null/uuid'
// import { v7 } from '@insel-null/uuid/v7'
// import uuid from '@insel-null/uuid'

const uuid: `${string}-${string}-${string}-${string}-${string}` = v7() // uuid.v7()
```

###### v4

```ts
import { v4 } from '@insel-null/uuid'
// import { v4 } from '@insel-null/uuid/v4'
// import uuid from '@insel-null/uuid'

const uuid: `${string}-${string}-${string}-${string}-${string}` = v4() // uuid.v4()
```

> `v4` is an alias for `crypto.randomUUID`.

## Benchmark

```bash
pnpm bench
```

```
benchmark                   avg (min … max) p75 / p99    (min … top 1%)
------------------------------------------- -------------------------------
@insel-null/uuid/v7          207.98 ns/iter 209.22 ns ▃█▂
                    (186.45 ns … 499.22 ns) 349.72 ns ███▃
                    (354.51  b …   1.11 kb) 721.00  b ████▆▃▂▁▁▁▁▁▁▁▁▂▁▁▁▁▁

uuid                         287.86 ns/iter 292.96 ns █▃
                    (248.70 ns … 643.33 ns) 595.99 ns ███
                    (888.95  b …   1.49 kb)   1.01 kb ████▄▃▃▂▂▂▂▁▁▁▂▁▁▁▁▁▁

uuidv7                       422.08 ns/iter 303.00 ns █
                    (216.00 ns … 278.23 µs)   1.70 µs █
                    (  1.24 kb … 354.52 kb)   1.71 kb ██▃▂▁▁▁▁▁▁▁▁▁▂▄▂▁▁▁▁▁

crypto.randomUUID            103.41 ns/iter 102.44 ns  ▃█
                     (83.06 ns … 355.95 ns) 224.91 ns  ██
                    ( 89.73  b … 942.01  b) 441.07  b ▇███▄▂▂▂▂▂▂▁▁▁▁▁▁▁▁▁▁

summary
  crypto.randomUUID
   2.01x faster than @insel-null/uuid/v7
   2.78x faster than uuid
   4.08x faster than uuidv7
```

## License

[MIT](LICENSE.md)
