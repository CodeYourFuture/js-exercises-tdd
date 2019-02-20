var removeVowels =require("./remove-vowels");
test('remove vowels from word', function () {

    // Arrange
    
    var result = removeVowels("samuel");
     // Act
    
    // Assert
    expect(result).toBe("sml");
   
})

// removeVowels = ["bongo drums", "guitar",
//     "flute", "double bass", "xylophone", "piano"];
// var stringsWithOutVovels = removeVowels.map(function (item) {
//     return item.replace(/[aeiou]/g, '');
//     console.log(stringsWithOutVovels);