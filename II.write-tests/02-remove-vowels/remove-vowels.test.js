var removeVowels = require("./remove-vowels");
test("remove vowels from word", function() {
  // Assert
  expect(removeVowels("go")).toBe("g");
  expect(removeVowels("ant")).toBe("nt");
  expect(removeVowels("unt")).toBe("nt");
  expect(removeVowels("uit")).toBe("t");
  expect(removeVowels("ent")).toBe("nt");
  expect(removeVowels("IaiAz")).toBe("z");
});
