const chai = require('chai');

let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};
describe('mathEnforcer', function() {
    // addFive() tests
    describe('addFive',function(){
        it('checks if addFive() function | If the parameter is NOT a number, the function should return undefined', () => {

            // Test Case #1
            let result = mathEnforcer.addFive('neshto');
            chai.expect(result).to.equal(undefined);

            // Test Case #2
            let result2 = mathEnforcer.addFive(undefined);
            chai.expect(result2).to.equal(undefined);

            // Test Case #3
            let result3 = mathEnforcer.addFive(Object);
            chai.expect(result3).to.equal(undefined);
        });
        it('checks if addFive() function | If the parameter is a number, add 5 to it, and return the result', () => {

            // Test Case #1
            let result = mathEnforcer.addFive(5);
            chai.expect(result).to.equal(10);

            // Test Case #2

            let result2 = mathEnforcer.addFive(0);
            chai.expect(result2).to.equal(5);
        });
        it('checks if addFive() function |if the result is within 0.01 of the correct value ( considering im using floating point num )', () => {
            let result = mathEnforcer.addFive(5.3);
            chai.expect(result).to.be.closeTo(10.3, 0.01);
        });
        it('checks if addFive() function | check behaviour with negative num', () => {
            let result = mathEnforcer.addFive(-5);
            chai.expect(result).to.equal(0);
        });
    });

    
    // subtractTen() tests
    describe('subtractTen',function(){
        it('checks if subtractTen() function | If the parameter is NOT a number, the function should return undefined', () => {
            let result = mathEnforcer.subtractTen('neshto');
            chai.expect(result).to.equal(undefined);
        });
        it('checks if subtractTen() function | If the parameter is a number, subtract 10 from it, and return the result.', () => {
            let result = mathEnforcer.subtractTen(20);
            chai.expect(result).to.equal(10);
        });
        it('checks if subtractTen() function | check behaviour with negative num', () => {
            let result = mathEnforcer.subtractTen(-10);
            chai.expect(result).to.equal(-20);
        });
        it('checks if subtractTen() function | check behaviour with negative result', () => {
            let result = mathEnforcer.subtractTen(1);
            chai.expect(result).to.equal(-9);
        });
        it('checks if subtractTen() function |if the result is within 0.01 of the correct value ( considering im using floating point num )', () => {
            let result = mathEnforcer.subtractTen(20.1);
            chai.expect(result).to.be.closeTo(10.1, 0.01);
        });
    });
    // sum() tests
    describe('sum',function(){
        it('checks if sum() function | If first parameter is NOT a number, the function should return undefined.', () => {
            let result = mathEnforcer.sum('test',5);
            chai.expect(result).to.equal(undefined);
        });
        it('checks if sum() function | If second parameter is NOT a number, the function should return undefined.', () => {
            let result = mathEnforcer.sum(5,'test');
            chai.expect(result).to.equal(undefined);
        });
        it('checks if sum() function | If both parameters are NOT a number, the function should return undefined.', () => {
            let result = mathEnforcer.sum('test','test');
            chai.expect(result).to.equal(undefined);
        });
        it('checks if sum() function | If both parameters are numbers, the function should return their sum..', () => {
            let result = mathEnforcer.sum(5,5);
            chai.expect(result).to.equal(10);
        });
        it('checks if sum() function | check behaviour with negative num', () => {
            let result = mathEnforcer.sum(-10,-10);
            chai.expect(result).to.equal(-20);
        });
        it('checks if sum() function |if the result is within 0.01 of the correct value ( considering im using floating point num )', () => {
            let result = mathEnforcer.sum(5,5.1);
            chai.expect(result).to.be.closeTo(10.1, 0.01);
        });
    });

});