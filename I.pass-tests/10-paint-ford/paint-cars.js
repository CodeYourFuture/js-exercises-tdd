function paintShop(cars, paintedColour) {
  const repaintedCars = JSON.parse(JSON.stringify(cars))

  return repaintedCars.reduce((acc, car) => {
    if (car.make === 'Ford') car.colour = paintedColour
    acc.push(car)

    return acc
  }, [])
}

module.exports = paintShop
