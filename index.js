import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

// Code your solution in this file!
function logDriverNames(drivers){
    for(const driver of drivers){
            
    console.log(driver.name);
    }
}

function logDriversByHometown(drivers, location){
    let selectedDrivers = drivers.filter(driver => driver.hometown === location);
    logDriverNames(selectedDrivers);
}

function driversByRevenue(drivers){
    return drivers.slice().sort(function(a,b){
       return a.revenue - b.revenue;
    });
    
}


function driversByName(drivers){
    return drivers.slice().sort(function(a,b){
        return a.name.localeCompare(b.name);
    });
    
}

function totalRevenue(drivers){
    return drivers.reduce((cum, curr) => cum + curr.revenue, 0);

}

function averageRevenue(drivers){
    return totalRevenue(drivers) / drivers.length;
    
}