const logDriverNames = function (drivers) {
  drivers.forEach(function(element) {
    console.log(element.name);
  });
}

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach( function(element) {
    if (element.hometown === hometown) {
      console.log(element.name);
    }
  });
};

const driversByRevenue = function (drivers) {
  return [...drivers].sort(function (a, b) {
    return a.revenue - b.revenue;
  });
};

const driversByName = function (drivers) {
  return [...drivers].sort(function(a, b) {
    return a.name > b.name;
  });
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function(total, driver) {
    return total + driver.revenue;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
