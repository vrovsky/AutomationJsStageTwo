const CloudGooglePage = require('../pageobject/cloudgoogle.page');
const YopmailPageFn = require('../functions/yopmailPageFn');
const EstimatePage = require('../pageobject/estimate.page');
const CalculatorPageFn = require('../functions/calculatorPageFn');

describe('Hardcore task for selenium webdriver tutorial', function () {
  this.timeout(50000);

  it('should find pricing calculator', async () => {
    await CloudGooglePage.openPricingCalc();
    await CloudGooglePage.switchToFrame();
  });
  it('should chose virtual machine parameters', async () => {
    await CalculatorPageFn.choseMachine();
    await EstimatePage.clickEmailEstimateBtn();
  });
  it('should switch to mail page and generate new email', async () => {
    await YopmailPageFn.openYopmail();
    await YopmailPageFn.clickGenerateMailBtn();
  });
  it('should generate new email and copy it', async () => {
    await CloudGooglePage.copyGeneratedEmail();
    await EstimatePage.sendEmail();
  });
  it('should check mailed price', async () => {
    await YopmailPageFn.openPriceMail();
    await YopmailPageFn.checkMailedPrice();
  });
});
