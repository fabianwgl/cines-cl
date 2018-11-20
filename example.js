const cines = require('./src')

cines.cinemarkBillboard(511).then(console.log).catch(console.error)

console.log(cines.cinemarkCinemas)

cines.cinemarkReleasesByDate().then(console.log).catch(console.error)
