class PasswordVerifier {
  constructor(password) {
    this.password = password
  }

  notShort() {
    if (this.password.length < 9)
      throw Error(
        'Password is too short. Needs to be greater than 8 characters'
      )

    return true
  }

  notNull() {
    if (this.password === null) throw Error('Password cannot be null')

    return true
  }

  hasNumber() {
    if (!/\d/g.test(this.password))
      throw Error('Password must contain at least one number')

    return true
  }

  hasUpperCaseLetter() {
    let arr = []

    for (let i = 0; i < this.password.length; i++) {
      for (let j = 65; j < 91; j++) {
        if (this.password.charCodeAt(i) === j) arr.push(i)
      }
    }

    if (arr.length === 0)
      throw Error('Password must contain at least one uppercase letter')

    return true
  }

  hasLowerCaseLetter() {
    let arr = []

    for (let i = 0; i < this.password.length; i++) {
      for (let j = 97; j < 122; j++) {
        if (this.password.charCodeAt(i) === j) arr.push(i)
      }
    }

    if (arr.length === 0)
      throw Error('Password must contain at least one lowercase letter')

    return true
  }

  verify() {
    return (
      this.notNull() &&
      this.notShort() &&
      this.hasNumber() &&
      this.hasUpperCaseLetter() &&
      this.hasLowerCaseLetter()
    )
  }
}

module.exports = PasswordVerifier
