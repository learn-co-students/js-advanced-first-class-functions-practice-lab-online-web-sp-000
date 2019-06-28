// Code your solution in this file!
function logDriverNames(driverArr) {
  driverArr.forEach(function(driver){
    console.log(driver.name);
  });
};

function logDriversByHometown(driverArr, location) {
  driverArr.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
};

function driversByRevenue(driverArr) {
  return driverArr.sort(function(a, b){
    return a.revenue - b.revenue;
  });
};

function driversByName(driverArr) {
  return driverArr.sort(function(a, b){
    return a.localeCompare(b);
  });
};

// totalRevenue() — Receives an array of driver objects and returns the sum of the revenue earned by each driver.
// averageRevenue() — Receives an array of driver objects and returns the average revenue earned by each driver.
