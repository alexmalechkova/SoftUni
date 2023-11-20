function GodzilaVsKong(input) {
let budget = Number(input[0]);
let actors = Number(input[1]);
let priceClothes = Number(input[2]);
priceDecor = budget * 0.10;
totalClothesPrice = actors * priceClothes;
if (actors >= 150) {
totalClothesPrice = totalClothesPrice * 0.9;
}
totalFilmpPrice = priceDecor + totalClothesPrice;
if (budget > totalClothesPrice) {
    let moneyLeft = budget - totalFilmpPrice
    console.log("Action!");
    console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
} else {
    let moneyNeeded = totalFilmpPrice - budget;
    console.log("Not enough money!");
    console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)
}
}
GodzilaVsKong(["20000", "120", "55.5"]);