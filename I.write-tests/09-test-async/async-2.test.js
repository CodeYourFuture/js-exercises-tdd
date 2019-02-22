const getRepos = require('./async-2')
const fetcher = require('./fetcher')

test('gets a list of repositories names (with mock)', function () {
  // arrange
  jest.mock('./fetcher')
  fetcher.mockResolvedValue([{ name: 'js-exercises' }])
  var url = 'https://api.github.com/users/kabaros/repos'

  // act
  return getRepos(url).then(function (result) {
    // assert
    expect(result).toContain('js-exercises')
  })
})

test('a more deterministic test', function () {
  var url = 'https://api.github.com/users/kabaros/repos'
  // const expection = 'aws-lambda-starter'
  // act
  // fetcher.mockResolvedValue([{ name: 'aws-lambda-starter' }])
  return getRepos(url).then(function (response) {
    // Assert
    expect(response).toContain('aws-lambda-starter')
  })
})
