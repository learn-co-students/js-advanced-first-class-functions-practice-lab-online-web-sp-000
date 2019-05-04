function logDriverNames(driver){

  driver.forEach(function (eachDriver) {
    console.log(eachDriver.name);
 });

}

function logDriversByHometown(driver, location){

  driver.forEach(function (eachDriver) {
    if(eachDriver.hometown === location){
      console.log(eachDriver.name);
    }
 });

}

function driversByRevenue(driver){
  return driver.slice().sort(function(a, b) {
   return a.revenue - b.revenue;
});
}
//
function driversByName(driver){
  return driver.slice().sort(function(a,b){
      return a.name.localeCompare(b.name);
  });
}

function totalRevenue(driver){
   return driver.reduce(function (total, currentValue) {
      return total + currentValue.revenue;
  }, 0);

}

function averageRevenue(driver){
  return driver.reduce(function (total, currentValue) {
     return (total + currentValue.revenue);
 }, 0)/driver.length;


}
