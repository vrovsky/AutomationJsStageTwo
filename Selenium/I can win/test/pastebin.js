const PastebinPageFn = require('../functions/pastebinPageFn');

describe('I can win task for selenium webdriverjs tutorial', function () {
  this.timeout(50000);

  it('should create new paste', async function () {
    await PastebinPageFn.createPaste();
    await PastebinPageFn.checkPaste();
  });
});
