// Code your solution in this file!

function logDriverNames(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location){
  
  drivers.forEach(function(driver){
    if(driver.hometown === location){
      console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers){
  const copiedArray = [...drivers];
  return copiedArray.sort(function(a,b){
    return a.revenue > b.revenue;
  });
}

function driversByName(drivers){
  const copiedArray = [...drivers];
  return copiedArray.sort(function(a,b){
    return a.name > b.name;
  });
}

function totalRevenue(drivers){
  return drivers.reduce(function(sum, driver){
    return sum + driver.revenue;
  }, 0);
}

function averageRevenue(drivers){
   return totalRevenue(drivers)/drivers.length;
}