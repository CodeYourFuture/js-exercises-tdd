function carsSold(cars) {
    var car1 = [];
    var car2 = [];
    var car3 = [];
    var car4 = [];
    cars.map(item => {
        if (item.make === "Ford") {
            car1.push(item.price);
        } else if (item.make === "Land Rover") {
            car2.push(item.price);
        } else if (item.make === "Honda") {
            car3.push(item.price);
        } else if (item.make === "Toyota") {
            car4.push(item.price);
        }
    })

    var total = {
        "Ford": car1.reduce((a, b) => a + b),
        "Land Rover": car2.reduce((a, b) => a + b),
        "Honda": car3.reduce((a, b) => a + b),
        "Toyota": car4.reduce((a, b) => a + b),

    }
    return total;
}
module.exports = carsSold