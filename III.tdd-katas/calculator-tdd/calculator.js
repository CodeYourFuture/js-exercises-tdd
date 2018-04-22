function add(strNumbers){
    if (strNumbers === "") return 0;
    if (strNumbers.length === 1) return Number(strNumbers);
    return strNumbers.split(",").reduce((total, value) => Number(total) + Number(value));
}

module.exports = {
    add
  };
