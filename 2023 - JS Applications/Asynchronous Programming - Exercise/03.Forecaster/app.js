function attachEvents() {
    let getButton = document.getElementById('submit');
    getButton.addEventListener('click', e);
  
    async function e() {
      let url = `http://localhost:3030/jsonstore/forecaster/locations`;
      let userLocation = document.getElementById('location').value;
      let locationCode;
  
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch locations');
        }
        const data = await response.json();
  
        let mappedData = data.map((item) => ({
          name: item.name,
          code: item.code
        }));
  
        let location = mappedData.find((item) => item.name === userLocation);
        if (!location) {
          throw new Error('Location not found');
        }
        locationCode = location.code;
  
        const currentResponse = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${locationCode}`);
        if (!currentResponse.ok) {
          throw new Error('Failed to fetch current forecast');
        }
        const currentData = await currentResponse.json();
  
        const upcomingResponse = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`);
        if (!upcomingResponse.ok) {
          throw new Error('Failed to fetch upcoming forecast');
        }
        const upcomingData = await upcomingResponse.json();
  
        displayForecast(currentData, upcomingData);
      } catch (error) {
        console.log('Error:', error);
        displayError();
      }
    }
  
    function displayForecast(currentData, upcomingData) {
      // Make Elements Visible
      document.getElementById('forecast').style.display = 'block';
  
      // Symbols Object
      let symbols = {
        Sunny: '&#x2600;', // ☀
        'Partly sunny': '&#x26C5;', // ⛅
        Overcast: '&#x2601;', // ☁
        Rain: '&#x2614;', // ☂
        Degrees: '&#176;' // °
      };
  
      let currentForecast = currentData.forecast;
      let upcomingForecast = upcomingData.forecast;
  
      // Display Current Forecast
      let currentForecastDiv = createForecastElement('div', ['forecasts']);
      let currentSymbol = createForecastElement('span', ['condition', 'symbol']);
      currentSymbol.innerHTML = symbols[currentForecast.condition];
      let currentConditionData = createForecastElement('span', ['condition']);
      let currentCity = createForecastElement('span', ['forecast-data']);
      currentCity.textContent = currentData.name;
      let currentDegrees = createForecastElement('span', ['forecast-data']);
      currentDegrees.innerHTML = `${currentForecast.low}${symbols.Degrees}/${currentForecast.high}${symbols.Degrees}`;
      let currentConditionText = createForecastElement('span', ['forecast-data']);
      currentConditionText.textContent = currentForecast.condition;
  
      currentConditionData.append(currentCity, currentDegrees, currentConditionText);
      currentForecastDiv.append(currentSymbol, currentConditionData);
  
      // Display Upcoming Forecast
      let upcomingForecastDiv = createForecastElement('div', ['forecast-info']);
      for (let forecast of upcomingForecast) {
        let upcomingSpan = createForecastElement('span', ['upcoming']);
        let upcomingSymbol = createForecastElement('span', ['symbol']);
        upcomingSymbol.innerHTML = symbols[forecast.condition];
        let upcomingDegrees = createForecastElement('span', ['forecast-data']);
        upcomingDegrees.innerHTML = `${forecast.low}${symbols.Degrees}/${forecast.high}${symbols.Degrees}`;
        let upcomingConditionText = createForecastElement('span', ['forecast-data']);
        upcomingConditionText.textContent = forecast.condition;
  
        upcomingSpan.append(upcomingSymbol, upcomingDegrees, upcomingConditionText);
        upcomingForecastDiv.appendChild(upcomingSpan);
      }
  
      document.getElementById('current').innerHTML = '';
      document.getElementById('upcoming').innerHTML = '';
      document.getElementById('current').appendChild(currentForecastDiv);
      document.getElementById('upcoming').appendChild(upcomingForecastDiv);
    }
  
    function displayError() {
      document.getElementById('forecast').style.display = 'block';
      document.getElementById('current').innerHTML = '<span class="error">Error</span>';
      document.getElementById('upcoming').innerHTML = '';
    }
  
    function createForecastElement(tagName, classNames) {
      let element = document.createElement(tagName);
      if (classNames && classNames.length) {
        element.classList.add(...classNames);
      }
      return element;
    }
  }
  
  attachEvents();
  