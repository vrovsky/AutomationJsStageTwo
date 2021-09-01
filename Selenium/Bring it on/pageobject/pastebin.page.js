const { Builder, By, Key, until } = require('selenium-webdriver');
var Page = require('./page');
var HelpIt = require('../functions/helpit');
var webdriver = require('selenium-webdriver');
const { expect } = require('chai');

class PastebinPage extends Page {
  constructor(){
    super()
    this.postform = '//*[@id="postform-text"]';
    this.highlighterDroplist = '//span[@id="select2-postform-format-container"]';
    this.syntaxInput = '//input[@class="select2-search__field"]'
    this.expirationDroplist = '//*[@id="select2-postform-expiration-container"]';
    this.neededExpiration = '//*[@id="select2-postform-expiration-results"]/li[3]';
    this.pasteName = '//input[@id="postform-name"]';
    this.pasteText = '//textarea[@class="textarea"]';
    this.highlighterElement = '//a[@href="/archive/bash"]';

    this.open(this.pastebinUrl);
    driver.manage().window().maximize();
  }
  async createPaste(){
    await HelpIt.write(this.postform, this.postformText);
    await HelpIt.clickElement(this.highlighterDroplist);
    await HelpIt.writeAndSumbit(this.syntaxInput, "Bash")
    await HelpIt.choseDroplistElement(this.expirationDroplist, this.neededExpiration);
    await HelpIt.writeAndSumbit(this.pasteName, this.title);
  }
  async checkPaste(){
    await HelpIt.checkElementByXpath(this.pasteText, this.postformText);
    await HelpIt.checkElementByXpath(this.highlighterElement,this.bashHighlighter);
    await HelpIt.checkTitle(this.title);
    await driver.quit();
  }

  get pastebinUrl() {return 'http://pastebin.com/';}
  get title() { return 'how to gain dominance among developers';}
  get bashHighlighter() { return "Bash";}
  get postformText() {
    return `git config --global user.name  "New Sheriff in Town"
git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
git push origin master --force`;
  }
}

module.exports = new PastebinPage();
