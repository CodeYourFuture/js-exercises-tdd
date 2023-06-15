function paintShop(cars, color) {
    var repaintedCars = [];

    for(let i = 0; i < cars.length; i++) {
        var car = cars[i];


        if(car.color !== color) {
            let repaintedCar = {...car, color: color };
            repaintedCars.push(repaintedCar);
        }else{
          repaintedCars.push(car); 
        }
    }

    return repaintedCars;
}

module.exports = paintShop;