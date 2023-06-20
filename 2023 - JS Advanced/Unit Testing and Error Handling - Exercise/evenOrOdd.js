const chai = require('chai');


function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }
    return "odd";
}

describe('isOddOrEven', () => {
    it('should check if the passed string length is even', () => {

        // Test Case Even
        let evenCase = isOddOrEven('test');
        chai.expect(evenCase).to.equal('even');
    });
    it('should check if the passed parameter does NOT return undefined || the parameter is a string return either "even" or "odd" based on the length', () => {
        // Test case to not return undefined
        let nonUndefined = isOddOrEven(5);
        chai.expect(nonUndefined).to.equal(undefined);
    });
    it('should check if the passed string length is odd', () => {

        // Test case odd
        let oddCase = isOddOrEven('tes');
        chai.expect(oddCase).to.equal('odd');
    });
});