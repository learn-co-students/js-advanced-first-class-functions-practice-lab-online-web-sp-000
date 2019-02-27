const logDriverNames = function (driverArray){
  driverArray.forEach(function (driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function (driverArray, location){
  driverArray.forEach(function (driver){
    if (driver.hometown === location){
     console.log( driver.name)
   }
  });
};


const driversByRevenue = function (driverArray) {
  return driverArray.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};

const driversByName = function (driverArray) {
  return driverArray.slice().sort(function(driverOne, driverTwo){
    return driverOne.name.localeCompare(driverTwo.name);
  });
};

const totalRevenue = function (driverArray){
  return driverArray.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};


const averageRevenue = function (driverArray) {
  return totalRevenue(driverArray) / driverArray.length; 
};
