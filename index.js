// Code your solution in this file!
function logDriverNames(array) {
  const logger = function(el, i, arr) {
    console.log(el.name);
  };
  array.forEach(logger);
}

function logDriversByHometown(array, hometown) {
  const logger = function(el, i, arr) {
    if (el.hometown === hometown) {
          console.log(el.name);
        }
    };
  array.forEach(logger);
}

function driversByRevenue(array) {
  const sorter = function (a, b) {
    return a.revenue - b.revenue;
  };
  let newArray = array.slice(0).sort(sorter);
  return newArray;
}

function driversByName(array) {
  const sorter = function (a, b) {
    return a.name.localeCompare(b.name)
  };
  let newArray = array.slice(0).sort(sorter);
  return newArray;
}

function totalRevenue(array, value) {
  const revreducer = function(agg, el, i, arr) {
    return agg + el.revenue;
  }
  return array.reduce(revreducer, 0)
}

function averageRevenue(array, value) {
  const revreducer = function(agg, el, i, arr) {
    return (agg + el.revenue);
  }
  return (array.reduce(revreducer, 0))/array.length;
}
