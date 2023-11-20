function magicNum(input){
let start = Number(input[0]);
let end = Number(input[1]);
let magicNum = Number(input[2]);
let combination = 0;
let isValid = false
for(let first = start; first <= end; first++){
    for( let second = start; second <= end; second++){
       let sum = first + second;
       combination++;
        if(sum === magicNum){
            console.log(`Combination N:${combination} (${first} + ${second} = ${magicNum})`);
            IsValidCombination = true;
                return;
        } 
            
        } 
        if(isValid){
            break;
        }
    }
    if(!isValid){
        console.log(`${combination} combinations - neither equals ${magicNum}`);
    
}
    }

magicNum(["1", "10", "5"]);