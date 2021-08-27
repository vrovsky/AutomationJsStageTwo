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
  //This will find syntax highlighter field
  async find_syntaxHighlighlitingForm() {
    await driver
      .findElement(By.css('span#select2-postform-format-container'))
      .click();
  }
  //This will chose syntax highlight - Bash
  async chose_syntaxHighlighter() {
    await driver
      .findElement(By.xpath('/html/body/span[2]/span/span[1]/input'))
      .sendKeys('Bash', Key.RETURN);
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
  //This will check title of the new paste
  async check_title() {
    await driver.wait(
      until.titleIs('how to gain dominance among developers - Pastebin.com')
    );
  }
  //This will check text highlightion
  async check_textHighlighter() {
    // const bashElement = await driver.findElement(
    //   By.xpath('/html/body/div[1]/div[2]/div[1]/div[2]/div[3]/div[2]/ol')
    // );
    await driver.wait(
      until.elementIsVisible(
        driver.findElement(
          By.xpath('/html/body/div[1]/div[2]/div[1]/div[2]/div[3]/div[2]/ol')
        )
      )
    );
  }
  //This will check paste itself
  async check_pasteText(pasteText) {
    // const textElement = await driver
    //   .findElement
    //   By.xpath('/html/body/div[1]/div[2]/div[1]/div[2]/textarea')

    await driver.wait(
      until.elementTextIs(
        driver.findElement(
          By.xpath('/html/body/div[1]/div[2]/div[1]/div[2]/textarea'),
          pasteText
        )
      )
    );
  }
  get textElement() {
    return '/html/body/div[1]/div[2]/div[1]/div[2]/textarea';
  }
  get pastebinUrl() {
    return 'http://pastebin.com/';
  }
  get gitCommands() {
    return `git config --global user.name  "New Sheriff in Town"
git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
git push origin master --force`;
  }
  get title() {
    return 'how to gain dominance among developers';
  }
}

module.exports = new PastebinPage();