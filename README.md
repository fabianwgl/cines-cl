# info-rut

> Fetches billboard and releases of chilean cinemas

## Installation

```bash
npm i -S cines-cl
```

## Use

```js
const cinesCl = require('cines-cl')

const cinemaId = 511
cines.cinemarkBillboard(cinemaId).then(console.log).catch(console.error)

const date = new Date('2006-06-06')
cines.cinemarkReleasesByDate().then(console.log).catch(console.error)
cines.cinemarkReleasesByDate(date).then(console.log).catch(console.error)

```
