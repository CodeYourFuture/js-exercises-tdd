function formatCities(cities) {
    //first solution;

    // var isCity = [];
    // var isCountry = [];
    // var result = [];
    // cities.map(item => {
    //     isCity.push(item.city);
    //     isCountry.push(item.country);
    // });


    // for (var i = 0; i < isCity.length; i++) {

    //     result.push(`${isCity[i]} is the capital of ${isCountry[i]}`)
    // }
    // return result;



    //second solution
    var result = cities.map(item => `${item.city} is the capital of ${item.country}`)
    return result;
}











module.exports = formatCities