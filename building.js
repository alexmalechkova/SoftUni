function building(input) {
let etage = Number(input[0]);
let rooms = Number(input[1]);

for (let i = etage; i >= 1; i--){
    let floorRow = '';
   for (let j = 0; j < rooms; j++) {
  
    if (i !== etage){
        if (i % 2 === 0) {
            floorRow += (`O${i}${j} `);
        } else {
            floorRow += (`A${i}${j} `)
        } 
    } else {
        floorRow += (`L${i}${j} `);
      }
   }

   console.log(floorRow);
} 

}

building(["6","4" ]);