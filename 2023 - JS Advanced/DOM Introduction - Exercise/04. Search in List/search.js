function search() {
   let getElements = document.getElementsByTagName('li');
   let cities = Array.from(getElements);
   let getSearchData = document.getElementById('searchText').value.toLowerCase();
   let totalMatches = 0;

   cities.map(city => {
      city.style.fontWeight = "normal";
      city.style.textDecoration = "none";
      if (city.innerText.toLowerCase().includes(getSearchData)) {
         city.style.fontWeight = "bold";
         city.style.textDecoration = "underline";
         totalMatches++;
      }
   });

   document.getElementById('result').innerText = totalMatches + " matches found";
}
