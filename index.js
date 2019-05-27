function logDriverNames(drivers) {
  drivers.forEach(function (element) {console.log(element.name)});
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function (element) {
    if (element.hometown === hometown) {
      console.log(element.name);
    }
  });
}

function driversByRevenue(drivers) {
  const sorted = [...drivers];
  sorted.sort(function (a, b) {
    return a.revenue - b.revenue
  });
  return sorted;
}

function driversByName(drivers) {
  const sorted = [...drivers];
  sorted.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    else if (a.name > b.name) {
      return 1;
    }
    else {
        return 0
    }
  });
  return sorted;
}

function totalRevenue(drivers) {
  const reduced = [...drivers];
  return reduced.reduce(function (total, element) {
    return element.revenue + total;
  },0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
