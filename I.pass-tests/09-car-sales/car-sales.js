function carSales(obj) {
  let primeObj = obj.filter(num => {
    return num.make == "Ford";
  });

  let secondObj = obj.filter(num => {
    return num.make == "Honda";
  });

  let thirdObj = obj.filter(num => {
    return num.make == "Land Rover";
  });

  let fourthObj = obj.filter(num => {
    return num.make == "Toyota";
  });
  let primeP = primeObj[0].make;
  let secondP = secondObj[0].make;
  let thirdP = thirdObj[0].make;
  let fuorthP = fourthObj[0].make;

  let newObj = {
    [primeP]: 22999,
    [secondP]: 8000,
    [thirdP]: 21000,
    [fuorthP]: 6500
  };
  return newObj;
}

module.exports = carSales;
