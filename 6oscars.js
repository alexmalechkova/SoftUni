function oscar(input){
let actorName = input[0];
let academyPoints = Number(input[1]);
let judgeCount = Number(input[2]);
let totalPoint = 0;

for (let i = 3; i < input.length; i+=2) {
    let judgeName = input[i];
    let judgePoints = Number(input[i+1]);
let pointsWon = judgeName.length * judgePoints / 2;
academyPoints += pointsWon
if (academyPoints > 1250.5) {
    console.log(`Cobgratulation, ${actorName} got a nominee for leading role with ${academyPoints}`);
    break;
}
} 
if (academyPoints <= 1250.5) {
    let pointsNeed = 1250.5 - academyPoints;
    console.log(`Sorry, ${actorName} you need ${pointsNeed} more!`);
}
}

oscar(["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"])