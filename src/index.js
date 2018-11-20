const https = require('https')
const datefns = require('date-fns')


//  TODO: Cinehoyts

//  Cinemark cinemas ids
//  TODO: other cinemas
module.exports.cinemarkCinemas = [
	{
		id: '511',
		name: 'Alto las condes',
	},
	{
		id: '572',
		name: 'Mall plaza norte',
	},
	{
		id: '513',
		name: 'Mall plaza oeste',
	},
	{
		id: '519',
		name: 'Mall plaza Tobalaba',
	},
	{
		id: '511',
		name: 'Mall plaza Vespucio',
	},
	{
		id: '2307',
		name: 'Mall Maipú',
	},
	{
		id: '2300',
		name: 'Portal Ñuñoa',
	},
]

//  Cinermark billboard
module.exports.cinemarkBillboard = (cinemaId) => {
  return new Promise((resolve, reject) => {
    if (cinemaId) {
      const options = {
        hostname: 'api.cinemark.cl',
        path: `/api/vista/data/billboard?cinema_id=${cinemaId}`,
        method: 'GET'
      }

      const req = https.request(options, (res) => {
        let rawData = ''
        res.on('data', (chunk) => {
          rawData += chunk
        })
        res.on('end', () => {
          try {
            resolve(JSON.parse(rawData))
          } catch (err) {
            reject (err)
          }
        })
      })

      req.on('error', (err) => reject(err));
      req.end()
    } else {
      reject('Cinemark billboard requires cinema id')
    }
  })
}


//  Cinemark's next releases by date (can fetch old data)
module.exports.cinemarkReleasesByDate = (date = null) => {
  return new Promise((resolve, reject) => {
    date = !date ? datefns.format(new Date(), 'YYYY-MM-DD') : date

    const options = {
      hostname: 'api.cinemark.cl',
      path: `/api/vista/data/releases?date=${date}`,
      method: 'GET'
    }

    const req = https.request(options, (res) => {
      let rawData = ''
      res.on('data', (chunk) => {
        rawData += chunk
      })
      res.on('end', () => {
        try {
          resolve(JSON.parse(rawData))
        } catch (err) {
          reject (err)
        }
      })
    })

    req.on('error', (err) => reject(err));
    req.end()
  })
}
