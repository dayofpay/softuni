function checkSite() {
    let button = document.getElementById('btn');
    let website = document.getElementsByTagName('textarea');
    button.addEventListener('click', function checkSite() {
       let params = `service=checkWebsiteLicense&siteName=${website[0].value}`;
       let url = `https://v-devs.eu/woptimise/api/`;
       const httpRequest = new XMLHttpRequest();
       httpRequest.addEventListener('readystatechange', function () {
          if (httpRequest.readyState == 4 && httpRequest.status == 200) {
             document.getElementById("res").textContent = httpRequest.responseText;
             console.log(httpRequest.responseType);
          }
       });
       httpRequest.open("POST", url,true);
       httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")
       
       httpRequest.send(params);
    });
 }