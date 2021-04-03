const formatCities = require("./cities")

describe("Format cities", function() {
  function transform({ city, country }) {
    return `${city} is the capital of ${country}`
  }

  test("It returns the capital city with the associated country", function() {
    const capitals = [
      { city: "Paris", country: "France" },
      { city: "Madrid", country: "Spain" },
      { city: "Rome", country: "Italy" }
    ]

    const expected = [
      "Paris is the capital of France",
      "Madrid is the capital of Spain",
      "Rome is the capital of Italy"
    ]

    const result = formatCities(capitals, transform)

    expect(result).toEqual(expected)
  })

  test("It does not return capital city or country if either is not a string", function() {
    const capitals = [
      { city: 'Ankara', country: 'Turkey' },
      { city: true, country: 'Lorem' },
      { city: 'Berlin', country: 'Germany' },
    ]

    const expected = [
      'Ankara is the capital of Turkey',
      'Berlin is the capital of Germany',
    ]

    const result = formatCities(capitals, transform)

    expect(result).toEqual(expected)
  })
})
