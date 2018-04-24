function add(strNumbers){
    if (strNumbers === "") return 0;
    if (strNumbers.length === 1) return Number(strNumbers);
    
    var arr = strNumbers
        .replace(/\/+/, '')
        .split("\n")
        .join()
        .split(";")
        .join()
        .split(",")
        .map(Number);
       
    for (var i = 0; i <= arr.length; i++){
        if(arr[i] < 0){
            return "negatives not allowed: " + arr[i];
        }
    }

    return arr.reduce((total, value) => total + value);
}

module.exports = { add };

console.log(add("1,4,-1"));