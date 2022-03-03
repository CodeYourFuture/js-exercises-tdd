const getRepos = require("./async-1");

test("gets a list of repositories names", function () {
  // arrange
  var url = "https://api.github.com/users/kabaros/repos";
  // act
  getRepos(url).then(function (result) {
    // assert
    try {
      expect(result).toContain("js-exercises");
      expect(result).toContain("dom-ajax-repo");
    } catch (error) {
      if(error) throw error;
    }

  });
});
