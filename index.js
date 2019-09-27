const { fetchMyIP } = require('./iss');
const { fetchCoordsByIp  } = require('./iss');
const { fetchISSFlyOverTimes  } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');


fetchMyIP((error, ip) => {
  fetchCoordsByIp (ip, (error, coords) => {
    fetchISSFlyOverTimes (coords, (error, passes) => {
      nextISSTimesForMyLocation((error, passTimes) => {
        if (error) {
          return console.log("It didn't work!", error);
        }
        // success, print out the deets!
        console.log(passTimes);
      });
    });
  });
});



