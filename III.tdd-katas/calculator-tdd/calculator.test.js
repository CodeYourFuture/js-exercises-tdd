let calculator = require("./calculator")

test("calculator",() =>{
    var input ="";
    let input1="1,2"
    let input2= "1\n2,3";
    let output = calculator(input);
    let output1 = calculator(input1);
    let output2 = calculator(input2)

    expect(output).toEqual(0)
    expect(output1).toEqual(3)
    expect(output2).toEqual(6)
    expect(calculator("-1,2,3")).toEqual("negatives not allowed:-1")
    expect(calculator("10001,2")).toEqual(2)
})