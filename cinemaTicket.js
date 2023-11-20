function cinema(input) {
let command = input[0];
let i = 1;
let studenType = 0;
let standartType = 0;
let kidType = 0;
while(command !== 'Finish') {
    let movieName = command;
    let freePlaces = Number(input[i]);
    i++;
    let command1 = input[i];
    i++;
    let placeTaken = 0;
    while(command1 !== 'End'){
        if(command1 === 'student'){
            studenType++;
        } else if (command1 === 'standart') {
            standartType++;
        } else {
            kidType++;
        }
        if(placeTaken === freePlaces);
        break;
    }
        placeTaken++;
        command = input[i];
        i++;
    }
    let totalPlacedTaken = standartType + studenType + kidType;
    let percentageOftaken = totalPlacedTaken / freePlaces;
    command = input[i];
    i++;

    console.log(`Total tickets; ${placeTaken}`);
}

cinema(["The Matrix",

"20",

"student",

"standard",

"kid",

"kid",

"student",

"student",

"standard",

"student",

"End",

"The Green Mile",

"17",

"student",

"standard",

"standard",

"student",

"standard",

"student",

"End",

"Amadeus",

"3",

"standard",

"standard",

"standard",

"Finish"]);