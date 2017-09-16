const request = require('request');

var geoCodeAddress = (inputAddress, callback) => {
  var address = encodeURIComponent(inputAddress);
  var url = `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`;
  request({
  url:url,
  json:true
  }, (error, response, body)=>{
    // console.log(JSON.stringify(body, undefined, 13));
    if(error){
      callback('Unable to connect!');
    }else if(body.status === 'ZERO_RESULTS'){
      callback('No matching result');
    }else if(body.status === 'OK'){
      callback(undefined, {
        address: body.results[0].formatted_address,
        lat:body.results[0].geometry.location.lat,
        lng:body.results[0].geometry.location.lng
      });
  }
  });
}

module.exports={
  geoCodeAddress
}
