function start(input){
    let type = input[0];
    let result = 0;
    if(type === "square"){
        let length = Number(input[1]);
        result = length * length;
    }
    else if(type === "rectangle"){
        let length = Number(input[1]);
        let width = Number(input[2]);
        result = length * width;
    }
    else if(type === "circle"){
        let radius = Number(input[1]);
        result =  Math.PI * radius * radius;
    }
    else if(type === "triangle"){
        let length = Number(input[1]);
        let width = Number(input[2]);
        let h = (length * width) /2;
        result = h;
    }
    console.log(result.toFixed(3));
}
start(["triangle",
"4.5",
"20"])