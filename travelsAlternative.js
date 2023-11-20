function travel(input){
let i = o;
let command = input[i];
i++;
while(command !== `End`){
    let destination = command;
    let savedMoney = 0;
    let sum = Number(input[i]);
    i++;
    while(savedMoney < sum){
    let Money = Number(input[i]);
    i++;
    savedMoney += Money;
    }
    console.log(`Going to ${destination!`);
}
}
travel(["Greece",

"1000",

"200",

"200",

"300",

"100",

"150",

"240",

"Spain",

"1200",

"300",

"500",

"193",

"423",

"End"]);