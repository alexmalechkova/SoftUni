//1.50min
function workingTime(input) {
let hours = Number(input[0]);
let day = input[1];
switch (day){
case `Monday`:
case `Tuesday`:
case `Wednesday`:
case `Thursday`:
case `Friday`:
case `Saturday`:
    if (hours >= 10 && hours <= 18) {
        console.log(`open`);
} 
break;
case `Sunday`:
console.log(`closed`)
break;
default:
    console.log(`closed`);
    break;
}
}



workingTime(["11", "Monday"]);
