function sales(carsSold) {
    let output = {};
    for (let obj of carsSold) {
        if (output.hasOwnProperty(obj.make)) {
            output[obj.make] = output[obj.make] + obj.price;
        } else {
            output[obj.make] = obj.price;
        }
    }
    return output;
}

module.exports = sales;
