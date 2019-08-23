// Code your solution in this file!
function logDriverNames(driverObjs) {
  driverObjs.forEach(function(driver) {
    console.log(driver.name);
  })
}

function logDriversByHometown(driverObjs, location) {
  driverObjs.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  })
}

function driversByRevenue(driverObjs) {
  const driversCopy = driverObjs.slice();
  return driversCopy.sort(function(d1, d2) {
    return d1.revenue - d2.revenue;
  })
}

function driversByName(driverObjs) {
  const driversCopy = driverObjs.slice();
  return driversCopy.sort(function(d1, d2) {
    return d1.name.localeCompare(d2.name);
  })
}

function totalRevenue(driverObjs) {
  return driverObjs.reduce(function(agg, el) {
    return el.revenue + agg;
  }, 0)
}

function averageRevenue(driverObjs) {
  return totalRevenue(driverObjs)/driverObjs.length;
}

