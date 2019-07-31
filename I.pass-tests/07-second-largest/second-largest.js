let secondLargest = arr => {
  return arr.sort((a, b) => {
    return b - a;
  })[1];
};

module.exports = secondLargest;
