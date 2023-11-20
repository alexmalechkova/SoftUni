function demo(input) {
    let country = input[0];
    let tool = input[1];
    let totalPoints = 0;
    if(country === 'Rusia'){
        switch (tool) {
            case 'ribbon':
                totalPoints = 9.100 + 9.400;
                break;
        
                case 'hoop':
                    totalPoints = 9.300 + 9.800;
                    break;
                    case 'rope':
                totalPoints = 9.600 + 9.000;
                break;
        }
    } else if(country === 'Bulgaria'){
        switch (tool) {
            case 'ribbon':
                totalPoints = 9.600 + 9.400;
                break;
        
                case 'hoop':
                    totalPoints = 9.550 + 9.750;
                    break;
                    case 'rope':
                totalPoints = 9.500 + 9.400;
                break;
        }
    } else if(country === 'Italy'){
        switch (tool) {
            case 'ribbon':
                totalPoints = 9.200 + 9.500;
                break;
        
                case 'hoop':
                    totalPoints = 9.450 + 9.350;
                    break;
                    case 'rope':
                totalPoints = 9.700 + 9.150;
                break;
        }
    }
    let percentDiff = (20 - totalPoints) / 20 * 100;
    console.log(`The team of ${country} get ${totalPoints.toFixed(3)} on ${tool}.`);
    console.log(`${percentDiff.toFixed(2)}%`);
}
demo(["Bulgaria",
    "ribbon"
    ]);