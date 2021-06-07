function fizzBuzz(int) {
  for (let i = 1; i <= int; i++) {
    switch (true) {
      case i % 15 === 0:
        console.log('FizzBuzz')
        break
      case i % 3 === 0:
        console.log('Fizz')
        break
      case i % 5 === 0:
        console.log('Buzz')
        break
      default:
        console.log(i)
    }
  }
}

module.exports = fizzBuzz
