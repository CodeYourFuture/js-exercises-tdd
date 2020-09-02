function paintCars(array, color) {
    // I didn't understand what is required to be done so I hardcoded the index
    newarray = [...array]
    newarray[0] = { ...newarray[0], colour: color }
    return newarray
}
module.exports = paintCars;