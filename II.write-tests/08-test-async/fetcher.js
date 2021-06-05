const fetch = require('node-fetch')

const fetcher = async function(repoName) {
  const data = await fetch(repoName)
  return data.json()
}

module.exports = fetcher
