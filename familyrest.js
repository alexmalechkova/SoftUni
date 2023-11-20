function demo(input){
let budget = Number(input[0]);
let coutDays = Number(input[1]);
let pricePernight = Number(input[2]);
let percentAdditionalCost = Number(input[3]);

if(coutDays > 7){
    pricePernight = pricePernight * 0.95;
}
let costNight = pricePernight * coutDays;
let additonalCost = budget * (percentAdditionalCost / 100);
let totalCost = additonalCost + costNight;
if(budget <= totalCost){
    console.log(budget - totalCost);
} else{
    console.log(Math.abs(budget - totalCost).toFixed(2));
}
}
demo(["800.50", "8", "100", "2"]);