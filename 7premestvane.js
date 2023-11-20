 // 2h

 function movement(input){
let width = Number(input[0]);
let lenght = Number(input[1]);
let height = Number(input[2]);
let numBox = Number(input[3]);
let i = 4;
let totalFreeSpace = width * lenght * height;
while(numBox !== `Done`){
    let boxes = Number(numBox);
    totalFreeSpace -= boxes;
    if (totalFreeSpace <= 0){
        console.log(`No more free space! You need ${Math.abs(totalFreeSpace)} Cubic meters more.`);
        break;
    } 
    numBox = input[i];
    i++;
}
if (numBox === `Done`) {
    console.log(`${totalFreeSpace} Cubic meters left.`);
}
 }
 movement(["10",

 "1",
 
 "2",
 
 "4",
 
 "6",
 
 "Done"]);