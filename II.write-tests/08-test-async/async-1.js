const fetch = require('node-fetch')

const getRepos = async function (repoName) {
  const response = await fetch(repoName)

  if (!response.ok) {
    const message = `HTTP error! Status: ${response.status}`
    throw new Error(message)
  }

  const data = await response.json()

  return data.map(rep => rep.name)
}

module.exports = getRepos
