const add = require("./add");
describe("Step 2: handle an unknown amount of numbers", () => {
    test("should return 0 for empty string passed to add", () => {
        expect(add("")).toBe(0);
    });
    test('should return 1 for "1" string passed to add', () => {
        expect(add("1")).toBe(1);
    });
    test('should return 3 for "1,2" string passed to add', () => {
        expect(add("1,2")).toBe(3);
    });
});
describe("Step 2: handle an unknown amount of numbers", () => {
    test("should return 0 for empty string passed to add", () => {
        expect(add("1,2,4fi5faswwe6,lgsf8")).toBe(26);
    });
});
describe("Step 3: handle new lines between numbers", () => {
    test("should return 26 for the string passed to add", () => {
        expect(add("1,2,4fi5faswwe6,lgsf8")).toBe(26);
    });
});
describe("Step 4: support different delimiters", () => {
    test("should return 9.3 for the string passed to add", () => {
        expect(add("//3[$5.3delimiter]\n[numbers..&.*1]")).toBeCloseTo(9.3);
    });
});
describe("Step 5: negative numbers", () => {
    test("should return an error message for negatinve numbers  in string passed to add", () => {
            function fn() {
                add("1,4,-1,-4");
            }
        expect(fn).toThrowError("negatives not allowed:  -1 -4");
    });
});
describe("Step 6: ignore big numbers", () => {
    test("should return 24 to add", () => {
        expect(add("1,1001,4fi5faswwe6,lgsf8")).toBe(24);
    });
});
