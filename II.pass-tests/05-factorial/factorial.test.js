const factorial = require('./factorial');

describe('Factorial', function () {
    test('Factorial', function () {
        var in1 = 5, in2 = 9, in3 = 1, in4 = 0, in5 = 3;
        var exp1 = 120, exp2 = 362880, exp3 = 1, exp4 = 1, exp5 = 6;

        var out1 = factorial(in1);
        var out2 = factorial(in2);
        var out3 = factorial(in3);
        var out4 = factorial(in4);
        var out5 = factorial(in5);

        expect(out1).toEqual(exp1);
        expect(out2).toEqual(exp2);
        expect(out3).toEqual(exp3);
        expect(out4).toEqual(exp4);
        expect(out5).toEqual(exp5);
    });
})