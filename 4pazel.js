function toyShop(input) {
    let priceTrip = Number(input[0]);
    let puzzle = Number(input[1]);
    let toys = Number(input[2]);
    let bears = Number(input[3]);
    let minion = Number(input[4]);
    let trucks = Number(input[5]);
    let  moneyWon = puzzle * 2.6 + toys * 3 + bears * 4.10 + minion * 8.20 + trucks * 2;
    let toysCount = puzzle + toys + bears + minion + trucks;
    if (toysCount >= 50) {
        moneyWon = moneyWon * 0.75;
    }
        moneyWon = 0.9 * moneyWon;
        let diff = Math.abs(moneyWon - priceTrip);
    if (moneyWon >= priceTrip) {
        let moneyLeft = moneyWon - priceTrip;
        console.log (`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        console.log (`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }
    }

toyShop(["40.8", "20", "25", "30", "50", "10"]);