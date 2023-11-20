function equalNum(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let print = '';
    for (let i = first; i < second; i++) {
        let currNum = '' + i;
        let oddsum = 0;
        let evenSum = 0;
        for (j = 0; j < currNum.length; j++) {
            let digit = Number(currNum.charAt(j));
            if (j % 2 === 0) {
                evenSum += digit
            } else {
                oddsum += digit;
            }
        }
        if (oddsum === evenSum) {
            print += `${i} `;
        }
    }
    console.log(print);
}
equalNum(["100000", "100050"]);