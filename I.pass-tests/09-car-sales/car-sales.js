function sales(carsSold) {
    var totals = {};

    for (let i = 0; i < carsSold.length; i++){
        let car = carsSold[i]
    if(!totals[car.make]) {
        totals[car.make] = car.price;
    }else{
        totals[car.make] += car.price;
    }
    }
    return totals
}

module.exports = sales;