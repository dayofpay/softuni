function attachEventsListeners() {
    let getConvertButton = document.getElementById('convert');
    getConvertButton.addEventListener('click', convert);

    let unitValues = {
      km: {
        m: (value) => value * 1000,
        cm: (value) => value * 100000,
        mm: (value) => value * 1000000,
        mi: (value) => value * 1609.34,
        yrd: (value) => value * 0.9144,
        ft: (value) => value * 0.3048,
        in: (value) => value * 0.0254,
      },
      m: {
        km: (value) => value / 1000,
        cm: (value) => value / 0.01,
        mm: (value) => value / 0.001,
        mi: (value) => value / 1609.34,
        yrd: (value) => value / 1.09361,
        ft: (value) => value / 0.3048,
        in: (value) => value / 0.0254,
      },
      cm: {
        km: (value) => value / 100000,
        m: (value) => value / 100,
        mm: (value) => value / 10,
        mi: (value) => value / 160934,
        yrd: (value) => value / 91.44,
        ft: (value) => value / 30.48,
        in: (value) => value / 2.54,
      },
      mm: {
        km: (value) => value / 1000000,
        m: (value) => value / 1000,
        cm: (value) => value / 10,
        mi: (value) => value / 1609340,
        yrd: (value) => value / 914.4,
        ft: (value) => value / 304.8,
        in: (value) => value / 25.4,
      },
      mi: {
        km: (value) => value * 1.60934,
        m: (value) => value * 1609.34,
        cm: (value) => value * 160934,
        mm: (value) => value * 1609340,
        yrd: (value) => value * 1760,
        ft: (value) => value * 5280,
        in: (value) => value * 63360,
      },
      yrd: {
        km: (value) => value / 0.0009144,
        m: (value) => value / 0.9144,
        cm: (value) => value / 0.0109361,
        mm: (value) => value / 0.00109361,
        mi: (value) => value / 0.000568182,
        ft: (value) => value / 3,
        in: (value) => value / 36,
      },
      ft: {
        km: (value) => value / 0.0003048,
        m: (value) => value / 0.3048,
        cm: (value) => value / 0.0328084,
        mm: (value) => value / 0.00328084,
        mi: (value) => value / 0.000189394,
        yrd: (value) => value / 0.333333,
        in: (value) => value / 12,
      },
      in: {
        km: (value) => value / 0.0000254,
        m: (value) => value / 0.0254,
        cm: (value) => value / 0.0254,
        mm: (value) => value / 0.0393701,
        mi: (value) => value / 0.0000157828,
        yrd: (value) => value / 0.0277778,
        ft: (value) => value / 0.0833333,
      },
    };
  
    function convert(e) {
        let inputDistance = parseFloat(document.getElementById('inputDistance').value);
        let inputUnits = document.getElementById('inputUnits').selectedOptions[0].value;
        let outputUnits = document.getElementById('outputUnits').selectedOptions[0].value;

        console.log(inputDistance);
        console.log(inputUnits);
        console.log(outputUnits);
      
        let convertedDistance = unitValues[inputUnits][outputUnits](inputDistance);
      
        document.getElementById('outputDistance').value = convertedDistance;
      }
      
      
  }
  

  // Code works well locally but SoftUni Judge unit testing system doesnt accept this code for some reason ?!