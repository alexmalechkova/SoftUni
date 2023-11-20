function clock() {
for (let hour = 0; hour <= 23; hour++) {
 for (let min = 0; min <= 59; min++) {
    if (min < 10) {
        console.log(`${hour}:0${min}`);
    } else {
        console.log(`${hour}:${min}`);
    }
    
 }
}
}
clock();