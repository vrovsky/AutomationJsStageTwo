const CloudGooglePage = require('../pageobject/cloudgoogle.page');
const YopmailPage = require('../pageobject/yopmail.page');
const EstimatePage = require('../pageobject/estimate.page');
const CalculatorPage = require('../pageobject/calculator.page');

describe('Hardcore task for selenium webdriver tutorial', function () {
  this.timeout(50000);

  it('should find pricing calculator', async () => {
    await CloudGooglePage.openPricingCalc();
    await CloudGooglePage.switchToFrame();
  });
  it('should chose virtual machine parameters', async () => {
    await CalculatorPage.choseMachine();
    await EstimatePage.clickEmailEstimateBtn();
  });
  it('should switch to mail page and generate new email', async () => {
    await YopmailPage.openYopmail();
    await YopmailPage.clickGenerateMailBtn();
  });
  it('should generate new email and copy it', async () => {
    await CloudGooglePage.copyGeneratedEmail();
    await EstimatePage.sendEmail();
  });
  it('should check emailed price', async () => {
    await YopmailPage.openPriceMail();
    await YopmailPage.checkMailedPrice();
  });
});
