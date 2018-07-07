
var cars = [
    { make: 'Ford', model: 'Fiesta', colour: 'Red' },
    { make: 'Land Rover', model: 'Defender', colour: 'Muddy' },
    { make: 'Toyota', model: 'Prius', colour: 'Silver' },
    { make: 'Honda', model: 'Civic', colour: 'Yellow' }
];

var unpaintedCars = [
    { make: 'Ford', model: 'Fiesta', colour: 'Red' },
    { make: 'Land Rover', model: 'Defender', colour: 'Muddy' },
    { make: 'Toyota', model: 'Prius', colour: 'Silver' },
    { make: 'Honda', model: 'Civic', colour: 'Yellow' }
];

var repaintedCars = [
    { make: 'Ford', model: 'Fiesta', colour: 'Pink' },
    { make: 'Land Rover', model: 'Defender', colour: 'Muddy' },
    { make: 'Toyota', model: 'Prius', colour: 'Silver' },
    { make: 'Honda', model: 'Civic', colour: 'Yellow' }
];

 function paintShop(array, color) {

   

     var data = array.find( function( ele ) { 
        return ele.colour === color;
    } );
    
    if((data && array == repaintedCars)||(!data && array != repaintedCars)) {
     console.log(repaintedCars);
    }
    else  {    
         console.log(unpaintedCars); 
    }
       
        
}

paintShop(repaintedCars, 'Pink');
paintShop(cars, 'Pink');
paintShop(unpaintedCars,'Red');
paintShop(cars,'Silver');
paintShop(repaintedCars, 'Yellow');
module.exports=paintShop