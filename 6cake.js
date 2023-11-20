function cake(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let qtyCake = lenght * width;
    let taked = Number(input[2])
    let i = 2;

    while (taked !== `Stop`) {
        let takedPc = Number(taked);

        if (takedPc <= qtyCake){
            qtyCake -= takedPc
        }else  {
            qtyCake -= takedPc;
            console.log(`No more cake left! You need ${Math.abs(qtyCake)} pieces more.`);
            break;
        }
        i++;
        taked = input[i];
       

    }
    if (taked === `Stop`) {
        console.log(`${qtyCake} pieces are left.`);
    }
}
cake(["10",

    "2",

    "2",

    "4",

    "6",

    "STOP"]);