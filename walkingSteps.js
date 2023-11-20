function walking(input){
    let targetSteps = 10000;
    let i = 0;
    let command = input[i];
    let totalSteps = 0;
    let diff = 0;
    while(i < input.length) {
       
        if(command === `Going home`) {
            let goingHomeSteps = Number(input[i+1])
            totalSteps += goingHomeSteps
            break;
        } 
        let steps = Number(command);
        totalSteps += steps;
        i++;
        command = input[i];
    }
    if(totalSteps < targetSteps) {
        diff = targetSteps - totalSteps;
        console.log(`${diff} more steps to reach goal.`);
    } else {
        diff = totalSteps - targetSteps;
        console.log(`Goal reached! Good job!`);
        console.log(`${diff} steps over the goal!`);

    }
}
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);