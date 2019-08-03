// Code your solution in this file!
function logDriverNames(drivers){
    drivers.forEach(function (driver) {
        console.log(driver.name);
    });
}

function logDriversByHometown(drivers, hometown){
    drivers.forEach(function (driver) {
        if (driver.hometown === hometown) {
            console.log(driver.name);
        }
    });
}

function driversByRevenue(drivers) {
    const newArray = [...drivers];
    return newArray.sort(function (a, b) {
        return a.revenue - b.revenue;
    });
}

function driversByName(drivers){
    const newArray = [...drivers];
    return newArray.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
}

function totalRevenue(drivers){
    const reduceTotalRevenue = function (agg, el, i , arr){
        return agg + el.revenue;
    }

    return drivers.reduce(reduceTotalRevenue, 0);
}

function averageRevenue(drivers){
    const reduceAverageRevenue = function (agg, el, i, arr){
        const sum = agg + el.revenue;
        if (i === drivers.length - 1) {
            return sum / drivers.length;
        }
        return sum;
    }

    return drivers.reduce(reduceAverageRevenue, 0);
}