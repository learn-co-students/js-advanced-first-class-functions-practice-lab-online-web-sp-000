function logDriverNames(drivers) {
  drivers.forEach(driver => console.log(driver.name));
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(driver => {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers) {
  return [...drivers].sort((a, b) => a.revenue - b.revenue);
}

function driversByName(drivers) {
  return [...drivers].sort((a, b) => a.name.localeCompare(b.name));
}

function totalRevenue(drivers) {
  const summer = (agg, el) => agg + el.revenue;
  return drivers.reduce(summer, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length
}
