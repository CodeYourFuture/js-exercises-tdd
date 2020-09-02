function cities(array, func) {
    return array.map(item => func(item))
}
module.exports = cities;