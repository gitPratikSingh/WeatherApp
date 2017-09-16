const request = require('request');
var weatherApiCall = `https://api.darksky.net/forecast/a808595d76214c5a6f03c16a62d516ff/`


var getWeatherInfo = (lat,lng, callback)=>{
  request({
    url: `${weatherApiCall}${lat},${lng}`,
    json:true
  },(error, response, body)=>{
    if(!error && response.statusCode === 200){
      callback(undefined, body.currently.temperature);
      // console.log(JSON.stringify(body.currently.temperature, undefined, 2));
    }else{
      callback('Unable to fetch weather report');
    }
  });
}

module.exports.getWeatherInfo = getWeatherInfo;
