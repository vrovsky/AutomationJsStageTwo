const CloudGooglePage = require('../pageobject/cloudgoogle.page');
const YopmailPage = require('../pageobject/yopmail.page');
const EstimatePage = require('../pageobject/estimate.page');
const CalculatorPage = require('../pageobject/calculator.page');
const { By } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Hardcore task for selenium webdriver tutorial', function () {
  this.timeout(50000);

  it('should find pricing calculator', async () => {
    await CloudGooglePage.openPricingCalc();
    await CloudGooglePage.switchToFrame();
    // await CloudGooglePage.checkSearchingResults();
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

  it('should click email estimate button', async () => {
    await EstimatePage.clickEmailEstimateBtn();
  });
  it('should switch to mail page and generate new email', async () => {
    await YopmailPage.openYopmail();
    await YopmailPage.clickGenerateMailBtn();
  });
  it('should generate new email and copy it', async () => {
    let generatedMail = await driver
      .findElement(By.xpath('//*[@id="egen"]'))
      .getText();
    await CloudGooglePage.switchToGoogleEmailField();
    await EstimatePage.addGeneratedEmail(generatedMail);
    await EstimatePage.sendEmail();
  });
  // it('should switch to yopmail', async () => {
  //   await CloudGooglePage.switchWindows(1);
  //   await YopmailPage.find_checkMailBtn();
  //   await YopmailPage.click_refreshBtn();
  //   await YopmailPage.switchToFrame();
  // });
  // it('should check estimated price', async () => {
  //   let mailedPrice = await driver
  //     .findElement(
  //       By.xpath(
  //         '//div[@id="mail"]//div//div//table//tbody//tr[2]//table//tbody//tr[2]//td[2]//h3'
  //       )
  //     )
  //     .getText();
  //   await expect(mailedPrice).to.equal('USD 1,083.33');
  // });
});
