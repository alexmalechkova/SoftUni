// 25min
function bonusPoints(input) {
let bonus = 0
num = Number(input[0]);
if(num <= 100) {
    bonus = 5;
} else if (num < 1000) {
    bonus = 0.2 * num;
} else {
    bonus = 0.1 * num;
}
if (num % 2 === 0) {
bonus = bonus + 1;
}
if (num % 10 === 5) {
    bonus = bonus + 2;
}
console.log(bonus);
console.log(num + bonus);
}

bonusPoints(["15875"]);