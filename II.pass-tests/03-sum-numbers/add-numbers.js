module.exports = (numbers = [0]) => 
    numbers.length == 0 ? 0 : numbers.reduce((a, b) => a + b);