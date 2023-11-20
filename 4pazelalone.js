function toyShop(input) {
let priceTrip = Number(input[0]);
let puzzle = Number(input[1]);
let dolls = Number(input[2]);
let bears = Number(input[3]);
let minions = Number(input[4]);
let trucks = Number(input[5]);

let moneyWons = puzzle * 2.6 + dolls * 3 + bears * 4.10 + minions * 8.20 + trucks * 2;
let totaltoys = puzzle + dolls + bears + minions + trucks;
If (totaltoys >= 50); {
   moneyWons = moneyWons * 0.75;
}
moneyWons = 0.9 * moneyWons;
let diff = Math.abs(moneyWons - priceTrip);
if (moneyWons >= priceTrip) {
    let moneyLeft = moneyWons - priceTrip;
    console.log (`Yes! ${diff.toFixed(2)} lv left.`);
} else {
    console.log (`Not enough money! ${diff.toFixed(2)} lv needed.`);
}
}
toyShop(["40.8", "20", "25", "30", "50", "10"]);