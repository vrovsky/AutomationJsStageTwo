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
  it(`should return sum of firstNumber and secondNumber`, () => {
    expect(calculator.add(2, 3)).to.be.equal(5);
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
    expect(() => calculator.add(2, 'hello')).to.throw(
      Error,
      `You should use numbers for adding.`
    );
  });
});
