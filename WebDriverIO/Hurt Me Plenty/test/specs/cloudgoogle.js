import CloudgooglePage from '../pageobjects/cloudgoogle.page';
import CalculatorPageFn from '../../functions/calculatorPageFn';
import EstimatePageFn from '../../functions/estimatePageFn';

describe('Hurt me plenty webdriverIO task', () => {

  it('shold open searchbox and find Pricing calculator', async () => {
    await CloudgooglePage.openPricingCalc();
    await CloudgooglePage.checkTitle();
  });
  it('should add machine with known parameters', async () => {
    await CalculatorPageFn.switchToCalculatorFrame();
    await CalculatorPageFn.choseMachine();
    await CalculatorPageFn.checkAddingResults();
  });
  it('should check machine parameters and price', async () => {
    await EstimatePageFn.checkMachineParameters();
    await EstimatePageFn.checkEstimatedCost();
  });
});
