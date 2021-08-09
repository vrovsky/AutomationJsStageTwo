const Calculator = require('../../app/calculator');
// eslint-disable-next-line object-curly-spacing
const { expect } = require('chai');

describe('add positive scenarios', function () {
  let calculator;
  beforeEach(function () {
    calculator = new Calculator();
  });
  afterEach(function () {
    calculator = null;
  });
  it(`should return sum of firstNumber and secondNumber`, function () {
    expect(calculator.add(2, 3)).to.be.equal(5);
  });
});
