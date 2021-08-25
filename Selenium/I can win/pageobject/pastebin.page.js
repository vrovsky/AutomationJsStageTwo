const { Builder, By, Key, until } = require('selenium-webdriver');
var Page = require('./page');
var webdriver = require('selenium-webdriver');

class PastebinPage extends Page {
  //This will enter test into postform
  async enter_postform(postformText) {
    await driver
      .findElement(By.xpath('//*[@id="postform-text"]'))
      .sendKeys(postformText);
  }
  //This will find Expiration time droplist
  async find_expirationForm() {
    await driver
      .findElement(By.xpath('//*[@id="select2-postform-expiration-container"]'))
      .click();
  }
  //This will choose Expiration time = 10 MIN
  async chose_expiration() {
    await driver
      .findElement(
        By.xpath('//*[@id="select2-postform-expiration-results"]/li[3]')
      )
      .click();
  }
  //This will enter postform name
  async enter_postformName(postformNameText) {
    await driver
      .findElement(By.id('postform-name'))
      .sendKeys(postformNameText, Key.RETURN);
  }
  get pastebinUrl() {
    return 'http://pastebin.com/';
  }
  get title() {
    return 'helloweb';
  }
}

module.exports = new PastebinPage();
