var Page = require('../pageobject/page');
var HelpIt = require('../functions/helpit');
var PastebinPage = require('../pageobject/pastebin.page');

class PastebinPageFn extends Page{
    async createPaste(){
        await HelpIt.write(PastebinPage.postform, PastebinPage.postformText);
        await HelpIt.clickElement(PastebinPage.highlighterDroplist);
        await HelpIt.writeAndSumbit(PastebinPage.syntaxInput, "Bash")
        await HelpIt.choseDroplistElement(PastebinPage.expirationDroplist, PastebinPage.neededExpiration);
        await HelpIt.writeAndSumbit(PastebinPage.pasteName, PastebinPage.title);
  }
    async checkPaste(){
        await HelpIt.checkElementByXpath(PastebinPage.pasteText, PastebinPage.postformText);
        await HelpIt.checkElementByXpath(PastebinPage.highlighterElement,PastebinPage.bashHighlighter);
        await HelpIt.checkTitle(PastebinPage.title);
        await driver.quit();
  }
}

module.exports = new PastebinPageFn();