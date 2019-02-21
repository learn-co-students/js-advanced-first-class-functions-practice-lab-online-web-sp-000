// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver){
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(driver) {
    if(driver.hometown === hometown){
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  return drivers.map(driver => driver).sort(function(a, b){
    return a.revenue - b.revenue
  })
}


const driversByName = function(drivers){
  return drivers.map(driver => driver).sort(function(a, b){
    return a.name.localeCompare(b.name);
  })
}


const totalRevenue = function(drivers){
  let totalPrice = 0;

  drivers.forEach(function(driver){
    totalPrice += driver.revenue;
  })
    return totalPrice
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
