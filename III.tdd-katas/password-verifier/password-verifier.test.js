var passwordVerifier = require("./password-verifier");

test("password should be larger than 8 chars",() => {
    expect(passwordVerifier("12345678")).toEqual(true)
})
test("password should not be null",() => {
    expect(passwordVerifier("")).toEqual(false)
})
test("password should be larger than 8 chars",() => {
    expect(passwordVerifier("12345678")).toEqual(true)
})
test("password should be larger than 8 chars",() => {
    expect(passwordVerifier("12345678")).toEqual(true)
})
test("password should have one uppercase letter at least",() => {
    expect(passwordVerifier("12345678A")).toEqual(true)
})
test("password should have one lowercase letter at least",() => {
    expect(passwordVerifier("a")).toEqual(true)
})
test("password should have one number at least",() => {
    expect(passwordVerifier("1")).toEqual(true)
})