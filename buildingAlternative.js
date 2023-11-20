function building(input) {
let etage = Number(input[0]);
let rooms = Number(input[1]);
for(let i = etage; i >= 1; i--){
    let flow = '';
    for(j = 0; j < rooms; j++){
       
        if(i !== etage){
            if(i % 2 === 0){
                flow += `O${i}${j} `;
            } else{
                flow += `A${i}${j} `;
            }
        } else{
            flow += `L${i}${j} `;
        }
    }console.log(flow);
}
}

building(["6", "4"]);