const { Builder, By, Key, until } = require('selenium-webdriver');
var BasePage = require('./basepage');
var webdriver = require('selenium-webdriver');

class HomePage extends BasePage {
  //This will endter test into postform
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
  async waitAlittle() {
    await driver.sleep(50000);
  }
}

module.exports = new HomePage();
