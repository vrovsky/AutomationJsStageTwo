const PastebinPage = require('../pageobject/pastebin.page');

describe('Bring it on task for selenium webdriver tutorial', function () {
  this.timeout(50000);

  it('should create new paste', async () => {
    await PastebinPage.createPaste();
    await PastebinPage.checkPaste();
  });

});
