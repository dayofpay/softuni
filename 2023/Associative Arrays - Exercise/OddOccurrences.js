function start(inputData){
    let elements = inputData.split(' ');
    let data = {};

    for(let x of elements){
        if(data.hasOwnProperty(x.toLowerCase())){
            data[x.toLowerCase()] +=1;
        }
        else{
            data[x.toLowerCase()] = 1;
        }
    }
    let sentences = "";
    for(let x of Object.entries(data)){
       if([x[1]] % 2 === 1){
        sentences+=x[0] + " ";
       }
    }

    console.log(sentences);
}
start('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');