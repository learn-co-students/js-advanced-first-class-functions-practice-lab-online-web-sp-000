// Code your solution in this file!
// * `logDriverNames()` — Receives an array of `driver` objects and logs the `name` attribute of each `driver` to the console.
function logDriverName(driver) {console.log(driver.name)}
function logDriverNames(drivers) {drivers.forEach(logDriverName)}
// * `logDriversByHometown()` — Receives an array of `driver` objects as the first argument and a location as the second argument. The function logs to the console the `name` attribute of each `driver` whose hometown matches the string passed in as the 'location' argument.
function logDriversByHometown(drivers, town) {
  logDriverNames(drivers.filter(function(driver) {return driver.hometown === town}));
}
// * `driversByRevenue()` — Receives an array of `driver` objects and returns a new array of `driver` objects sorted by their `revenue` attribute from lowest to highest.
const revenueSort = function (driver1, driver2) { return driver1.revenue - driver2.revenue }
const driversByRevenue = function(drivers) {
  const driversCopy = drivers.slice()
  return driversCopy.sort(revenueSort)
}
// * `driversByName()` — Receives an array of `driver` objects and returns a new array of `driver` objects sorted by their `name` attribute from A to Z. Here, you may have to use the [`String.prototype.localeCompare()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) method.
const nameSort = function (driver1, driver2) { return driver1.name.localeCompare(driver2.name) }

const driversByName = function(drivers) {
  return drivers.slice().sort(nameSort)
}
// * `totalRevenue()` — Receives an array of `driver` objects and returns the sum of the revenue earned by each driver.
const revenueAggregator = function (total, driver) { return total + driver.revenue }
const totalRevenue = function (drivers) {
  return drivers.reduce(revenueAggregator, 0)
}
// * `averageRevenue()` — Receives an array of `driver` objects and returns the average revenue earned by each driver.

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length
}
