const fetcher = require('./fetcher')

const getRepos = async function (repoName) {
  const response = await fetcher(repoName)

  return response.map((repo) => repo.name)
}

module.exports = getRepos
