function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (location === driver.hometown) {
      console.log(driver.name);
    }
  })
}

function driversByRevenue(drivers) {
  // non-destructively sort array of driver objects by revenue in ascending order
  return drivers.slice().sort(function(a, b) {
    return a.revenue - b.revenue;
  })
}

function driversByName(drivers) {
  // sort array of driver objects alphabetically
  return drivers.slice().sort(function(a, b) {
    return a.name.localeCompare(b.name);
  })
  // long solution:
  // return drivers.slice().sort(function(a, b) {
  //   const driverA = a.name.toUpperCase();
  //   const driverB = b.name.toUpperCase();
  //   return (driverA < driverB) ? -1 : (driverA > driverB) ? 1 : 0;
  // })
}

function totalRevenue(drivers) {
  // a = 0, c = 3000 => 3000
  // a = 3000, c = 2000 => 5000
  // a = 5000, c = 2500 => 7500
  // a = 7500, c = 6000 => 13500
  // a = 13500, c = 5000 => 18500
  return drivers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.revenue;
  }, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}



// Code your solution in this file!
