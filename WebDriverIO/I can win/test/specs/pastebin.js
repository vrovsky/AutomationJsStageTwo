import PastebinPage from '../pageobjects/pastebin.page';

describe('I can win webdriverIO task', () => {

  it('should create new paste', async () => {
    await PastebinPage.createPaste();
    await PastebinPage.checkPasteTitle();
  });
});
