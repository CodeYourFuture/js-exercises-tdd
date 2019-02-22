function sales(numbers) {
    var carsSold = [
        { make: 'Ford', model: 'Fiesta', colour: 'Red', price: 5999 },
        { make: 'LandRover', model: 'Defender', colour: 'Muddy', price: 12000 },
        { make: 'Toyota', model: 'Prius', colour: 'Silver', price: 6500 },
        { make: 'Honda', model: 'Civic', colour: 'Yellow', price: 8000 },
        { make: 'Ford', model: 'Fiesta', colour: 'Red', price: 15000 },
        { make: 'LandRover', model: 'Discovery', colour: 'Blue', price: 9000 },
        { make: 'Ford', model: 'Fiesta', colour: 'Green', price: 2000 }
    ];

    var result = {
        'Ford': 0,
        'Honda': 0,
        'LandRover': 0, 
        'Toyota': 0
    };

 for (i=0; i<carsSold.length; i++){
    if (carsSold[i].make === "Ford"){
        result.Ford = result.Ford + carsSold[i].price;
    }
     if (carsSold[i].make === "Honda") {
         result.Honda = result.Honda + carsSold[i].price;
    }
     if (carsSold[i].make === "LandRover") {
         result.LandRover = result.LandRover + carsSold[i].price;
     }
     if (carsSold[i].make === "Toyota") {
         result.Toyota = result.Toyota + carsSold[i].price;
     }
 }
 return result;
}

module.exports = sales;

