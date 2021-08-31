const CloudGooglePage = require('../pageobject/cloudgoogle.page');
const CalculatorPage = require('../pageobject/calculator.page');
const EstimatePage = require('../pageobject/estimate.page');

describe('Hurt me plenty task for selenium webdriver tutorial', function () {
  this.timeout(50000);

  it('should find pricing calculator', async () => {
    await CloudGooglePage.openPricingCalc();
    await CloudGooglePage.switchToFrame();
    await CloudGooglePage.checkSearchingResults();
  });
  it('should chose virtual machine parameters', async () => {
    await CalculatorPage.addNumberOfInstances();
    await CalculatorPage.choseMachineSeries();
    await CalculatorPage.choseMachineType();
    await CalculatorPage.addGPU();
    await CalculatorPage.addSDD();
    await CalculatorPage.choseDatacenterLocation();
    await CalculatorPage.choseUsageTime();
    await CalculatorPage.clickAddToEstimateBtn();
    await CalculatorPage.checkAddingResults();
  });

  it('should check fields and price', async () => {
    await EstimatePage.checkVMClass();
    await EstimatePage.checkInstanceType();
    await EstimatePage.checkLocalSDD();
    await EstimatePage.checkRegion();
    await EstimatePage.checkCommitmentTerm();
    await EstimatePage.checkEstimatedCost();
  });
});
