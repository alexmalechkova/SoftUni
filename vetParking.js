function demo(input) {
let days = Number(input[0]);
let hours = Number(input[1]);
let dayCounter = 0;
let hourCounter;
let totalCost = 0;
let totalCostPerDay = 0;

for(let day = 1; day <= days; day++){
    dayCounter++;
    let dayTax = 0;
    for(let hour = 1; hour <= hours; hour++){
     hourCounter++;
     
     if(day % 2 !== 0 && hour % 2 === 0){
        dayTax += 1.25;
     } else if(day % 2 === 0 && hour % 2 !== 0){
        dayTax += 2.5;
     } else{
        dayTax += 1;
     }
    
    }
    console.log(`Day: ${dayCounter} - ${dayTax.toFixed(2)} leva`);
    totalCost += dayTax
}
console.log(`Total: ${totalCost.toFixed(2)} leva.`);
}
demo(["2", "5"])