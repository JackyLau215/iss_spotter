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

const printPassTimes = function(passes) {
  for (const pass of passes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

