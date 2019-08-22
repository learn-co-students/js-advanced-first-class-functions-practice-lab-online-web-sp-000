// Code your solution in this file!
function logDriverNames(driver) {
  driver.forEach(function (element) {
    console.log(element.name);
  });
}

function logDriversByHometown(driver, hometown) {
  driver.forEach(function (element) {
    if (element.hometown === hometown) {
      console.log(element.name);
    }
  });
}

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};

const driversByName = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
};

const totalRevenue = function (drivers) {
  const reduceProductPrices = function (agg, el, i, arr) {
    return agg + el.revenue;
  };

  return drivers.reduce(reduceProductPrices, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
