function market(input) {
    let budjet = Number(input[0]);
        let videocardNumber = Number(input[1]);
        let processorNumber = Number(input[2]);
        let RamNumber = Number(input[3]);

    SumsVideoCard = videocardNumber * 250;
    pricePerOnePRocessor = SumsVideoCard * 0.35;
    pricePerRam = SumsVideoCard * 0.10;
    totalSumPerProducts = videocardNumber * 250 + pricePerOnePRocessor * processorNumber + pricePerRam * RamNumber;
        if (videocardNumber >= processorNumber) {
            totalSumPerProducts = totalSumPerProducts * 0.85;
        }
        if (budjet >= totalSumPerProducts) {
            leftMoney = budjet - totalSumPerProducts;
            console.log(`You have ${leftMoney.toFixed(2)} leva left!`)
            
        } else {
            needMoney = totalSumPerProducts - budjet;
        console.log(`Not enough money! You need ${needMoney.toFixed(2)} leva more!`)
        }
}
market(["920.45", "3", "1", "1"]);