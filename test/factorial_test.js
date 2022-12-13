const assert = require("assert");
const Calculate =  require('../factorial.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('it will test if the output of 5! is equal to 120', () => {
      const factorialInput = 5;
      const expectedResult = 120;
      const actual = Calculate.factorial(factorialInput)
      assert.strictEqual(actual, expectedResult);
    });
    it('return the factorial of 3', () => {
      const factorialInput = 3;
      const expectedResult = 6;
      const actual = Calculate.factorial(factorialInput)
      assert.strictEqual(actual, expectedResult);
    })
    it('returns 1 when you pass in 0.', () => {
      const factorialInput = 0;
      const expectedResult = 1;
      const actual = Calculate.factorial(factorialInput)
      assert.strictEqual(actual, expectedResult);
    })
  });
});