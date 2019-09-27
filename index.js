const { fetchMyIP } = require('./iss');

fetchMyIP((error, ip) => {
  fetchCoordsByIp (ip, (error, coords) => {
    if (error) {
      console.log("It didn't work! Error: Status Code 400 when fetching Coordinates for IP: {'status': 'error','errors':[{'code':'400.2','message':'Second parameter is incorrect','numberErrors':1}]}", error);
      return;
    }
    console.log(coords.latitude, coords.longitude);
  });
});


const { fetchCoordsByIp  } = require('./iss');

