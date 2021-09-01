/**
 *
 * A simple calculator class containing add and multiply methods
 * @class Calculator
 */
class Calculator {
  /**
   * Creates an instance of Calculator.
   * @memberof Calculator
   */
  constructor() {}
  /**
   *
   *
   * @param {Number} firstNumber
   * @param {Number} secondNumber
   * @return {Number} sum of two numbers
   * @memberof Calculator
   */
  add(firstNumber, secondNumber) {
    const typeOfFirstNumber = typeof firstNumber;
    const typeOfSecondNumber = typeof secondNumber;
    if (typeOfFirstNumber !== 'number' || typeOfSecondNumber !== 'number') {
      throw new Error(`You should use numbers for adding.`);
    } else {
      return firstNumber + secondNumber;
    }
  }
  /**
   *
   *
   * @param {Number} firstNumber
   * @param {Number} secondNumber
   * @return {Number} result of multiplying firstNumber to secondNumber
   * @memberof Calculator
   */
  multiply(firstNumber, secondNumber) {
    const typeOfFirstNumber = typeof firstNumber;
    const typeOfSecondNumber = typeof secondNumber;
    if (typeOfFirstNumber !== 'number' || typeOfSecondNumber !== 'number') {
      throw new Error(`You should use numbers for multiplying`);
    } else {
      return firstNumber * secondNumber;
    }
  }
}

module.exports = Calculator;
