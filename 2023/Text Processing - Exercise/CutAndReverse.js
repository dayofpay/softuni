function start(str){

    // let string = "";
    // for(let x = str.length-1; x>=0;x--){
    //     string+=str[x];
    // }
    // let half = Number(string.length) / 2;
    // let halfString = "";
    // for(let x = string.length-1; x>= half;x--){
    //     halfString+=str[x];
    // }
    // let halfStringTwo = "";

    // for(let b = half-1; b>=0;b--){
    //     halfStringTwo+=str[b];
    // }
    // console.log(halfStringTwo);
    // console.log(halfString);

    // По-опростено решение :
    
    
    let len = Math.floor(str.length / 2);
    let firstHalf = str.substring(0, len);
    let secondHalf = str.substring(len);
    let reversedFirstHalf = firstHalf.split('').reverse().join('');
    let reversedSecondHalf = secondHalf.split('').reverse().join('');
    console.log(reversedFirstHalf);
    console.log(reversedSecondHalf);
}
start('tluciffiDsIsihTgnizamAoSsIsihT');