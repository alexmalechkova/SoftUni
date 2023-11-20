function sumOfNumbers(input) {
let sum = 0;
let n = (input[0]);
for(let i = 0; i < n.length; i++){
    //console.log(n[i]); //изписва всяко число на отелене ред
    let curNum = Number(n[i]);
    sum += curNum;

}
console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["1234"]);