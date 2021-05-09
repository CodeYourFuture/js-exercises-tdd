const getRepos = require("./async-1")

describe('Get repos function', function() {
  test('gets a list of repositories names', function() {
    // arrange
    const url = 'https://api.github.com/users/kabaros/repos'
    // act
    return getRepos(url).then(function(result) {
      // assert
      expect(result).toContain('dom-ajax-repo')
    })
  })

  test('it returns an error if url cannot be found', function() {
    const url = 'https://api.github.com/users/count-bin-face'

    try {
      getRepos(url).then(result => result)
    }
    catch(err) {
      expect(err).toEqual('HTTP error! Status: 404')
    }
  })
})
