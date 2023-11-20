function coins(input){
let command = Number(input[0]);
let i = 1;
let coins = 0;
let cent = Math.round(command*100);
while(cent > 0) {
    if(cent > 200){
    cent -= 200;
} else if(cent > 100) {
    cent -= 100;
} else if(cent > 50) {
    cent -= 50;
} else if(cent > 20) {
    cent -= 20;
} else if(cent > 10) {
    cent -= 10;
} else if(cent > 5) {
    cent -= 5;
} else if(cent > 2) {
    cent -= 2;
} else if(cent -= 1) {
    cent -= 1;
}
coins++;
}
console.log(coins);
}
coins(["0.56"]);