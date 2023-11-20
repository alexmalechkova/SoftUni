function holiday(input) {
    let needeMoney = Number(input[0]);
    let savedMoney = Number(input[1]);
    let previousCommand = 'spend';
    let counter = 0;
    let days = 0;
    for (let i = 2; i < input.length; i += 2) {
        let command = input[i];
        let money = Number(input[i + 1])
        days++;

        if (command === `spend`) {

            if (money > savedMoney) {
                savedMoney = 0;
            } else {
                savedMoney -= money;
            }

            if (previousCommand === command) {
                counter++;
            } else {
                counter = 0;
            }

            if (counter === 5) {
                console.log(`You can't save the money.`)
                console.log(days);
                break;
            }
        } else {
            previousCommand = command;
            savedMoney += money;
        }

    }
    if (savedMoney >= needeMoney) {
        console.log(`You saved the money for ${days} days.`);
    } else {
        console.log(`You can't save the money.`)
        console.log(days);

    }

}
holiday(["2000",

    "1000",

    "spend",

    "1200",

    "save",

    "2000"]);