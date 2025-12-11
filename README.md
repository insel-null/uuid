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

## License

[MIT](LICENSE.md)
