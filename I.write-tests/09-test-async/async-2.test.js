const getRepos = require("./async-2");
const fetcher = require("./fetcher");
jest.mock("./fetcher");
var url = "https://api.github.com/users/kabaros/repos";
test("gets a list of repositories names (with mock)", function() {
  expect.assertions(1);
  // arrange
  fetcher.mockResolvedValue([{ name: "js-exercises" }]); 
  // act
  return getRepos(url).then(function(result) {
    // assert
    expect(result).toContain("js-exercises");
  });
});

test("a more deterministic test", function() {
  expect.assertions(1);
  // act
  return getRepos(url).then(function (result) {
    // assert
    expect(result).toContain("js-exercises");
  });
});
