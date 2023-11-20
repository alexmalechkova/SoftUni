function NumSimOrNonSimple(input) {
let i = 0
let command = input[i];
i++;
let numPrime = 0;
let numNonPrime = 0;


    while (command !== 'stop') {
        let num = Number(command);
        
        if(num < 0) {
            console.log(`Number is negative.`);
            command = input[i];
            i++;
            continue;
        }
        let isValid = true;
        for(divider = 2;divider < num; divider++){
        if (num % divider === 0){
            isValid = false;
            break;
        }
    }
        if(isValid){
            numPrime += num;
            
        } else {
            numNonPrime += num;
           
        }
    
command = input[i];
i++;
        
}
    console.log(`Sum of all prime numbers is: ${numPrime}`);
        console.log(`Sum of all non prime numbers is: ${numNonPrime}`);
}
NumSimOrNonSimple(["0", "-9", "0", "stop"]);