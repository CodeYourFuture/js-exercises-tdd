


 var carsSold = [
    { make: 'Ford', model: 'Fiesta', colour: 'Red', price: 5999 },
    { make: 'Land Rover', model: 'Defender', colour: 'Muddy', price: 12000 },
    { make: 'Toyota', model: 'Prius', colour: 'Silver', price: 6500 },
    { make: 'Honda', model: 'Civic', colour: 'Yellow', price: 8000 },
    { make: 'Ford', model: 'Fiesta', colour: 'Red', price: 15000 },
    { make: 'Land Rover', model: 'Discovery', colour: 'Blue', price: 9000 },
    { make: 'Ford', model: 'Fiesta', colour: 'Green', price: 2000 }
];
   


    // const sales = carsSold=>{
    //     var totals=[];
    //     carsSold.map(car=>{
    //         const make = car.make;
    //         const price= car.price;
            
          
    //        carsSold.map((car2,index)=>{
    //            if (make === car2[index].make){
    //                price = price + car2[index].price
    //            }
               
    //        });
    //        totals.push({make : price});
    //     });

    //     return totals
    
    // }    
    // console.log(sales);

       
         
          
   
     
       
   

      var newList= carsSold.map(car=>{ 
            var list = {};
            return list = {make :  car.make , price : car.price}
         });
         
// // var totals = newList.
         console.log(newList);

       var groupedList = carsSold.reduce((grouped,car)=>{
            grouped[car.make] = grouped[car.make] || [];
             
          grouped[car.make].push(car.price);
            //grouped[car.make]= grouped[car.make]+car.price;
      
            return grouped;
            console.log(grouped[car.make])
        },{});

        
//       var totals = 
//           Object.values(groupedList).map((value)=>{
//            return value.reduce((sum,num)=>{
//                 return sum = sum+num;
//             });
//          });          
         
//          for (let [k,v] of Object.entries(groupedList)) {
//             console.log(`${JSON.stringify(k)}: ${JSON.stringify(v.reduce((s,n)=>{s=s+n}))}`);
//         }
       

 
     
console.log(groupedList);
    
//  console.log(totals);
    // console.log(keys);
  
   //module.exports = sales;
  
 // const filter = (array, func) => array.filter(func);
    // const carsMakes = cars=>cars.map(car=>car.make);
    // const IdenticalMakes = (car, make)=>car.make == make;
    // const makeSales = array.reduce((sum,price)=>sum+price,0);
    // const fords = filter(cars,IdenticalMakes(car,'Ford'));
    // const fordsList = carsMakes(fords);