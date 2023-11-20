function areaOfFigures(input) {
    let figure = input[0];

    if (figure === 'square') {
        let lenght = Number(input[1]);
        let squareArea = (lenght*lenght).toFixed(3);
        console.log(squareArea);
     } else if (figure === 'rectangle') {
        let side = Number(input[1]);
        let side1 = Number(input[2]);
        let rectangleArea = (side * side1).toFixed(3);
        console.log(rectangleArea);
    } else if (figure === 'circle') {
        let radius = Number(input[1]);
        let circleArea = (Math.PI * Math.pow(radius, 2)).toFixed(3);
        console.log(circleArea);
    } else if (figure === 'triangle') {
        let side = Number(input[1]);
        let side2 = Number(input[2]);
        let triangleArea = ((side * side2) / 2).toFixed(3);
        console.log(triangleArea);
    }
}
areaOfFigures(["square", "5"]);