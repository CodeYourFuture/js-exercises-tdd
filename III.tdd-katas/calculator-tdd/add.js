module.exports = stringAndNumbers => {
  const regex = /(\d+|(-)?)\d+(\.\d+)?/g;
  const extractedValues = stringAndNumbers.match(regex);
  if (extractedValues && extractedValues.length > 0) {
    const numbersFromString = extractedValues.map(Number)
    let errorMsg = "negatives not allowed: "
    const negativeNumbers = numbersFromString.filter(ele => ele < 0)
    if (negativeNumbers.length > 0) {
        negativeNumbers.forEach(num => errorMsg += " " + num);
        throw new Error(errorMsg);
    }
    const numbersLessThan1000 = numbersFromString.filter(ele => ele < 1000)
    return numbersLessThan1000.reduce((a, b) => a + b, 0);
  }
  return 0;
};
