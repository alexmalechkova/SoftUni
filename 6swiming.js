function record(input) {
let recordSec = Number(input[0]);
let mettersLong = Number(input[1]);
let TimeInSecForOneMetters = Number(input[2]);

totalTimeSwim = mettersLong * TimeInSecForOneMetters;
timeBreaksEvery15m = 12.5;
let delaysCount = Math.floor(mettersLong / 15);
totalTimeAfterBreaks = delaysCount * timeBreaksEvery15m;

grandTotalTime = totalTimeSwim + totalTimeAfterBreaks;

if (recordSec <= grandTotalTime) {
    needTime = grandTotalTime - recordSec
    console.log(`No, he failed! He was ${needTime.toFixed(2)} seconds slower.`)
} else
console.log(`Yes, he succeeded! The new world record is ${grandTotalTime.toFixed(2)} seconds.`)
}
record(["55555.67", "3017", "5.03",])