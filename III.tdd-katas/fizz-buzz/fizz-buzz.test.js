const fizzBuzz = require('./fizz-buzz')

describe('FizzBuzz function', function () {
  jest.spyOn(console, 'log')

  beforeEach(() => {
    console.log = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('prints number if not divisble by 3, 5 or both', function () {
    fizzBuzz(1)
    expect(console.log).toBeCalledTimes(1)
    expect(console.log.mock.calls[0][0]).toBe(1)
  })

  test('prints Fizz if number is divisible by 3', function () {
    fizzBuzz(6)
    expect(console.log.mock.calls.flat()).toContain('Fizz')
  })

  test('prints Buzz if number is divisible by 5', function () {
    fizzBuzz(15)
    expect(console.log.mock.calls.flat()).toContain('Buzz')
  })

  test('prints FizzBuzz if number is divisible by 3 and 5', function () {
    fizzBuzz(30)
    expect(console.log.mock.calls.flat()).toContain('FizzBuzz')
  })
})
