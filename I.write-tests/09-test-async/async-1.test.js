//A bit confused as to what this code is doing. It all passed the test without any change from me.

const getRepos = require("./async-1");

test("gets a list of repositories names", function() {
  // arrange
  var url = "https://api.github.com/users/kabaros/repos";
  // act
  return getRepos(url).then(function(result) {
    // assert
    expect(result).toContain("js-exercises");
    expect(result).toContain("dom-ajax-repo");
  });
});
