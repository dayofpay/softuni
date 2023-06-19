const { expect } = require("chai");

function isSymmetric(arr) {
    if (!Array.isArray(arr)) {
        return false; // Non-arrays are non-symmetric
    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}
describe('isSymmetric', () => {
    it('should return true for a symmetric array', () => {
      assert.strictEqual(isSymmetric([1, 2, 3, 3, 2, 1]), true);
    });
  
    it('should return false for a non-symmetric array', () => {
      assert.strictEqual(isSymmetric([1, 2, 3, 4, 5]), false);
    });
  
    it('should return true for an empty array', () => {
      assert.strictEqual(isSymmetric([]), true);
    });
  
    it('should return false for non-array input', () => {
      assert.strictEqual(isSymmetric("not an array"), false);
      assert.strictEqual(isSymmetric(12345), false);
      assert.strictEqual(isSymmetric({}), false);
    });
  
    it('should return true for an array with a single element', () => {
      assert.strictEqual(isSymmetric([1]), true);
      assert.strictEqual(isSymmetric(["hello"]), true);
    });
  
    it('should return false for an array with duplicate elements', () => {
      assert.strictEqual(isSymmetric([1, 2, 3, 3, 2, 1, 1]), false);
    });
  });