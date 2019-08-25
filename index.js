// Code your solution in this file!
function logDriverNames(drivers) {
    drivers.forEach( function (driver) {
        console.log(driver.name);
    });
  }

function logDriversByHometown(drivers, hometown) {

    drivers.forEach( function (driver) {
        if (driver.hometown.toLowerCase() === hometown.toLowerCase()) {
            console.log(driver.name);
        }
    }); 
}

function driversByRevenue(drivers) {
    return drivers.slice().sort( function (driver1, driver2) {
            return driver1.revenue - driver2.revenue;
    }); 
}
 
function driversByName(drivers) {
    return drivers.slice().sort( function (driver1, driver2) {
            return driver1.name.localeCompare(driver2.name);
    }); 
}

// The reduce() method takes two arguments:
// a callback function that will reduce each array element into a single, ultimate value 
// and the initial value that the reduction should start from, i.e., 0
function totalRevenue(drivers) {
    return drivers.reduce(function(total, driver) {
      return total + driver.revenue;
    }, 0);
  };


function averageRevenue(drivers) {
    return totalRevenue(drivers)/drivers.length;
};