import PastebinPage from '../test/pageobjects/pastebin.page';
import Page from '../test/pageobjects/page';
import HelpIt from './helpit';

class PastebinFn extends Page{
async createPaste(){
    PastebinPage.open();
    await HelpIt.write(PastebinPage.pasteForm, PastebinPage.postformText);
    await HelpIt.click(PastebinPage.codeHighlighter);
    await HelpIt.writeAndSumbit(PastebinPage.highlighterInput,PastebinPage.bashHighlighter);
    await HelpIt.choseFromDroplist(PastebinPage.expirationList, PastebinPage.neededExpiration);
    await HelpIt.write(PastebinPage.pasteNameElement, PastebinPage.title);
    await HelpIt.click(PastebinPage.createPasteBtn);
  }

  async checkPaste(){
    await HelpIt.checkTitle(PastebinPage.title);
    await HelpIt.checkElementForHaving(PastebinPage.bashHighlighterElement, PastebinPage.bashHighlighter);
    await HelpIt.checkElementForHaving(PastebinPage.pasteTextElement, PastebinPage.postformText);
  }
}
module.exports = new PastebinFn();