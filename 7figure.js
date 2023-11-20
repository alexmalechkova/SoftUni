function areaofFigures(input) {
    let figure=String(input[0]);
    if(figure==='square'){
       let size=Number(input[1]);
       let squareArea=(size*size).toFixed(3);
    console.log(squareArea);
   }   
   else if(figure==='rectangle'){
       let size=Number(input[1])
       let size1=Number(input[2]);
       let rectangleArea=(size*size1).toFixed(3);
       console.log(rectangleArea);
   }
   else if(figure==='circle'){
       let size=Number(input[1]);
       let circleArea=(Math.PI*(size*size)).toFixed(3);
   console.log(circleArea);
   }
   else if (figure==='triangle'){
       let size=Number(input[1]);
       let size1=Number(input[2]);
       let triangleArea=((size*size1)/2).toFixed(3); 
       console.log(triangleArea);
   }
   }
   areaofFigures(["square", "5"]);