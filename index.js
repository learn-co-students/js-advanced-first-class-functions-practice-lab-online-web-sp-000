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
  return driverArr.slice().sort(function(a, b){
    return a.revenue - b.revenue;
  });
};

function driversByName(driverArr) {
  return driverArr.slice().sort(function(a, b){
    return a.name.localeCompare(b.name);
  });
};


function totalRevenue(driverArr) {
  return driverArr.reduce(function(sum, d) {
    return sum += d.revenue;
  }, 0);
};

function averageRevenue (driverArr) {
  return driverArr.reduce(function(sum, d){return sum += d.revenue;},0) / driverArr.length;
};
