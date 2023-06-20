const chai = require('chai');

function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }
    return string.charAt(index);
}
describe('lookupChar', () => {
    it('checks if the first parameter is NOT a string', () => {
        let result = lookupChar(5, 5);
        chai.expect(result).to.equal(undefined);
    });

    it('checks if the second parameter is NaN (Not a number)', () => {
        let result = lookupChar('vladislav', '5');
        chai.expect(result).to.equal(undefined);
    });

    it('checks if both parameters are of the correct type but the value of the index is incorrect (bigger than or equal to the string length or a negative number)', () => {
        let result = lookupChar('vladislav', 9);
        chai.expect(result).to.equal("Incorrect index");
    });

    it('checks if the result is correct', () => {
        let result = lookupChar('vladislav', 2);
        chai.expect(result).to.equal('a');
    });
    it('checks if the result is correct #2', () => {
        let result = lookupChar('vladislav', 0);
        chai.expect(result).to.equal('v');
    });
    it('checks if the second parameter is a floating point number', () => {
        let result = lookupChar('vladislav', 1.1);
        chai.expect(result).to.equal(undefined);
    });
    it('checks if the second parameter is a negative number', () => {
        let result = lookupChar('vladislav', -1);
        chai.expect(result).to.equal('Incorrect index');
    });
});