function carSales(sales) {
  return sales.reduce(function (acc, curr) {
    if (!acc[curr.make]) acc[curr.make] = 0

    if (typeof curr.price !== 'number') return acc

    acc[curr.make] += curr.price
    return acc
  }, {})
}

module.exports = carSales