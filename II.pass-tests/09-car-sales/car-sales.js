module.exports = carsSold => {
    var totals = {
        'Ford': 0,
        'Honda': 0,
        'Land Rover': 0,
        'Toyota': 0
    };
    carsSold.map(car => {
        const {make, price} = car;
        
        switch (make) {
        case "Ford":
            totals.Ford = totals.Ford + price; break;
        case "Honda":
            totals.Honda = totals.Honda + price; break;
        case "Land Rover":
            totals["Land Rover"] = totals["Land Rover"] + price; break;   
        case "Toyota":
            totals.Toyota = totals.Toyota + price; break; 
        }
    })
    return totals;
}