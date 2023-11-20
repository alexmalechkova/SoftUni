//05min
function library(input) {

let book = input[0];
let command = 1;
let i = 2;
let checkedBook =0;
while (command !== `No More Books`) {
    if (command = book) {
        console.log(`You checked ${command} books and found it.`);
    
    }
    else if (command !== book) {
        checkedBook = input(i);
        console.log(`The book you search is not here!`);
        console.log(`You cheked ${checkedBook} books.`);
    }
    command = input(i);
    i++;
}

}
library(["The Spot","Hunger Games","Harry Potter","Torronto","Spotify","No More Books"]);