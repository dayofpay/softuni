function solve() {

    document.getElementById('arrive').disabled = true;
    let getInfoBox = document.getElementsByClassName('info')[0];
    let currentStop = "depot";
    let lastStop;
    function depart() {

      let url = `http://localhost:3030/jsonstore/bus/schedule/${currentStop}`;
  
      document.getElementById('depart').setAttribute('disabled','disabled');
      document.getElementById('arrive').disabled = true;
  
      fetch(url)
        .then((request) => {
          request.json().then((response) => {
            console.log(response);
            getInfoBox.textContent = `Next stop ${response.name}`;

            document.getElementById('arrive').disabled = false;
            currentStop = response.next;
            lastStop = response.name;
          }).catch((error => {
            getInfoBox.textContent = "Error";



             document.getElementById('depart').disabled = true;
             document.getElementById('arrive').disabled = true;
          }));
        });
    }
  
    function arrive() {

      document.getElementById('arrive').disabled = true;

      document.getElementById('depart').disabled = false;

      getInfoBox.textContent = `Arriving at ${lastStop}`
    }
  
    return {
      depart,
      arrive,
    };
  }
  
  let result = solve();
  