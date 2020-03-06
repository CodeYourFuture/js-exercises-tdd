function sales(cars) {
    /*var a= sales.filter(function (item) {
     if(item[i] == 'Ford'){}
     if(item[i] == 'Land Rover'){}
     if(item[i] == 'Honda'){}
     if(item[i] == 'Toyota'){}
    });*/
    const ford = sales.filter(cartype => cartype.make == 'Ford');
    const lRover = sales.filter(cartype => cartype.make == 'Land Rover');
    const honda = sales.filter(cartype => cartype.make == 'Honda');
    const toyota = sales.filter(cartype => cartype.make == 'Toyota');
    let fordCounter = 0;
    let lrCounter = 0;
    let hondaCounter = 0;
    let toyotaCounter = 0;
    if (ford) {
        fordCounter += car.price;
    }
    if (lRover) {
        lrCounter += car.price;
    }
    if (honda) {
        hondaCounter += car.price;
    }
    if (toyota) {
        toyotaCounter += car.price;
    }
    var totals = {
        Ford: 0,
        Honda: 0,
        "Rover": 0,
        Toyota: 0
    };
    totals.Ford = fordCounter;
    totals.Honda = hondaCounter;
    totals.Rover = lrCounter;
    totals.toyota = toyotaCounter;
    return totals;
}

module.exports = sales;