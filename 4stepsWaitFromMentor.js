//1.06h

function gabi(input){
let command = input[0];
let score = 10000;
let totalSteps = 0;
let i = 1;
while (totalSteps !== `Going home`) {
    let steps = Number[command];
    totalSteps += steps;
    if (totalSteps >= score) {
        
        let moreSteps = totalSteps - score;
        console.log(`Goal reached! Good job!`);
        console.log(`${moreSteps} steps over the goal`);
        break;
    } 
  
    command = input[i];
    i++;

    
}
if (command === `Going home`){
    let stepGoingHome = Number(input[i]);
    totalSteps += stepGoingHome;
    if (totalSteps >= score) {
        
        let moreSteps = totalSteps - score;
        console.log(`Goal reached! Good job!`);
        console.log(`${moreSteps} steps over the goal`);
        
    } else {
       let diff = score - totalSteps;
        console.log(`${diff} mores steps to reach goal.`);
    }

}
}
gabi(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]); 