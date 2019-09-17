// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function (driver) {
    console.log(driver.name)
  });
}

function logDriversByHometown(drivers, loc){
  drivers.forEach(function(driver){
    if (driver.hometown === loc){
      console.log(driver.name)
    }
  });
}

function driversByRevenue(drivers){
  const sortedDrivers = [...drivers];
  return sortedDrivers.sort(function(driver1, driver2){
    return driver1.revenue - driver2.revenue;
  });
}

function driversByName(drivers){
  const sortedDrivers = [...drivers];
  return sortedDrivers.sort(function(driver1, driver2){
    return driver1.name.localeCompare(driver2.name);
  });
}

function totalRevenue(drivers){
  return drivers.reduce(function(agg, el, i){
    return agg + el.revenue;
  }, 0);
}

function averageRevenue(drivers){
  const sum = totalRevenue(drivers);
  return sum / drivers.length;
}