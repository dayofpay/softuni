function sumTable() {
    let getElements = document.getElementsByTagName('td');
    let getSum = document.getElementById('sum');
    let totalSum = 0;
    for(let x = 1; x < getElements.length - 2;x+=2){
        totalSum += Number(getElements[x].innerHTML);
    }
    getSum.textContent = totalSum;
}