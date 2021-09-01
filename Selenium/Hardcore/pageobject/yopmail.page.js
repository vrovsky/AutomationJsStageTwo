const { Builder, By, Key, until } = require('selenium-webdriver');
var Page = require('./page');
var HelpIt = require('../functions/helpit');

class YopmailPage extends Page {
  constructor() {
    super();
    this.generateMailBtn = '//div[@class="txtlien"][1]//b';
    this.checkMailBtn = '//button[@class="md but text f24 egenbut"][2]';
    this.refreshMailBtn = '//button[@id="refresh"]';
    this.generatedEmail = '//*[@id="egen"]';
    this.mailedPrice = '//div[@id="mail"]//div//div//table//tbody//tr[2]//table//tbody//tr[2]//td[2]//h3';
  }
  async openYopmail() {
    await driver.switchTo().newWindow('tab');
    await this.open(this.yopmailUrl);
  }
  async clickGenerateMailBtn() {
    await HelpIt.clickElement(this.generateMailBtn);
  }
  async clickCheckMailBtn() {
    await HelpIt.clickElement(this.checkMailBtn);
  }
  async getGeneratedMail() {
    await HelpIt.copyText(this.generatedEmail);
  }
  async clickRefreshBtn() {
    await HelpIt.clickElement(this.refreshMailBtn);
  }
  async writeToGeneretadeMail() {
    await HelpIt.writeGeneratedEmail(this.generatedEmail);
  }

  async switchToFrame() {
    await driver
      .switchTo()
      .frame(await driver.findElement(By.xpath('//iframe[@name="ifmail"]')));
  }
 async checkMailedPrice(){
   await HelpIt.checkElementByXpath(this.mailedPrice, this.price);
  };

  async openPriceMail(){
    await this.switchWindows(1);
    await this.clickCheckMailBtn();
    await this.clickRefreshBtn();
    await this.switchToFrame();
  }
  get price(){
    return 'USD 900.32';
  }

  get yopmailUrl() {
    return 'https://yopmail.com/ru/';
  }
}

module.exports = new YopmailPage();
