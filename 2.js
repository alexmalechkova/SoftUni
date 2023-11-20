//  4 5min
function exam(input) {

let maxBadGrade = Number(input[0]);
let command = input[1];
let i = 2;

let totalGrades = 0;
let badGrade = 0;
let gradeSum = 0;
let lastProblem = '';
while (command !== `Enough`) {
    lastProblem = command;
    let grade = Number(input[i]);
    i++
    if (grade <= 4) {
        badGrade++;

    }
    if (badGrade === maxBadGrade) {
        console.log(`You need a break, ${badGrade} poor grades.`);
        break;
    }
    totalGrades++;
    gradeSum += grade;
    
    command = input[i];
    i++;
}
 if (command === `Enough`) {
    let averGrade = gradeSum / totalGrades;
   console.log(`Average score: ${averGrade.toFixed(2)}`);

console.log(`Number of problems: ${totalGrades}`);

console.log(`Last problem: ${lastProblem}`);
 }

}
exam

(["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough"]);