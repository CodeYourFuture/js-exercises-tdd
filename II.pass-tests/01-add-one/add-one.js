module.exports = function (numbers) {
        var result = [];

    for (var i = 0; i < numbers.length; i++) {
        var value = numbers[i];
            result.push(value + 1);
    }
    return result;
};
