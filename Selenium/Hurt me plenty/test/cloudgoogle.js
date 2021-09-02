const CloudGooglePage = require('../pageobject/cloudgoogle.page');
const CalculatorPageFn = require('../functions/calculatorPageFn');
const EstimatePageFn = require('../functions/estimatePageFn');

describe('Hurt me plenty task for selenium webdriver tutorial', function () {
  this.timeout(50000);

  it('should find pricing calculator', async () => {
    await CloudGooglePage.openPricingCalc();
    await CloudGooglePage.switchToFrame();
    await CloudGooglePage.checkSearchingResults();
  });
  it('should chose virtual machine parameters', async () => {
    await CalculatorPageFn.choseMachine();
    await CalculatorPageFn.checkAddingResults();
  });

  it('should check fields and price', async () => {
    await EstimatePageFn.checkMachineParameters();
    await EstimatePageFn.checkEstimatedCost();
  });
});
