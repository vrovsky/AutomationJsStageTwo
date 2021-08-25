const PastebinPage = require('../pageobject/pastebin.page');
const { expect } = require('chai');

describe('Bring it on task for selenium webdriver tutorial', function () {
  this.timeout(50000);
  before(() => {
    PastebinPage.open(PastebinPage.pastebinUrl);
  });
  // after(() => {
  //   driver.quit();
  // });
  it('should create new paste', async () => {
    await PastebinPage.enter_postform(PastebinPage.gitCommands);
    await PastebinPage.find_syntaxHighlighlitingForm();
    await PastebinPage.chose_syntaxHighlighter();
    await PastebinPage.find_expirationForm();
    await PastebinPage.chose_expiration();
    await PastebinPage.enter_postformName(PastebinPage.title);
  });
  it('should check new paste fields', async () => {
    await PastebinPage.check_title();
    await PastebinPage.check_textHighlighter();
    await PastebinPage.check_pasteText(PastebinPage.gitCommands);
  });
});
