// Code your solution in this file!
function logDriverNames(array) {
  array.forEach(function(el) {console.log(el.name)})
}

function logDriversByHometown(array, location) {
  array.forEach(function(el) {
    if (el.hometown === location)
    console.log(el.name)
  })
}

function driversByRevenue(array) {
  const numberSorter = function (a,b) {
  return a.revenue - b.revenue
  }
  return array.slice().sort(numberSorter)
}

function driversByName(array) {
  const nameSorter = function (a,b) {
  return a.name.localeCompare(b.name)
  }
  return array.slice().sort(nameSorter)

}

function totalRevenue(drivers) {
  const reduceRevenue = function(total, el) {
    return el.revenue + total;
  }
  return drivers.reduce(reduceRevenue, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
