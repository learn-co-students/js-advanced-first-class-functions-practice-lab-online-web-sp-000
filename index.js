// const drivers = [
//   { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
//   { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
//   { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
//   { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
//   { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
// ];



// logs the name of each driver
const logDriverNames = function(drivers) {

    drivers.forEach(function(driver) {
        console.log(driver.name);
    });

};


// logs the name of each driver whose hometown matches the passed-in argument
const logDriversByHometown = function (drivers, hometown) {

    drivers.forEach(function(driver) {
        if (driver.hometown === hometown) {
            console.log(driver.name);
        }
    });

};


// uses the sort() method to return a new array of drivers
// ordered by revenue (lowest to highest)
const driversByRevenue = function(drivers) {

    return drivers.slice().sort(function(driverOne, driverTwo) {
        return driverOne.revenue - driverTwo.revenue;
    });

};


// uses the sort() method to return a new array of drivers
// ordered alphabetically by name (A to Z)
const driversByName = function(drivers) {

    return drivers.slice().sort(function(driverOne, driverTwo) {
        return driverOne.name.localeCompare(driverTwo.name);
    });

};


// uses the reduce() method to sum the revenue of every driver and return the total
const totalRevenue = function (drivers) {

    return drivers.reduce(function (total, currentDriver) {
        return currentDriver.revenue + total;
    }, 0);

};


// calculates the average revenue across all drivers
const averageRevenue = function (drivers) {

    return totalRevenue(drivers) / drivers.length;

};
