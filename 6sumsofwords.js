function sumsOfWords(input) {
    let targetWord = input[0];
    let sum = 0;

    for (let index = 0; index < targetWord.length; index++) {
        let currentSymbol = targetWord[index]; //тука всяка буква се изписва на отделен ред ако го зададем на козолата

        switch (currentSymbol) {
            case `a`: sum += 1; break;
            case `e`: sum += 2; break;
            case `i`: sum += 3; break;
            case `o`: sum += 4; break;
            case `u`: sum += 5; break;

        }


    }

console.log(sum);

}
sumsOfWords(["bamboo]"])