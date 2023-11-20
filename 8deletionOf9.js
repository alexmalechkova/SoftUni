function del9(input) {
    let firstDiapason = Number(input[0]);
    let secondDiapason = Number(input[1]);
    let sum = 0;
    for (let i = firstDiapason; i <= secondDiapason; i++) {
        if (i % 9 === 0){
            sum += i;
        }
    }
    console.log(`The sum: ${sum}`);
    for (let i = firstDiapason; i<= secondDiapason; i++) {
        if (i % 9 === 0) {
            console.log(i);
        }
    }
}
    del9(["100", "200"]);
        
           