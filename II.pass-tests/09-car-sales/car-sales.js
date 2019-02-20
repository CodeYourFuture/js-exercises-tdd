module.exports = carsSold => {
  let carMakers = [];
  let total = 0;
  let allMakersSoldTotal = {};
  //populating the carMaker array to use it later to get the total according to the maker
  carsSold.forEach(carObj => {
    if (!carMakers.includes(carObj.make)) {
      carMakers.push(carObj.make);
    }
  });

  //This forEach block sending each maker individually
  carMakers.forEach(maker => {
    //This forEach block calculatin the total of the sold cars for the maker
    carsSold.forEach(carObj => {
      if (maker === carObj.make) {
        //Checking if we have calcualted for this maker or not
        total += carObj.price;
      }
    });
    allMakersSoldTotal[maker] = total; //Here making an object with key name same as the maker and assign to it the value of the total
    total = 0; // reseting the value of the total to make it ready for the next maker calculation
  });

  return allMakersSoldTotal;
};
