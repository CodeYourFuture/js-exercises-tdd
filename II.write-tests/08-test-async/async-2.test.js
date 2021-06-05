const getRepos = require('./async-2')
const fetcher = require('./fetcher')
jest.mock('./fetcher')

test('gets a list of repositories names (with mock)', function () {
  // arrange
  fetcher.mockResolvedValue([{ name: 'js-exercises' }])
  const users = ['kabaros', 'codeyourfuture']

  // act
  return users.forEach((user) => {
    return getRepos(`https://api.github.com/users${user}/repos`).then(function (
      result
    ) {
      expect(result).toContain('js-exercises')
    })
  })
})
