function bonusPoints(input) {
let points = Number(input["0"]);
bonus = 0;
if (bonus <= 100) {
    bonus = 5;
} else if (bonus <= 1000) {
    bonus = 0;
} else {
    bonus = 0.1 * points;
}
if (bonus % 2) {
    bonus = bonus + 2;
} else if (bonus % 10) {
    bonus = 0.1 * points;
}
console.log(bonus);
console.log(points + bonusPoints);
}

bonusPoints(["20"]);