import PastebinPage from '../pageobjects/pastebin.page';
describe('Bring it on webdriverIO task', () => {
  before(() => {
    PastebinPage.open();
  });
  it('create new paste', async () => {
    await PastebinPage.createPaste();
    await PastebinPage.checkPaste();
  });
  

});
