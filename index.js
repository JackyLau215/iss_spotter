const { fetchMyIP } = require('./iss');
const { fetchCoordsByIp  } = require('./iss');
const { fetchISSFlyOverTimes  } = require('./iss');



fetchMyIP((error, ip) => {
  fetchCoordsByIp (ip, (error, coords) => {
    fetchISSFlyOverTimes (coords, (error, passes) => {
      if (error) {
        console.log("It didn't work!", error);
        return;
      }
      console.log(passes);
    });
  });
});



