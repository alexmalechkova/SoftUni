function lunchBreak(input) {
let nameSerial = input[0];
let timeSerial = Number(input[1]);
let totalBreak = Number(input[2])
timeForLunch = (1 / 8) * totalBreak;
timeForRest = (1 / 4) * totalBreak;
planedTime = timeForLunch + timeForRest;
leftTime = totalBreak - planedTime;
if (leftTime >= timeSerial) {
    lesttime1 = leftTime - timeSerial
    console.log(`You have enough time to watch ${nameSerial} and left with ${Math.ceil(lesttime1)} minutes free time.`)
} else {
    lesttime2 = timeSerial - leftTime;
    console.log(`You don't have enough time to watch ${nameSerial}, you need ${Math.ceil(lesttime2)} more minutes.`)
}
}
lunchBreak(["Game of trones", "60", "96"]);