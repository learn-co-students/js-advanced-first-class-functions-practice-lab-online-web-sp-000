// Code your solution in this file!
const logDriverNames = function(drivers){
    drivers.forEach(function(driver){
        console.log(driver.name)
    })
}

const logDriversByHometown = function(drivers, hometown){
    const driversFilteredByHometown = drivers.filter(function(driver){return driver.hometown === hometown})
    logDriverNames(driversFilteredByHometown)
}

const driversByRevenue = function(drivers){
    const revenueSorter = function (driver1, driver2) {
        return driver1.revenue - driver2.revenue;
      };

    return [...drivers].sort(revenueSorter)
}

const driversByName = function(drivers){
    const nameSorter = function (driver1, driver2) {
        return driver1.name.localeCompare(driver2.name);
      };

    return [...drivers].sort(nameSorter)
}

const totalRevenue = function(drivers){
    const reduceProductPrices = function (agg, el) {
        return agg + el.revenue;
      };

    return [...drivers].reduce(reduceProductPrices, 0)
}

const averageRevenue = function(drivers){
    const reduceProductPrices = function (agg, el) {
        return agg + el.revenue;
      };

    return [...drivers].reduce(reduceProductPrices, 0)/(drivers.length)
}