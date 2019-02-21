module.exports = carsSold => {
    let carMakers = [];
    let total = 0;
    let allMakersSoldTotal = {};

    carsSold.forEach(carObj => {
        if (!carMakers.includes(carObj.make)) {
            carMakers.push(carObj.make);
        }
    });

    carMakers.forEach(maker => {
        carsSold.forEach(carObj => {
            if (maker === carObj.make) {
                total += carObj.price;
            }
        });
        allMakersSoldTotal[maker] = total; 
        total = 0;
    });

    return allMakersSoldTotal;
}