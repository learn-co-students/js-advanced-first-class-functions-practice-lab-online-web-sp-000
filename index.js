// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(driver => console.log(driver.name));
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(driver => {
    if (driver.hometown == location) {
      console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers) {
  return drivers.slice().sort((a, b) => a.revenue - b.revenue);
}

function driversByName(drivers) {
  return drivers.slice().sort((a, b) => a.name > b.name);
}

function totalRevenue(drivers) {
  // const total = (agg, el, i, arr) => {
  //   return agg + el.revenue
  // }
  // return drivers.reduce(total, 0);
  return drivers.reduce((agg, el) => {
    return agg + el.revenue; }, 0);
}

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length;
}
