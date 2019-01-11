function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if(driver.hometown === location) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  return drivers.concat().sort((a, b) => a.revenue - b.revenue)
}

function driversByName(drivers) {
  return drivers.concat().sort(function(a, b){
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(drivers) {
  let total = 0;
  drivers.forEach(function(driver){
    total += driver.revenue
  })
  return total
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
