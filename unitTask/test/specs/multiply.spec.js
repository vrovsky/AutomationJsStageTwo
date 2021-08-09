const Calculator = require('../../app/calculator');
const { expect } = require('chai');

describe('add positive scenarios', function () {
  let calculator;
  beforeEach(function () {
    calculator = new Calculator();
  });
  afterEach(function () {
    calculator = null;
  });
  // eslint-disable-next-line max-len
  it(`should return result of multiplying firtNumber to secondNumber`, function () {
    expect(calculator.multiply(2, 3)).to.be.equal(6);
  });
});
