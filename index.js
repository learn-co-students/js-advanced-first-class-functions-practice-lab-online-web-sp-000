// Code your solution in this file!

function logDriverNames(driversArray) {
  return driversArray.forEach(function(driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(driversArray, location) {
  return driversArray.forEach(function(driver) {
            if (driver.hometown === location) {
              console.log(driver.name)
            }
  })
}

function driversByRevenue(driversArray) {
  return driversArray.slice().sort(function (driverOne, driverTwo) {
      return driverOne.revenue - driverTwo.revenue
  })
}

function driversByName(driversArray) {
  return driversArray.slice().sort(function (driverOne, driverTwo) {
      return driverOne.name.localeCompare(driverTwo.name)
  })
}

function totalRevenue(driversArray) {
  return driversArray.reduce(function(sum, driver) {
    return driver.revenue + sum
  }, 0)
}

function averageRevenue(driversArray) {
  return totalRevenue(driversArray) / driversArray.length
}