function deleteByEmail() {
    let getEmail = document.getElementsByName('email')[0].value;

    let resultData = document.getElementById('result');

    let getAllRows = document.getElementsByTagName('tr');

    for(let x = 0; x < getAllRows.length; x++){
        if(getAllRows[x].textContent.includes(getEmail)){
            getAllRows[x].remove();
            resultData.innerText = "Deleted.";
        }
        else{
            resultData.innerText = "Not found.";

        }
    }
}