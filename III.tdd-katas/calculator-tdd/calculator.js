function add(strNumbers){
    if (strNumbers === "") return 0;
    if (strNumbers.length === 1) return Number(strNumbers);
    
    let arr = strNumbers
        .replace(/\/+/, '')
        .split("\n")
        .join()
        .split(";")
        .join()
        .split(",")
        .map(Number);
    
    const negatives = [];
    for (let i = 0; i <= arr.length; i++){
        if(arr[i] < 0){
            negatives.push(arr[i]);
        }
    }
    
    if(negatives.length > 0){
        return "negatives not allowed: " + negatives;
    }

    return arr.reduce((total, value) => {
        if(value < 1000){
           return total + value;
        }
        return total;
    });
}

module.exports = add;