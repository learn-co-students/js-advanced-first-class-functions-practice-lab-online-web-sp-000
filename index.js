// Code your solution in this file!
function logDriverNames(driver) {
  const callback = function (el, i, arr) {
    console.log(el.name);
  };
  driver.forEach(callback);
};

function logDriversByHometown(driver, location) {
  const callback = function (el, i, arr) {
    if (el.hometown === location) {
      console.log(el.name)
    }
  };
  driver.forEach(callback);
};

function driversByRevenue(driver) {
return driver.slice().sort(function(a,b) {
      return a.revenue - b.revenue;
    });
};

function driversByName(driver) {
  return driver.slice().sort(function(a,b) {
      return a.name.localeCompare(b.name);
    });
};

function totalRevenue(driver) {
  const reduceDrivers = function (agg, el, i, arr) {
    return agg + el.revenue
  };
  return driver.reduce(reduceDrivers, 0)
};

function averageRevenue(driver) {
  return totalRevenue(driver)/driver.length;
};
