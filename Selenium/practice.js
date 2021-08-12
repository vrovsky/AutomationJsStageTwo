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
      .wait(
        until.elementsLocated(
          By.xpath('//*[@id="select2-postform-expiration-results"]')
        ),
        20000
      )
      .then.findElement(
        By.xpath('//*[@id="select2-postform-expiration-result-7dyq-10M"]')
      )
      .click();
  } finally {
    await driver.sleep(5000);
    await driver.quit();
  }
}
example();
