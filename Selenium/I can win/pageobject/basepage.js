let webdriver = require('selenium-webdriver');
let driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({ implicit: 100000 });

class BasePage {
  constructor() {
    global.driver = driver;
  }
  async go_to_url(theURL) {
    await driver.get(theURL);
  }
}

module.exports = BasePage;
