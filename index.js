// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers) {
  const results = [...drivers];
  results.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
  return results;
}

function driversByName(drivers) {
  const results = [...drivers];
  results.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
  return results;
}

function totalRevenue(drivers) {
  const addRevenue = function(agg, el, i, arr) {
    return agg + el.revenue;
  }
  return drivers.reduce(addRevenue, 0);
}

function averageRevenue(drivers) {
  const findTotal = function(agg, el, i, arr) {
    return agg + el.revenue;
  }
  return drivers.reduce(findTotal, 0)/drivers.length;
}