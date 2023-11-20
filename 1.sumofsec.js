function sumOfSec(input) {

let pers1 = Number(input[0]);
let pers2 = Number(input[1]);
let pers3 = Number(input[2]);

let sec = pers1 + pers2 + pers3;
let min = Math.floor(sec / 60);
let restSec = sec % 60;

if(restSec < 10) {
    console.log(`${min}:0${restSec}`);
} else {
    console.log(`${min}:${restSec }`)
}
if (min === 24){
    console.log(`0:${restSec}`)
}


}
sumOfSec(["14", "12", "10"]);