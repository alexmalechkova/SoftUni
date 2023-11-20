function demo(input){
    let days = Number(input[0]);
    let totalLiters = 0;
    let totalDegrees = 0;
    let i = 1;

    while (i <= days * 2) {
        let litres = Number(input[i]);
        i++;
        let gradus = Number(input[i]);
        totalLiters += litres;
        totalDegrees += (litres * gradus);
        i++;
    }

    let averageDegrees = totalDegrees / totalLiters;

    console.log(`Liter: ${totalLiters.toFixed(2)}`);
    console.log(`Degrees: ${averageDegrees.toFixed(2)}`);

    if (averageDegrees < 38) {
        console.log("Not good, you should baking!");
    } else if (averageDegrees >= 38 && averageDegrees <= 42) {
        console.log("Super!");
    } else {
        console.log("Dilution with distilled water!");
    }
}

demo(["3",
"100",
"45",
"50",
"55",
"150",
"36"]);