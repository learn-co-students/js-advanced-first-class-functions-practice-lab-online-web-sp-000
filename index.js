// Code your solution in this file!

const logDriverNames = function (listOfDrivers) {
  listOfDrivers.forEach(function (driver) {
    console.log(driver.name)
  })
}

const logDriversByHometown = function (listOfDrivers, hometown) {
  listOfDrivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
    console.log(driver.name) }
  })
}

const driversByRevenue = function (listOfDrivers) {
  return listOfDrivers.slice().sort(function (num1, num2) {
    return num1.revenue - num2.revenue
  })
}

const driversByName = function (listOfDrivers) {
  return listOfDrivers.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name)
  })
}

const totalRevenue = function (listOfDrivers) {
  return listOfDrivers.reduce(function (totalAmount, driver) {
    return driver.revenue + totalAmount
  }, 0)
}

const averageRevenue = function (listOfDrivers) {
  return totalRevenue(listOfDrivers) / listOfDrivers.length
}