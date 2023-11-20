//45min
function library(input) {

    let book = input[0];
    let command = input[1];
    let i = 2;
    let checkedBook = 0;
    while (command !== `No More Books`) {
        if (command === book) {
            console.log(`You checked ${checkedBook} books and found it.`);
        break;
        } else {
            checkedBook++;
        
        command = input[i];
        i++
    }
}
if (command === `No More Books`) {
   
    console.log(`The book you search is not here!`);
    console.log(`You checked ${checkedBook} books.`);
}
}
library(["Troy",

"Stronger",

"Life Style",

"Troy"]);