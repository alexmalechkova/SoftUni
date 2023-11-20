function library(input) {
    let wantedBook = input[0];
    let i = 1;
    let command = input[i];
    let checkedBooks = 0;
    let isBook = false;
    while(command !== `No More Books`) {
        if (command === wantedBook) {
            console.log(`You checked ${checkedBooks} books and found it.`);
            isBook = true;
            break;
        } 
        checkedBooks++;
        i++;
        command = input[i];
    }
    if (!isBook) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${checkedBooks} books.`);
    }

}
library(["Troy",

"Stronger",

"Life Style",

"Troy"]);
// (["Bourne",

// "True Story",

// "Forever",

// "More Space",

// "The Girl",

// "Spaceship",

// "Strongest",

// "Profit",

// "Tripple",

// "Stella",

// "The Matrix",

// "Bourne"])