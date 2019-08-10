const logDriverNames = function (drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  const newDrivers = [...drivers]
  return newDrivers.sort(function(a, b) {
    return a.revenue - b.revenue
  })
}

function driversByName(drivers) {
  const newDrivers = [...drivers]
  return newDrivers.sort(function(a, b) {
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(drivers) {
  const newDrivers = [...drivers]
  return newDrivers.reduce(function(agg, driver, index, array) {
    return agg + driver.revenue
  }, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
