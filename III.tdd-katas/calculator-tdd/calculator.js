function add(strNumbers){
    if (strNumbers === "") return 0;
    if (strNumbers.length === 1) return Number(strNumbers);
    //return strNumbers.match('[0-9]+$');
    return strNumbers
        .replace(/\/+/, '')
        .split("\n")
        .join()
        .split(";")
        .join()
        .split(",")
        .map(Number)
        .reduce((total, value) => total + value);
}

module.exports = {
    add
};

console.log(add("//\n1;2,3"));