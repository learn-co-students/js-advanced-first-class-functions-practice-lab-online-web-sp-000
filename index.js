// Code your solution in this file!

  const logDriverNames = function (drivers){ 
   drivers.forEach(function(dname) { 
    console.log(dname.name); 
   }); 
  };
  
  const logDriversByHometown = function(drivers,location) { 
   drivers.forEach(function(dname){
     if (dname.hometown === location){ 
       console.log(dname.name);
     }
   });  
  };
  
  const driversByRevenue = function (drivers) {
    return drivers.slice().sort(function (a, b) {
      return a.revenue - b.revenue;
    });
  };
  
  const driversByName = function(drivers){ 
    return drivers.slice().sort(function (a,b) { 
      return a.name.localeCompare(b.name); 
    }); 
  };
  
  const totalRevenue = function(drivers){ 
    return drivers.reduce(function(total, d) { 
      return total += d.revenue; 
    }, 0);
  };
    
    const averageRevenue = function(drivers){ 
      return totalRevenue(drivers) / drivers.length; 
    }; 
  