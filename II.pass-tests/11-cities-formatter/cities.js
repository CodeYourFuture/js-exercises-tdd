
var capitals = [
    { city: 'Paris', country: 'France' },
    { city: 'Madrid', country: 'Spain' },
    { city: 'Rome', country: 'Italy' },
];
function  formatCities(capitals,func){
return capitals.map(capital=>{
   const city = capital.city;
   const country = capital.country;
    var result = func({city, country});
    result = result + '!';
    return result;
})
}


module.exports =  formatCities;