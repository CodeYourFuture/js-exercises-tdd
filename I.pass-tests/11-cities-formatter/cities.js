function formatCities(capitals) {
  return capitals.reduce(function(acc, capital) {
    if (typeof capital.city === 'string' && typeof capital.country === 'string') {
      acc.push(`${capital.city} is the capital of ${capital.country}`)
    }

    return acc
  }, [])
}

module.exports = formatCities
