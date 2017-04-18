# pifi

Immediately invoked [pify](https://github.com/sindresorhus/pify)

## Installation

```sh
npm install --save pifi
```

## Usage

```js
const pifi = require('pifi')
const fs = require('fs')

async function main () {
  console.log('Reading readme.md in 5 seconds')
  await pifi(cb => setTimeout(cb, 5000))

  console.log('Readind readme.md now')
  const content = await pifi(cb => fs.readFile('readme.md', cb))

  console.log('readme.md contains:', content)
}
```

## API

### `pifi(fn[, promiseModule]) => Promise`

Immediately invoke `fn` with a node-style callback, and return a promise that settles when the callback is called.
