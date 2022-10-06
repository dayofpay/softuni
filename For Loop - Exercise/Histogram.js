function start(input){
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for(let startIndex = 0; startIndex < Number(input.length); startIndex++){
        if(Number(input[startIndex]) < 200){
            p1++;
        }
        else if(Number(input[startIndex] >=200 && Number(input[startIndex] <= 399))){
            p2++;
        }
        else if(Number(input[startIndex] >=400 && Number(input[startIndex] <= 599))){
            p3++;
        }
        else if(Number(input[startIndex] >=599 && Number(input[startIndex] <= 799))){
            p4++;
        }
        else if(Number(input[startIndex] >=800)){
            p5++;
        }
    }
    let p1Perc = (p1-1) / Number(input.length -1) * 100;
    let p2Perc = p2 / Number(input.length -1) * 100;
    let p3Perc = p3 / Number(input.length -1) * 100;
    let p4Perc = p4 / Number(input.length -1) * 100;
    let p5Perc = p5 / Number(input.length -1) * 100;
    console.log(`${p1Perc.toFixed(2)}%`);
    console.log(`${p2Perc.toFixed(2)}%`);
    console.log(`${p3Perc.toFixed(2)}%`);
    console.log(`${p4Perc.toFixed(2)}%`);
    console.log(`${p5Perc.toFixed(2)}%`);
}
start((["9",
"367", 
"99", 
"200", 
"799",
"999",
"333",
"555",
"111",
"9"]));