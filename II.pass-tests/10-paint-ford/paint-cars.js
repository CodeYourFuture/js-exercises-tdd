function paintShop(element, color) {
    const result = [];
    element.reduce(function(res, value) {
        
      if (!res[value.make]) {
        res[value.make] = {
          colour: 0,
          make: value.make
        };
        result.push(res[value.make]);
          result.push(res[value.model]);
    }
        res[value.make].colour = value.colour;
      return res;
        // return result;
    }, {});
    
//   });
  return result;
}


module.exports = paintShop;