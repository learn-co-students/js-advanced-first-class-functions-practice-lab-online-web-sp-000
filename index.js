// Code your solution in this file!
function logDriverNames(drivers) {
    drivers.forEach(function (driver) {
        console.log(driver.name);
    });
}

function logDriversByHometown(drivers, location) {
    drivers.forEach(function (driver) {
        if (driver.hometown == location) {
            console.log(driver.name);
        };
    });
}

function driversByRevenue(drivers) {
    return drivers.slice().sort(function (a, b) {
        return a.revenue - b.revenue;
    });
};

function driversByName(drivers) {
    return drivers.slice().sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
}

function totalRevenue(drivers) {
    let totalPrice = 0;
    drivers.forEach(function (driver) {
        totalPrice += driver.revenue;
    });
    return totalPrice;
}

function averageRevenue(drivers) {
    let averagePrice = 0;
    drivers.forEach(function (driver) {
        averagePrice += driver.revenue/drivers.length;
    });
    return averagePrice;
}