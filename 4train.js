function trainTheTrainers(input) {
    let juryCount = Number(input[0]);
    let index = 1;
    let totalGrade = 0;
    let presentationsCount = 0;

    while (true) {
        let presentation = input[index];
        if (presentation === "Finish") {
            break;
        }

        let averageGrade = 0;
        for (let i = 1; i <= juryCount; i++) {
            let grade = Number(input[index + i]);
            averageGrade += grade;
            totalGrade += grade;
        }
        averageGrade /= juryCount;
        presentationsCount++;

        console.log(`${presentation} - ${averageGrade.toFixed(2)}.`);
        index += juryCount + 1;
    }

    if (presentationsCount > 0) {
        let finalGrade = (totalGrade / (presentationsCount * juryCount)).toFixed(2);
        console.log(`Student's final assessment is ${finalGrade}.`);
    }
}
trainTheTrainers((["2",

"While-Loop",

"6.00",

"5.50",

"For-Loop",

"5.84",

"5.66",

"Finish"]))