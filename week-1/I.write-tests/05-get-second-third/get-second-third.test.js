test('Get second and third', function () {
    var numbers = [90, 5, 11, 5, 6];

    var expectedOutput = [5, 11];
    var expectedNumbers = [90, 5, 11, 5, 6];

    var output = functions.get2ndAnd3rd(numbers);

    expect(output).toEqual(expectedOutput);
    expect(numbers).toEqual(expectedNumbers);
});