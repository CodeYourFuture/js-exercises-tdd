const removeVowels = require("./remove-vowels");

test("remove vowels from word", function() {
  var input = removeVowels("samuel");
  var result = "s_m__l";
  expect(result).toBe(input);
});

test("remove vowels from word", function() {
  var input = removeVowels("marco");
  var result = "m_rc_";
  expect(result).toBe(input);
});

test("remove vowels from word", function() {
  var input = removeVowels("Supercalifragilisticexpialitocious");
  var result = "S_p_rc_l_fr_g_l_st_c_xp__l_t_c___s";
  expect(result).toBe(input);
});

test("remove vowels from word", function() {
  var input = removeVowels("CIAO");
  var result = "C___";
  expect(result).toBe(input);
});
