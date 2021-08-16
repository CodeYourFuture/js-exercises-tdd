function sales(cars) {
    const hash ={}
    cars.forEach(car => {
       return hash[car.make] ? hash[car.make] +=car.price : hash[car.make]=car.price;
    });
    return hash;
}

module.exports=sales;

console.log(sales( [
    { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
    { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
    { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
    { make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
    { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
    { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
    { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 }
  ]))