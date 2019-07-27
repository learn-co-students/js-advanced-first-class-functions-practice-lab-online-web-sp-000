function logDriverNames(drivers) {
    drivers.forEach(driver => console.log(driver.name))
}
  
function logDriversByHometown(drivers, location) {
    drivers.forEach(driver => {
        if(driver.hometown == location) {
            console.log(driver.name)
        }
    })
}
  
function driversByRevenue(drivers) {
    return drivers.slice().sort((driverA, driverB) => driverA.revenue - driverB.revenue)
}
  
function driversByName(drivers) {
    return drivers.slice().sort((driverA, driverB) => driverA.name.localeCompare(driverB.name))
}
  
function totalRevenue(drivers) {
    return drivers.reduce((total, driver) => total + driver.revenue, 0)
}
  
function averageRevenue(drivers){
    return totalRevenue(drivers) / drivers.length
}