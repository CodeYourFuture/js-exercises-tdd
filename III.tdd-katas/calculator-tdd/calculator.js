function add(strNumbers){
    if (strNumbers === "") return 0;
    if (strNumbers.length === 1) return Number(strNumbers);
    return strNumbers
        .split("\n")
        .join()
        .split(",")
        .map(Number)
        .reduce((total, value) => total + value);
}

module.exports = {
    add
};

console.log(add("1\n2,3"));