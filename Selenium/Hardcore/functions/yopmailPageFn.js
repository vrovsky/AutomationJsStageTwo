const { Builder, By, Key, until } = require('selenium-webdriver');
var Page = require('../pageobject/page');
var HelpIt = require('../functions/helpit');
var YopmailPage = require('../pageobject/yopmail.page');

class YopmailPageFn extends Page{
    async openYopmail() {
        await driver.switchTo().newWindow('tab');
        await this.open(YopmailPage.yopmailUrl);
    }
    async clickGenerateMailBtn() {
        await HelpIt.clickElement(YopmailPage.generateMailBtn);
    }
    async clickCheckMailBtn() {
        await HelpIt.clickElement(YopmailPage.checkMailBtn);
    }
    async getGeneratedMail() {
        await HelpIt.copyText(YopmailPage.generatedEmail);
    }
    async clickRefreshBtn() {
        await HelpIt.clickElement(YopmailPage.refreshMailBtn);
    }
    async writeToGeneretadeMail() {
        await HelpIt.writeGeneratedEmail(YopmailPage.generatedEmail);
    }

    async switchToFrame() {
        await driver
        .switchTo()
        .frame(await driver.findElement(By.xpath('//iframe[@name="ifmail"]')));
    }
    async checkMailedPrice(){
        await HelpIt.checkElementByXpath(YopmailPage.mailedPrice, YopmailPage.price);
    };

    async openPriceMail(){
        await this.switchWindows(1);
        await this.clickCheckMailBtn();
        await this.clickRefreshBtn();
        await this.switchToFrame();
    }
}

module.exports = new YopmailPageFn();