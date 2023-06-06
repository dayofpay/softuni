function solve() {
   let productList = {}; // Обект, в който ще съхраняваме продуктите и техните цени
   let total = 0; // Променлива, която ще пази общата цена

   let checkoutButton = document.getElementsByClassName('checkout')[0]; // Взимаме бутона за приключване на поръчката
   let addButtons = document.getElementsByClassName('add-product'); // Взимаме всички бутони за добавяне на продукт
   let textarea = document.querySelector('textarea'); // Взимаме textarea елемента

   for (let i = 0; i < addButtons.length; i++) {
      addButtons[i].addEventListener('click', addToCart); // Добавяме към всеки бутон event listener, който взаимодейства с функцията addToCart
   }
   
   function addToCart(event) {
      let product = event.target.closest('.product');
      let productName = product.querySelector('.product-title').textContent;
      let productPrice = parseFloat(product.querySelector('.product-line-price').textContent);
   
      textarea.disabled = false;
      textarea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
      textarea.disabled = true;
   
      if (productList.hasOwnProperty(productName)) {
         productList[productName] += productPrice;
      } else {
         productList[productName] = productPrice;
      }
   
      total += productPrice;
   }
   
   checkoutButton.addEventListener('click', checkout);

   function checkout(event) {
      // Показване на списъка с продукти
      const productListStr = Object.keys(productList).join(', ');
      const formattedTotal = total.toFixed(2);
      textarea.value += `You bought ${productListStr} for ${formattedTotal}.`
      // Деактивиране на всички бутони
      for (let i = 0; i < addButtons.length; i++) {
         addButtons[i].disabled = true;
      }
      checkoutButton.disabled = true;
   }

   // DEBUG

   function debugData(){
      const productListStr = Object.keys(productList).join(', ');
      const formattedTotal = total.toFixed(2);
      console.log('Product List [as list]:', productListStr);
      console.log('Product List [as Object]:', productList);
      console.log('Total Price:', formattedTotal);
   }
}
