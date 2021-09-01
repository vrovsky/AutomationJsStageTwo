const { Builder, By, Key, until } = require('selenium-webdriver');
var Page = require('./page');
var EstimatePage = require('./estimate.page');
const { expect } = require('chai');
var HelpIt = require('../functions/helpit');

class CloudGooglePage extends Page {
  constructor() {
    super();
    this.searchBox = '//div[@class="devsite-searchbox"]';
    this.inputSearch = '//input[@name="q"]';
    this.searchResults = '//a[@class="gs-title"][1]';
    this.calculatorNameElement =
      '//div[@class="md-toolbar-tools flex-gt-sm-50"]//h2';

    this.open(this.cloudGoogleUrl);
    driver.manage().window().maximize();
  }
  async openPricingCalc() {
    await HelpIt.clickElement(this.searchBox);
    await HelpIt.writeAndSumbit(this.inputSearch, this.googleCalcTitle);
    await HelpIt.clickElement(this.searchResults);
  }
  async switchToFrame() {
    await driver
      .switchTo()
      .frame(
        await driver.findElement(By.xpath("//iframe[contains(@name,'goog_')]"))
      );
    await driver.switchTo().frame(await driver.findElement(By.id('myFrame')));
  }
  async switchToGoogleEmailField() {
    await this.switchWindows(0);
    await this.switchToFrame();
  }
  async copyGeneratedEmail(){
    let generatedMail = await driver
      .findElement(By.xpath('//*[@id="egen"]'))
      .getText();
    await this.switchToGoogleEmailField();
    await EstimatePage.addGeneratedEmail(generatedMail);
  }

  get googleCalcTitle() {
    return 'Google Cloud Platform Pricing Calculator';
  }

  get cloudGoogleUrl() {
    return ' https://cloud.google.com/';
  }
}

module.exports = new CloudGooglePage();
