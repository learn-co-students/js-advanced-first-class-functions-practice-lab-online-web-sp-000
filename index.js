// Code your solution in this file!
const logDriverNames = function (array) {
  array.forEach(function (person) {
    console.log(person.name);
  });
};

const logDriversByHometown = function (array, hometown) {
  array.forEach(function (person) {
    if (person.hometown === hometown){
    console.log(person.name);
    }
  });
};

const driversByRevenue = function (person) {
  return person.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};

const driversByName = function (person) {
  return person.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
};

const totalRevenue = function (person) {
  return person.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function (person) {
  return totalRevenue(person) /person.length;
};