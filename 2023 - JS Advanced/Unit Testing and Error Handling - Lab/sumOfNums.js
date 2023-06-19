const chai = require('chai')
function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += Number(num);
    }
    return sum;
}
describe('Sum Test', () => {
    it('should calculate the sum of the numbers in the array', function() {
        // Arrange
        let arr = [10, 25];

        // Act
        let result = sum(arr);

        // Assert
        chai.expect(result).to.equal(35);
    });
});