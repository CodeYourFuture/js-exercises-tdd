function formatCities(capitals) {
    let arr =[]
    capitals.forEach(capital => {
        const {city, country} = capital
        arr.push(`${city} is the capital of ${country}`)
    });
    return arr;
}

module.exports = formatCities;