// Code your solution in this file!
const logDriverNames = (drivers) => {
    drivers.forEach(driver => {
        console.log(driver.name);
    });
};

const logDriversByHometown = (drivers, hometown) => {
    drivers.forEach(driver => {
        if (driver.hometown === hometown)
        console.log(driver.name);
    });
};

  const driversByRevenue = (drivers) => {
      return drivers.slice().sort((driverOne, driverTwo) => {
          return driverOne.revenue - driverTwo.revenue;
      });
  };

  const driversByName = (drivers) => {
    return drivers.slice().sort((driverOne, driverTwo ) => {
        return driverOne.name.localeCompare(driverTwo.name);
    })
  }

  const totalRevenue = (drivers) => {
    return drivers.reduce((total, currentDriver) => {
        return total + currentDriver.revenue;
    }, 0); 
  };

  //using the previous method as it totals the revenue of all drivers .
  //to then divide it to get the average revenue.
  const averageRevenue = (drivers) => {
    return totalRevenue(drivers) / drivers.length;
  };