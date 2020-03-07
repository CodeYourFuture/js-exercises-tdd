function formatCities(capitals, transform) {
    let arr = [];
    for (let i of capitals) {
        arr.push(i.city + ' is the capital of ' + i.country);
    }
    return arr;
}
module.exports = formatCities;
