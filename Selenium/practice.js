const { Builder, By, Key, until, WebDriver } = require('selenium-webdriver');
require('chromedriver');

async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://pastebin.com/');
    await driver
      .findElement(By.id('postform-text'))
      .sendKeys('Hello from WebDriver');
    await driver.findElement(
      By.id('select2-postform-expiration-container').click(
        'select2-postform-expiration-result-lnmf-10M'
      )
    );
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
}
example();
