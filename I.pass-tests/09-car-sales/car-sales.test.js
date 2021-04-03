const sales = require("./car-sales")

describe("Car sales", function() {
  const mixedSales = [
    { make: 'Ford', model: 'Fiesta', colour: 'Red', price: true },
    { make: 'Land Rover', model: 'Defender', colour: 'Muddy', price: {} },
    { make: 'Toyota', model: 'Prius', colour: 'Silver', price: 6500 },
    { make: 'Honda', model: 'Civic', colour: 'Yellow', price: false },
    { make: 'Ford', model: 'Fiesta', colour: 'Red', price: 15000 },
    { make: 'Land Rover', model: 'Discovery', colour: 'Blue', price: 20000 },
    { make: 'Ford', model: 'Fiesta', colour: 'Green', price: 2000 },
  ]
  const returnedOutput = sales(mixedSales)

  test("It returns car make and accumulated sales", function() {
    const carsSold = [
      { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
      { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
      { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
      { make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
      { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
      { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
      { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 }
    ]

    const totals = {
      Ford: 22999,
      Honda: 8000,
      "Land Rover": 21000,
      Toyota: 6500
    }
    const output = sales(carsSold)

    expect(output).toEqual(totals)
  })

  test("It falls back to 0 if price is not a number", function() {
    expect(returnedOutput.Honda).toBe(0)
  })

  test("It ignores price value if it is not a number", function() {
    expect(returnedOutput["Land Rover"]).toEqual(20000)
  })
})
