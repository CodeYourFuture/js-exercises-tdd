//A bit confused as to what this code is doing. It all passed the test without any change from me.

const fetch = require("node-fetch");

const fetcher = function(repoName) {
  return fetch(repoName).then(data => data.json());
};

module.exports = fetcher;
