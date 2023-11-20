function num(input) {
    let index = 0;
    let command = input[index];
    index++;
    let sumPrime = 0;
    let sumNonSimple = 0;
 
    while (command !== 'stop') {
        let num = Number(command);
        let isPrime = true
        if (num < 0){
            console.log(`Number is negative.`);
            command = input[index];
            index++;
            
            continue;
            
        }
        for (let divisor = 2; divisor < num; divisor++) {
            if (num % divisor === 0) {
                isPrime = false;
                break
            } 
            }
            if (isPrime){
                sumPrime += num;
            } else {
                sumNonSimple += num;
            } 
            
            command = input[index];
            index++;
        

    } console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonSimple}`);


}
num(["30",

"83",

"33",

"-1",

"20",

"stop"]);