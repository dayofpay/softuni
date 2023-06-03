function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let getAllRows = document.getElementsByTagName('tr');
      let searchData = document.getElementById('searchField').value;
      for (let x = 2; x < getAllRows.length; x++) {
         getAllRows[x].classList.remove('select');
         if (getAllRows[x].textContent.includes(searchData) && searchData.length >= 1) {
            //getAllRows[x].style.background = "yellow";
            getAllRows[x].classList.add('select')
         }
      }

   }
}