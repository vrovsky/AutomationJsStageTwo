const { Builder, By, Key, until, WebDriver } = require('selenium-webdriver');
require('chromedriver');

async function pastebinWebdriver() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://pastebin.com/');
    await driver.findElement(By.xpath('//*[@id="postform-text"]')).sendKeys(
      `git config --global user.name  "New Sheriff in Town"
git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
git push origin master --force`,
      Key.RETURN
    );
    await driver
      .findElement(By.xpath('//*[@id="select2-postform-format-container"]'))
      .click();
    await driver
      .findElement(By.xpath('/html/body/span[2]/span/span[1]/input'))
      .sendKeys('Bash', Key.RETURN);
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
      .sendKeys('how to gain dominance among developers', Key.RETURN);
    // await driver.wait(
    //   until.titleIs('how to gain dominance among developers'),
    //   1000
    // );
    await driver.wait(
      until.elementTextIs(
        By.xpath(
          '/html/body/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/a'
        ),
        'Bash'
      ),
      5000
    );
    await driver.sleep(5000);
  } finally {
    await driver.quit();
  }
}
pastebinWebdriver();
