const { Builder, By, Key, until, WebDriver } = require('selenium-webdriver');
require('chromedriver');

async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://pastebin.com/');
    await driver
      .findElement(By.xpath('//*[@id="postform-text"]'))
      .sendKeys('Hello from WebDriver');
    await driver
      .findElement(By.xpath('//*[@id="select2-postform-expiration-container"]'))
      .click();
    await driver
      .findElement(
        By.xpath('//*[@id="select2-postform-expiration-results"]/li[3]')
      )
      .click();
    await driver
      .findElement(By.id('postform-name'))
      .sendKeys('helloweb', Key.RETURN);
    await driver.sleep(5000);
  } finally {
    await driver.quit();
  }
}
example();
