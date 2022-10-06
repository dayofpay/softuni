function start(input){
    let p1 = 0;;
    let p2 = 0;;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let p1Perc = 0;
    let p2Perc = 0;
    let p3Perc = 0;
    let p4Perc = 0;
    let p5Perc = 0;
    let total = 0;
    for(let start = 1; start<=input.length;start++){
        if(input[start] <= 5){
            p1 += Number(input[start]);
            p1Perc = p1 / Number(input[start]) * 100;
        }
        else if (input[start] >= 6 && input[start] <=12){
            p2+= Number(input[start]);
            p2Perc = p2 / Number(input[start]) * 100;
        }
        else if(input[start] >= 13 && input[start] <=25){
            p3+= Number(input[start]);
            p3Perc = p3 / Number(input[start]) * 100;
        }
        else if(input[start] >= 26 && input[start] <= 40){
            p4+= Number(input[start]);
            p4Perc = p4 / Number(input[start]) * 100;
        }
        else if(input[start] >=41)
        {
            p5+= Number(input[start]);
            p5Perc = p5 / Number(input[start]) * 100;
        }
    }
    total = p1 + p2 + p3 + p4 + p5;
    p1Perc = (p1 / total) * 100;
    p2Perc = (p2 / total) * 100;
    p3Perc = (p3 / total) * 100;
    p4Perc = (p4 / total) * 100;
    p5Perc = (p5 / total) * 100;
    console.log(`${Math.abs(p1Perc).toFixed(2)}%`);
    console.log(`${Math.abs(p2Perc).toFixed(2)}%`);
    console.log(`${Math.abs(p3Perc).toFixed(2)}%`);
    console.log(`${Math.abs(p4Perc).toFixed(2)}%`);
    console.log(`${Math.abs(p5Perc).toFixed(2)}%`);

}
start((["5",
"25",
"41",
"31",
"250",
"6"]));