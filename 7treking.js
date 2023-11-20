function trking(input) {
let groupCount = Number(input[0]);
let musalaCount = 0;
let monblanCount = 0;
let KilimandjCount = 0;
let k2Count = 0;
let everestCount = 0;
let totalPeople = 0;
for (let i = 1; i <= groupCount; i++){
    let peopleCount = Number (input[i]);
    if (peopleCount <= 5){
        musalaCount += peopleCount;
    } else if(peopleCount <= 12) {
        monblanCount += peopleCount;
    } else if (peopleCount <= 25) {
        KilimandjCount += peopleCount;
    } else if (peopleCount <= 40) {
        k2Count += peopleCount;
    } else {
        everestCount += peopleCount;
    }
    totalPeople += peopleCount;
}
let musalapercent = (musalaCount / totalPeople) * 100;
let monblantpercent = (monblanCount / totalPeople) * 100;
let kilimandjpercent = (KilimandjCount / totalPeople) * 100;
let k2percent = (k2Count / totalPeople) * 100;
let everestpercent = (everestCount / totalPeople) * 100;

console.log(`${musalapercent.toFixed(2)}%`);
console.log(`${monblantpercent.toFixed(2)}%`);
console.log(`${kilimandjpercent.toFixed(2)}%`);
console.log(`${k2percent.toFixed(2)}%`);
console.log(`${everestpercent.toFixed(2)}%`);

}
trking(["5", "25", "41", "31", "250", "6"])