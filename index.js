// Code your solution in this file!
/*
logDriversByHometown() — Receives an array of driver objects as the first argument and a location as the second argument. The function logs to the console the name attribute of each driver whose hometown matches the string passed in as the 'location' argument.
driversByRevenue() — Receives an array of driver objects and returns a new array of driver objects sorted by their revenue attribute from lowest to highest.
driversByName() — Receives an array of driver objects and returns a new array of driver objects sorted by their name attribute from A to Z. Here, you may have to use the String.prototype.localeCompare() method.
totalRevenue() — Receives an array of driver objects and returns the sum of the revenue earned by each driver.
averageRevenue() — Receives an array of driver objects and returns the average revenue earned by each driver.
 */
function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
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
  const comparator = function(a, b) {
    return a.revenue - b.revenue;
  };
  const sorted = drivers.slice(0);
  return sorted.sort(comparator);
}

function driversByName(drivers) {
  const comparator = function (a, b) {
    return a.name.localeCompare(b.name);
  };

  const sorted = drivers.slice(0);
  return sorted.sort(comparator);
}

function totalRevenue(drivers) {
  const reduceTotalRevenue = function (agg, el, i, arr) {
    return agg += el.revenue;
  }

  return drivers.reduce(reduceTotalRevenue, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
