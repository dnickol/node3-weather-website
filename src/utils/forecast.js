const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/db7e5389ee094efb8069479550cd5c9f/' + lat + ',' + long
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, 
                body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees. There is a ' + body.daily.data[0].precipProbability * 100 + '% chance of precipitation. The high will be ' + body.daily.data[0].temperatureHigh+ ' degrees. The low will be ' + body.daily.data[0].temperatureLow + ' degrees.'
            )
        }
    })
}

module.exports = forecast