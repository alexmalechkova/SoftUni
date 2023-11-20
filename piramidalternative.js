function pir(input){
let num = Number(input[0]);
let curN = 1
let curRow = 1;
let curRowNums = 0;
let result = '';
while(curN <= num) {
    if(curRowNums < curRow) {
        result += `${curN} `;
        curRowNums++;
    } else {
        result += `\n${curN} `;
    curRow++;
    curRowNums = 1;
    } 
    
    
    curN++;
}
console.log(result);
}
pir(["15"])