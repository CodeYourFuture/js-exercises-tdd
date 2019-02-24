const { convertToOldRoman, convertToNewRoman } = require('./roman')

test('test old and new roman', () => {
    expect(convertToOldRoman(4)).toBe("IIII")
    expect(convertToNewRoman(4)).toBe("IV")
})

