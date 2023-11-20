//1.05h
function smartLili(input) {
    let age = Number(input[0]);
    let washer = Number(input[1]);
    let toyPrice = Number(input[2]);
let savedMoney = 0;
let money = 10;
for (let i = 1; i <= [age]; i++) {
    if (i % 2 == 0){
        savedMoney += (money - 1)
        money += 10;
} else {
    savedMoney += toyPrice;
}
}
if (savedMoney >= washer ){
let restMoney = savedMoney - washer;
console.log(`Yes! ${restMoney.toFixed(2)}`);
} else {
    neededMoney = washer - savedMoney
    console.log(`No! ${neededMoney.toFixed(2)}`);
}
}
smartLili(["10", "170.00", "6"]);