// Code your solution in this file!
function logDriverNames(drivers) {
  const newDrivers = drivers.forEach(function(driver) {
    console.log(`${driver.name}`);
  });
}

function logDriversByHometown(drivers, town) {
  const newDrivers = drivers.filter(function(driver) { return driver.hometown === town; }).forEach(function(driver) {
    console.log(`${driver.name}`);
  })
}

function driversByRevenue(drivers) {
  const newDrivers = [...drivers].sort((a, b) => (a.revenue > b.revenue) ? 1 : -1);
  return newDrivers;
}

function driversByName(drivers) {
  const newDrivers = [...drivers].sort(function(a, b) { return a.name > b.name ? 1 : -1});
  return newDrivers;
}

function totalRevenue(drivers) {
  const totalRev = drivers
    .map(function(driver) { return driver.revenue; })
    .reduce(function(acc, currentVal) { return acc + currentVal; });
  return totalRev;
}

function averageRevenue(drivers) {
  const avgRev = totalRevenue(drivers) / drivers.length;
  return avgRev;
}
