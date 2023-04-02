function start(inputData) {
    let barcodeNum = inputData[0];

    for (let x = 1; x <= barcodeNum; x++) {
        let barcode = inputData[x];
        if (String(barcode).includes("@") && String(barcode).includes("#")) {
            let testLength = "";
            for (let x = 0; x < barcode.length; x++) {
                if (barcode[x] === "@" || barcode[x] === "#") {} else {
                    testLength += barcode[x];
                }
            }
            if (testLength.length >= 6) {
                if (testLength.charCodeAt(0) >= 65 && testLength.charCodeAt(0) <= 90) {
                    if (/^[A-Za-z0-9]*$/.test(testLength)) {
                        if (testLength[testLength.length - 1].charCodeAt(0) >= 65 && testLength[testLength.length - 1].charCodeAt(0) <= 90) {
                            if (testLength.match(/\d+/g)) {
                                console.log("Product group: " + testLength.match(/\d+/g).join(""));
                            } else {
                                console.log("Product group: 00");
                            }
                        }
                        else{
                            console.log("Invalid barcode");

                        }
                    }
                    else{
                        console.log("Invalid barcode");

                    }
                }
                else{
                    console.log("Invalid barcode");

                }
            }
            else{
                console.log("Invalid barcode");

            }
        }
        else{
            console.log("Invalid barcode");

        }
    }
}
start(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
])