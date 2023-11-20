function demo(input) {
    let firstLimit = Number(input[0]);
    let secondLimit = Number(input[1]);
    let thirdLimit = Number(input[2]);
    let result = '';

    for (let first = 2; first <= firstLimit; first++) {
        for (let second = 2; second <= secondLimit; second++) {
            for (let third = 2; third <= thirdLimit; third++) {
                if ((first % 2 === 0 || third % 2 === 0) && second % 2 !== 0) {
                    result += `${first} ${second} ${third}\n`;
                }
            }
        }
    }

    console.log(result.trim());
}
demo(["3",
"5",
"5"]);