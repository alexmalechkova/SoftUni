function commission(input) {
let city = input[0];
let sells = Number(input[1]);
let bonus = 0;
switch (city) {
    case `Sofia`:
        if (sells < 0) {
            console.log(`error`);
        }
        else if (sells <=500) {
            bonus = 0.05 * sells;
        } else if (sells >= 500 && sells <= 1000) {
            bonus = 0.07 * sells;
        } else if (sells >= 1000 && sells <= 10000) {
            bonus = 0.08 * sells;
        } else if (sells > 10000) {
            bonus = 0.12 * sells;
        }
        break;
        case `Varna`:
            if (sells < 0) {
                console.log(`error`);
            }
            else if (sells <=500) {
             bonus = 0.045 * sells;
         } else if (sells >= 500 && sells <= 1000) {
             bonus = 0.075 * sells;
         } else if (sells >= 1000 && sells <= 10000) {
             bonus = 0.10 * sells;
         } else if (sells > 10000) {
             bonus = 0.13 * sells;
         }
         break;
         
         case `Plovdiv`:
            if (sells < 0) {
                console.log(`error`);
            }
            else if (sells <=500) {
                bonus = 0.055 * sells;
            } else if (sells >= 500 && sells <= 1000) {
                bonus = 0.08 * sells;
            } else if (sells >= 1000 && sells <= 10000) {
                bonus = 0.12 * sells;
            } else if (sells > 10000) {
                bonus = 0.145 * sells;
            }
            break;
        

default:
console.log(`error`);
}

if (sells < 0) {
    console.log(`erro`);
} else if ()
        }
        // youtube video 
        
commission(["Kaspichan", "499.99"]);