//A bit confused as to what this code is doing. It all passed the test without any change from me.
const fetch = require("node-fetch");

const getRepos = function(repoName) {
  return fetch(repoName)
    .then(data => data.json())
    .then(function(response) {
      return response.map(function(rep) {
        return rep.name;
      });
    });
};

module.exports = getRepos;
