function renevue(input){
let movieName = input[0];
let days = Number(input[1]);
let billet = Number(input[2]);
let priceTicket = Number(input[3]);
let discount = Number(input[4]);

let sumForday = billet * priceTicket;
let allday =sumForday * days;
let discounPrice = allday * (discount /100);
let total = allday - discounPrice;
console.log(`The profit from the movie ${movieName} is ${total.toFixed(2)} lv.`);

}
renevue(["Python Basics",
    "40",
    "34785",
    "10.45",
   " 14",
    ]);