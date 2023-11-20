function timeMinAndHour(input) {
let hours = Number(input[0]);
let mins = Number(input[1]);
totalMin = hours * 60 + mins + 15;
totalHours = Math.floor(totalMin / 60);
restMin = (totalMin % 60);
let result = "";
if (totalHours === 24) {
    totalHours = 0;
}
if (restMin < 10) {
    result = (`${totalHours}:0${restMin}`);
} else {
    result = (`${totalHours}:${restMin}`);
}
console.log(result);
}
timeMinAndHour(["0", "01"]);