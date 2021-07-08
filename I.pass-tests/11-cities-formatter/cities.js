function formatCities(capitals, transform){
    let result=[];
capitals.map((capital) => result.push(`${capital.city} is the capital of ${capital.country}`));
return result;
}
module.exports=formatCities;