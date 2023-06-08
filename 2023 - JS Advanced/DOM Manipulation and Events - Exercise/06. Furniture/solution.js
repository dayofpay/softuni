function solve() {
  
  let getButton = document.getElementsByTagName('button')[0];

  getButton.addEventListener('click', addProduct);

  function addProduct(e) {
    let getTable = document.getElementsByTagName('tbody')[0];
    let getInputData = document.getElementsByTagName('textarea')[0].value;
    let asJson = JSON.parse(getInputData);

    for (let product of asJson) {
      let row = getTable.insertRow();
      let imgCell = row.insertCell();
      let nameCell = row.insertCell();
      let priceCell = row.insertCell();
      let decFactorCell = row.insertCell();
      let checkMark = row.insertCell();

      let img = document.createElement('img');
      img.src = product.img;
      imgCell.appendChild(img);

      let checkMarkCreate = document.createElement('input');
      checkMarkCreate.type = "checkbox";
      checkMark.appendChild(checkMarkCreate);

      nameCell.textContent = product.name;
      priceCell.textContent = product.price;
      decFactorCell.textContent = product.decFactor;
    }

    let buyButton = document.querySelector('button:nth-of-type(2)');
    buyButton.addEventListener('click', buyItems);

    function buyItems(e) {
      let getAllMarkedProducts = document.querySelectorAll('tbody input[type="checkbox"]:checked');

      let furnitureList = [];
      let totalPrice = 0;
      let decorationFactor = 0;

      for (let i = 0; i < getAllMarkedProducts.length; i++) {
        let checkbox = getAllMarkedProducts[i];
        

        let row = checkbox.parentNode.parentNode;
        let name = row.cells[1].textContent;
        let price = row.cells[2].textContent;
        let decFactor = row.cells[3].textContent;

        furnitureList.push(name);
        totalPrice += Number(price);
        decorationFactor += Number(decFactor);
      }

      
      let getList = document.querySelector('#exercise textarea[disabled]');
      getList.disabled = false;
      getList.value = `Bought furniture: ${furnitureList.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decorationFactor / furnitureList.length}`
      console.log("Name: " + furnitureList);
      console.log("Price: " + totalPrice);
      console.log("Decoration Factor: " + decorationFactor);

      console.log(getList.value);
    }
  }
}
