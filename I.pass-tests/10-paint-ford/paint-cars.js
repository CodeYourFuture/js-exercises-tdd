function paintShop(cars, newColor) {
    cars.map(x => {
        x.colour == newColor ? x.colour = 'pink' : x.colour = x.colour;
    });
    for (let obj in cars){
        if (obj.colour == 'red'){
            obj.colour = newColor;
        }
    }
}

module.exports = paintShop;