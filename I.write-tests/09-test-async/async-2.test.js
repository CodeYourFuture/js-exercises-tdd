const getRepos = require("./async-2");
const fetcher = require("./fetcher");
jest.mock("./fetcher");

test("gets a list of repositories names (with mock)", function () {
  // arrange
  fetcher.mockResolvedValue([{ name: "js-exercises" }]);
  var url = "https://api.github.com/users/kabaros/repos";

  // act
  return getRepos(url).then(function (result) {
    // assert
    expect(result).toContain("js-exercises");
  });
});

test("a more deterministic test", function () {
  // arrange
  fetcher.mockResolvedValue([{ name: "js-exercises" }]);
  var url = "https://api.github.com/users/kabaros/repos";

  function nameFinder(array, nameToFind) {
    return array.find(nameToFind);
  }
  // act
  getRepos(url).then(result => {

    // assert
    expect(nameFinder(result, "js-exercises")).toBe(true)
  });
});