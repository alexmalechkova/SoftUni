function demo(input) {
    let firstDiapason = Number(input[0]);
    let secondDiapason = Number(input[1]);
    let thirdDiapason = Number(input[2]);

    for (let first = 2; first <= firstDiapason; first += 2) {
        for (let second = 2; second <= secondDiapason; second++) {
            for (let third = 2; third <= thirdDiapason; third += 2) {
                if (Number.isInteger(second)) {
                    console.log(`${first} ${second} ${third}`);
                } else{
                    break;
                }
                
            }
        }
    }
}

demo(["3",
"5",
"5"]);
