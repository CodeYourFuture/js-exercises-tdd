function helper(number, obj) {
  let str = ''

  if (typeof number !== 'number') throw Error('Please enter an Arabic number')

  for (prop in obj) {
    while (number >= obj[prop]) {
      str += prop
      number -= obj[prop]
    }
  }

  return str
}

module.exports = helper
