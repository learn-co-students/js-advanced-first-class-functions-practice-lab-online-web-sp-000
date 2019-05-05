function logDriverNames(arr){
    arr.forEach(element => {
        console.log(element.name)
    });
}

function logDriversByHometown(arr, loc){
    arr.forEach(element => {
        if (element.hometown === loc) {
            console.log(element.name);
        }
    });
}

function driversByRevenue(arr){
     let rev = arr.slice(0).sort((x, y) =>{
        return x.revenue - y.revenue;
      })
    return rev;
}  

function driversByName(arr){      
    let name =arr.slice(0).sort((x,y) => {
        return x.name.localeCompare(y.name);
    })
    return name;
}

function totalRevenue (arr){
	return (arr.reduce((total, item) => total + item.revenue, 0));
}

function averageRevenue(arr){
    return totalRevenue(arr) / arr.length;
}
