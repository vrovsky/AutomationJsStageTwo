const { Builder, By, Key, until } = require('selenium-webdriver');
var Page = require('./page');
var webdriver = require('selenium-webdriver');

class YopmailPage extends Page {
  async find_generateMailBtn() {
    await driver
      .findElement(By.css('#listeliens > a:nth-child(1) > div.txtlien > b'))
      .click();
  }
  async find_checkMailBtn() {
    await driver
      .findElement(
        By.css(
          'body > div > div.ymaincenter > main > div > div.pagecdr.brounded > div > div > div.nw > button:nth-child(3)'
        )
      )
      .click();
  }
  async switchToFrame() {
    await driver
      .switchTo()
      .frame(await driver.findElement(By.xpath('//iframe[@name="ifmail"]')));
  }
  async click_refreshBtn() {
    await driver.findElement(By.xpath('//button[@id="refresh"]')).click();
  }
  get yopmailUrl() {
    return 'https://yopmail.com/ru/';
  }
}

module.exports = new YopmailPage();
