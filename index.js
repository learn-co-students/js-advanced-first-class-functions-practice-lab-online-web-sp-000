// Code your solution in this file!
const nameLogger = function(el, i, arr){
    console.log(el.name)
}

const logDriverNames = function(drivers){
    return drivers.forEach(nameLogger);
}

const logDriversByHometown = function(drivers, location){
    let driversByLocation = drivers.filter(driver => driver.hometown === location);
    return driversByLocation.forEach(nameLogger);
}


const driversByRevenue = function(drivers){
    return drivers.slice().sort(function(a, b){
        return a.revenue - b.revenue;
    });
};

const driversByName = function(drivers){
    return drivers.slice().sort(function(a, b){
        return a.name.localeCompare(b.name);
    });
}

const tallyRevenue = function(agg, el, i, arr) {
    return agg + el.revenue;
};

const totalRevenue = function(drivers){
    return drivers.reduce(tallyRevenue, 0);
};

const averageRevenue = function(drivers){
    return totalRevenue(drivers) / drivers.length;
};