function magic(input) {
let start = Number(input[0]);
let end = Number(input[1]);
let magic = Number(input[2]);
combinationCounter = 0;
let IsValidCombination = false;
for (let first = start; first <= end; first++) {
    for (let second = start; second <= end; second++) {
        combinationCounter++;
        let sum = first + second;
        if (sum === magic) {
            console.log(`Combination N:${combinationCounter} (${first} + ${second} = ${magic})`);
        IsValidCombination = true;
            break;
        }

        
        }   if (IsValidCombination){
            break;
        }
        
    }if (!IsValidCombination) {
        console.log(`${combinationCounter} combinations - neither equals ${magic}`);
    }
}




magic(["1 ", "10", "5"])