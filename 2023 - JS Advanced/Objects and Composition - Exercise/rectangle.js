function rectangle(width,height,color){
    let result = {
        width : width,
        height : height,
        color : color[0].toUpperCase() + String(color).slice(1,color.length),
        calcArea : () => {
            return width * height;
        }
    }
    return result;
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());