function train(input) {
    let judgeCount = Number(input[0]);
    let command = input[1];
    let i = 2;
    let totalGradeSum = 0;
        let totalGradeCount = 0;
    while (command !== `Finish`) {
        let presentationName = command;
        gradeSum = 0;
        
        for (let count = 1; count <= judgeCount; count++) {
            let presentationGrade = Number(input[i]);
            i++;
            gradeSum += presentationGrade;
        }
        let averageGrade = gradeSum / judgeCount;
        console.log(`${presentationName} - ${averageGrade.toFixed(2)}.`);
        totalGradeSum += averageGrade;
        totalGradeCount++;
        command = input[i];
        i++;
    }
    console.log(`Student's final assessment is ${(totalGradeSum / totalGradeCount).toFixed(2)}.`);
}

train(["3",

    "Arrays",

    "4.53",

    "5.23",

    "5.00",

    "Lists",

    "5.83",

    "6.00",

    "5.42",

    "Finish"]);