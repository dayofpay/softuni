const chai = require('chai')
function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255)) {
        return undefined; // Red value is invalid
    }
    if (!Number.isInteger(green) || (green < 0) || (green > 255)) {
        return undefined; // Green value is invalid
    }
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)) {
        return undefined; // Blue value is invalid
    }
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}
describe('rgbToHexColor', () => {
    it('should return the correct hexadecimal color', () => {
      // Test case 1
      let result1 = rgbToHexColor(255, 0, 0);
      chai.expect(result1).to.equal('#FF0000');
  
      // Test case 2
      let result2 = rgbToHexColor(0, 255, 0);
      chai.expect(result2).to.equal('#00FF00');
  
      // Test case 3
      let result3 = rgbToHexColor(0, 0, 255);
      chai.expect(result3).to.equal('#0000FF');
    });
  
    it('should return undefined for invalid range', () => {
      // Test case 1: Red value is less than 0
      let result1 = rgbToHexColor(-10, 100, 100);
      chai.expect(result1).to.equal(undefined);
  
      // Test case 2: Green value is greater than 255
      let result2 = rgbToHexColor(100, 300, 100);
      chai.expect(result2).to.equal(undefined);
  
      // Test case 3: Blue value is not an integer
      let result3 = rgbToHexColor(100, 100, 50.5);
      chai.expect(result3).to.equal(undefined);
    });
  
    it('should return undefined for invalid types', () => {
      // Test case 1: Red value is a string
      let result1 = rgbToHexColor("255", 100, 100);
      chai.expect(result1).to.equal(undefined);
  
      // Test case 2: Green value is null
      let result2 = rgbToHexColor(100, null, 100);
      chai.expect(result2).to.equal(undefined);
  
      // Test case 3: Blue value is undefined
      let result3 = rgbToHexColor(100, 100, undefined);
      chai.expect(result3).to.equal(undefined);
    });
  });
  