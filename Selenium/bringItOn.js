const {
  Builder,
  By,
  Key,
  until,
  WebDriver,
  getText,
} = require('selenium-webdriver');
require('chromedriver');

const gitComands = `git config --global user.name  "New Sheriff in Town"
git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
git push origin master --force`;

async function pastebinWebdriver() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://pastebin.com/');
    await driver
      .findElement(By.xpath('//*[@id="postform-text"]'))
      .sendKeys(gitComands, Key.RETURN);
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
    await driver.sleep(5000);
    await driver.wait(
      until.titleIs('how to gain dominance among developers'),
      1000
    );
    // await (await driver.findElement(By.linkText('Bash'))).click();
    let bashElement = await driver.findElement(
      By.xpath('/html/body/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]')
    );

    await driver.wait(until.elementTextContains(bashElement, 'Bash'), 1000);
    await driver.sleep(5000);
  } finally {
    await driver.quit();
  }
}
pastebinWebdriver();
