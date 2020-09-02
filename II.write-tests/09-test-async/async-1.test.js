const getRepos = require("./async-1");

test("gets a list of repositories names", function () {
  // arrange
  var url = "https://api.github.com/users/kabaros/repos";
  // act
  return getRepos(url).then(function (result) {
    // assert
    expect(result).toContain("master-reference");
    expect(result).toContain("sword");
  });
});
