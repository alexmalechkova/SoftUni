function piramid(input){
let n = Number(input[0]);
let isValid = false;
let command = 1;
let print = '';
for(let rows = 1; rows <= n; rows++) {
    for(let cols = 1; cols <= rows; cols++){
    if(command > n) {
        isValid = true;
        break;
    }
    print += command + " ";
    command++;
}
console.log(print);
print = "";
if(isValid) {
    break;
}
}
}
piramid(["7"]);