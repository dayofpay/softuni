function getInfo() {
    let getStopId = document.getElementById('stopId').value;
    let getStopName = document.getElementById('stopName');
    let url = `http://localhost:3030/jsonstore/bus/businfo/${getStopId}`;
    let getBusList = document.getElementById('buses');
  

    while (getBusList.firstChild) {
      getBusList.removeChild(getBusList.firstChild);
    }
  
    fetch(url)
      .then((request) => {
        request
          .json()
          .then((finalData) => {
            getStopName.textContent = finalData.name;
            for (let bus in finalData.buses) {
              let createElement = document.createElement('li');
              createElement.textContent = `Bus ${bus} arrives in ${finalData.buses[bus]} minutes`;
              getBusList.appendChild(createElement);
            }
          })
          .catch((error) => {
            getStopName.textContent = 'Error';
          });
      })
      .catch((error) => {
        getStopName.textContent = 'Error';
      });
  }
  