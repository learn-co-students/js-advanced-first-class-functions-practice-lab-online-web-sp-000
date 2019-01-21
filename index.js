const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    };
  });
};

const driversByRevenue = function (drivers) {
  let sortedDrivers = [...drivers];
  sortedDrivers.sort(function (a,b) {
    return a.revenue - b.revenue;
  });
  return sortedDrivers;
};

const driversByName = function (drivers) {
  let sortedDrivers = [...drivers];
  sortedDrivers.sort(function (a,b) {
    return a.name.localeCompare(b.name);
  });
  return sortedDrivers;
};

const driverRevenue = function (acc, driver) {
  return acc + driver.revenue;
}

const totalRevenue = function (drivers) {
  return drivers.reduce(driverRevenue, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers)/drivers.length;
};