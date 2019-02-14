// Code your solution in this file!
function logDriverNames(drivers) {
  /* Solution 1 using forEach
  drivers.forEach(function(element, i, array) {
    console.log(`${element.name}`);
  })
  */

  /* Solution 2 using for of */
  for(const driver of drivers) {
    console.log(`${driver.name}`);
  }
}

function logDriversByHometown(drivers, location) {
  for(const driver of drivers) {
    if(driver.hometown === location) {
      console.log(driver.name);
    }
  }
}

function driversByRevenue(drivers) {
  sortedDrivers = drivers.slice();
  return sortedDrivers.sort(function(a,b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
  sortedDrivers = drivers.slice();
  return sortedDrivers.sort(function(a,b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  const sumRevenue = function (agg, el, i, arr) {
    agg += el.revenue;
    return agg;
  };
  return drivers.reduce(sumRevenue, 0);
}

function averageRevenue(drivers) {
  const averageRevenue = function (agg, el, i, arr) {
    agg += el.revenue;
    if (i === arr.length - 1) { //last element return average
      return agg/(i+1);
    } else {
      return agg;
    }
  };
  return drivers.reduce(averageRevenue, 0);
}
