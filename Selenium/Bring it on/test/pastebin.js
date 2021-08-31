const PastebinPage = require('../pageobject/pastebin.page');
const { By, until } = require('selenium-webdriver');

describe('Bring it on task for selenium webdriver tutorial', function () {
  this.timeout(50000);
  before(() => {
    PastebinPage.open(PastebinPage.pastebinUrl);
  });
  after(() => {
    driver.quit();
  });
  it('should create new paste', async () => {
    await PastebinPage.enter_postform(PastebinPage.gitCommands);
    await PastebinPage.find_syntaxHighlighlitingForm();
    await PastebinPage.chose_syntaxHighlighter();
    await PastebinPage.find_expirationForm();
    await PastebinPage.chose_expiration();
    await PastebinPage.enter_postformName(PastebinPage.title);
    await driver.wait(
      until.titleIs('how to gain dominance among developers - Pastebin.com')
    );
  });
  it('should check bash syntax highlighter', async () => {
    await PastebinPage.check_textHighlighter();
  });
  it('should check pastecode', async () => {
    await PastebinPage.check_pasteText();
  });
});
