const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
const yargs = require('yargs');

  args = yargs
  .options({
    a:{
      require:true,
      describe:'Address to fetch information for',
      string: true,
      alias: 'address'
    }
  })
  .help().argv;

geocode.geoCodeAddress(args.address, (errorMessage, result)=>{
  if(errorMessage){
    console.log(errorMessage);
  }else{
    console.log(JSON.stringify(result, undefined, 2));
    var lat = result.lat;
    var lng = result.lng;

    weather.getWeatherInfo(lat, lng, (error, result)=>{
      if(error){
        console.log('Error:', error);
      }else{
        console.log('Temp: ', result)
      }
    })
  }
});
//
// weather.getWeatherInfo(lat, lng, (error, result)=>{
//   if(error){
//     console.log('Error:', error);
//   }else{
//     console.log('Temp: ', result)
//   }
// });
