function demo(input) {
    let budget = Number(input[0]);
    let i = 1
    let command = input[i];
    let equipmentPrice = 0;
    let productCounter = 0;
    while(command !== 'Stop') {
        let product = input[i];
        i++;
        let pricePerUnit = Number(input[i]);
        productCounter++;
        if(productCounter % 3 === 0) {
            pricePerUnit = pricePerUnit/ 2;
        }
        equipmentPrice += pricePerUnit;
        budget -= pricePerUnit;
    if(budget < 0){
        console.log(`You do not have enough money !`);
        console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`);
        break;
    }
        i++;
    
        command = input[i];
    }
    if(command === "Stop"){
        console.log(`You bought ${productCounter} products for ${equipmentPrice} leva.`);
    }
}
demo(["54",

"Backpack",

"24",

"Shoes",

"45"]);
