const fetch = require("node-fetch");

const getRepos = function(repoName) {
  console.log(getRepos)
  return fetch(repoName)
    .then(data => data.json())
    .then(function(response) {
      return response.map(function(rep) {
        return rep.name;
      });
    });
};

module.exports = getRepos;
