function implementPosition(){
    const data = {
        members : ["Jason","Mike","Peter","George","Ivan"],
        usedPositions : []
    }
    for(let startPos = 0; startPos <= data.members.length-1; startPos++){
        let genNum = Math.floor(Math.random() * data.members.length-1 + 1);
        if(data.usedPositions.includes(genNum)){
            startPos--;
        }else{
            data.usedPositions[startPos] = genNum;
            console.log(data.members[startPos] + " position is " + genNum);
        }
    }
    // Debug
    data.usedPositions.forEach(element => {
        console.log(element);
    });
    // End Debug
}
implementPosition();