const request = require('request');

const forecast = (latitude, logitude, callback) => {
    const url = 'https://api.darksky.net/forecast/6648ca123e7649088918094a893043a1/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(logitude);

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather services.', undefined);
        } else if(body.error) {
            callback(undefined, 'Unable to find location.');
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`);
        }
    });
};

module.exports = forecast;