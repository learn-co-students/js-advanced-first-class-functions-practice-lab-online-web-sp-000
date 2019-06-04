// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(d){
    console.log(d.name);
  });
}

function logDriversByHometown(drivers, loc) {
  const myDriv = drivers.filter(function (f) { return f.hometown.toLowerCase() == loc.toLowerCase(); });
  return logDriverNames(myDriv);
}

function driversByRevenue(drivers) {
  const sortDriv = [...drivers];
  return sortDriv.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
  return drivers.slice().sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  return drivers.reduce(function(tot, ele){
    return tot += ele.revenue;
  },0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length;
}
