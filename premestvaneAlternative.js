function allocation(input){
let value1 = Number(input[0]);
let value2 = Number(input[1]);
let value3 = Number(input[2]);
let totalSpace = value1 * value2 * value3;
let command = input[3];
let i = 4;
while(command !== `Done`){
    let numBox = Number(command);
    totalSpace -= numBox;
    if(totalSpace <= 0) {
        console.log(`No more free space! You need ${Math.abs(totalSpace)} Cubic meters more.`);
        break;
    }
    command = input[i];
    i++;
} 
if(command === `Done`) {
    
    console.log(`${totalSpace} Cubic meters left.`);
}
}
allocation
(["10","10","2","20", "20", "20", "20", "122"]);
