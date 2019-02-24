// Code your solution in this file!
function logDriverNames(drivers) {
  for (let driver of drivers) {
    console.log(driver.name);
  }
} 

function logDriversByHometown(drivers, location) {
  for (let driver of drivers) {
    if (driver.hometown === location)
    console.log(driver.name);
  }
}

function driversByRevenue(drivers) {
  results = [...drivers];
  results.sort( function (a, b) {
    return a.revenue - b.revenue;
  })
  return results;
}

function driversByName(drivers) {
  results = [...drivers];
  results.sort( function (a, b) {
    return a.name.localeCompare(b.name);
  })
  return results; 
}

function totalRevenue(drivers) {
  return drivers.reduce( function (agg, el, i, arr) {
    return agg + el.revenue;
  }, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}