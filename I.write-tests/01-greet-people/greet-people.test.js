
var greetPeople = require('./greet-people.js');
describe("greet people function", ()=> {
    test("greetPeople",()=>{
        var mentors=['Irina', 'Ashleigh', 'Etza'];
        var result=greetPeople(mentors);
        expect(result).toEqual('HelloIrinaAshleighEtza')
    })
});

