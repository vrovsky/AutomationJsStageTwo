const Calculator = require('../../app/calculator');
const { expect } = require('chai');

describe('add positive scenarios', () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });
  afterEach(() => {
    calculator = null;
  });
  it(`should return result of multiplying firtNumber to secondNumber`, () => {
    expect(calculator.multiply(2, 3)).to.be.equal(6);
  });
});
describe(`add negative scenarios`, () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });
  afterEach(() => {
    calculator = null;
  });
  it(`should throw exception if one of arguments is not a number`, () => {
    expect(() => calculator.multiply(2, 'hello')).to.throw(
      Error,
      `You should use numbers for multiplying`
    );
  });
});
