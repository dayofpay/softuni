function reverse(data){
    let ourData = "";
    for(let x =data.length-1;x>=0;x--){
        ourData+=data[x] + " ";
    }
    console.log(ourData);
}
reverse(['a','b']);