import PastebinPageFn from '../../functions/pastebinPageFn';

describe('Bring it on webdriverIO task', () => {

  it('should create new paste', async () => {
    await PastebinPageFn.createPaste();
    await PastebinPageFn.checkPaste();
  });
  
});
