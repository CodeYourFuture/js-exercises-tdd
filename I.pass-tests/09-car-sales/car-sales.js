function carSales(array) {
    let result = {}, ford = 0, honda = 0, rover = 0, toyota = 0;
    array.forEach(element => {
        if (element.make === "Ford") {
            ford = ford + element.price
        } else if (element.make === "Honda") {
            honda = honda + element.price
        } else if (element.make === "Land Rover") {
            rover = rover + element.price
            debugger
        } else {
            toyota = toyota + element.price
        }

    });
    result.Ford = ford
    result.Honda = honda
    result["Land Rover"] = rover
    result.Toyota = toyota

    return result

}
module.exports = carSales;