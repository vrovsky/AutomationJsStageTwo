const PastebinPage = require('../pageobject/pastebin.page');

describe('I can win task for selenium webdriverjs tutorial', function () {
  this.timeout(50000);

  it('should create new paste', async function () {
    await PastebinPage.createPaste();
    await PastebinPage.checkPaste();
  });
});
