function colorize() {
    let getRows = document.getElementsByTagName('tr');
    for(let x = 0; x < getRows.length;x++){
        x % 2 !== 0 ? getRows[x].style.backgroundColor="teal" : null;
    } 
}