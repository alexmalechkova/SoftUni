 function cake(input) {
let length = Number(input[0]);
let width = Number(input[1]);
let totalPieceOfCake = length * width;
let takenPieces = input[2];
let i = 2;
while (takenPieces !== `STOP`) {
    takedPc = Number(takenPieces);
    if(takedPc <= totalPieceOfCake){
        totalPieceOfCake -= takedPc
    } else {
        totalPieceOfCake -= takedPc;
        console.log((`No more cake left! You need ${Math.abs(totalPieceOfCake)} pieces more.`));
        break;
    }
    i++;
    takenPieces = input[i];
    
    }
    if (takenPieces === `STOP`){
    console.log(console.log(`${totalPieceOfCake} pieces are left.`);
}
 }
    cake(["10",

    "2",

    "2",

    "4",

    "6",

    "STOP"]);