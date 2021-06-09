const PasswordVerifier = require('./password-verifer')

describe('The PasswordVerifier class', function () {
  let password
  test('the `notShort` method raises error if password is less than 8 chars', function () {
    password = new PasswordVerifier('p@ss0')
    expect(() => password.notShort()).toThrow(
      Error('Password is too short. Needs to be greater than 8 characters')
    )
  })

  test('the `notNull` method raises error is password entered is null', function () {
    password = new PasswordVerifier(null)
    expect(() => password.notNull()).toThrow(Error('Password cannot be null'))
  })

  test('the `hasUpperCaseLetter` method raises an error if password does not contain at least one uppercase letter', function () {
    password = new PasswordVerifier('esrababy1')
    expect(() => password.hasUpperCaseLetter()).toThrow(
      Error('Password must contain at least one uppercase letter')
    )
  })

  test('the `hasLowerCaseLetter` method raises an error if password does not contain at least one lowercase letter', function () {
    password = new PasswordVerifier('ABCDEFGHIK5')
    expect(() => password.hasLowerCaseLetter()).toThrow(
      Error('Password must contain at least one lowercase letter')
    )
  })

  test('the `hasNumber` method raises an error if password does not contain at least one number', function () {
    password = new PasswordVerifier('*PassWord!')
    expect(() => password.hasNumber()).toThrow(
      Error('Password must contain at least one number')
    )
  })

  test('the `verify` method returns true if password meets three or more of methods do not raise an error', function () {
    password = new PasswordVerifier('EsraBaby123')
    expect(password.verify()).toEqual(true)
  })
})
