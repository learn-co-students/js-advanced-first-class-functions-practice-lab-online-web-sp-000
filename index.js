// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.forEach(function (driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  return drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers) {
  const newDrivers = drivers.slice(0, drivers.length);
  return newDrivers.sort (function(a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
  const newDrivers = drivers.slice(0, drivers.length);
  return newDrivers.sort (function(a, b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  return drivers.reduce(function (total, driver, i, arr) {
    return total + driver.revenue;
  }, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
