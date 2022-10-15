function start(input){
    let n = Number(input[0]);
    let genNumbers = "";
    for(let x = 1;x<=9;x++){
        for(let y = 1; y<=9;y++){
            for(let z = 1;z<=9;z++){
                for(nX = 1; nX<=9;nX++){
                    if(n % x === 0 && n % y === 0 && n % z === 0 && n % nX === 0){
                    
                        genNumbers+=(`${x}${y}${z}${nX} `);
                    }
                }
            }
        }
    }
    console.log(genNumbers);
    
}
start(["3"]);