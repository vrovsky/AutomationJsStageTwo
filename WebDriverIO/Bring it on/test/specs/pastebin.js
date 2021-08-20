import PastebinPage from '../pageobjects/pastebin.page';
describe('I can win webdriverIO task', () => {
  it('should open the main url', async () => {
    PastebinPage.open();
  });
  it('should find New Paste form and input text', async () => {
    await PastebinPage.pasteForm.addValue(PastebinPage.pasteCode);
  });
  it('should find Syntax ighlighter droplist and choose "Bash"', async () => {
    await PastebinPage.codeHighlighter.click();
    await PastebinPage.bashHighlighter.setValue('Bash');
    await PastebinPage.bashHighlighter.keys('\uE007');
  });
  it('should find Paste expiration droplist and choose expiration time', async () => {
    await PastebinPage.expirationList.click();
    await expect(PastebinPage.expirationInTenMinutes).toHaveText('10 Minutes');
    await PastebinPage.expirationInTenMinutes.click();
  });
  it('should enter name of the paste and save it', async () => {
    await PastebinPage.postformName.addValue(
      'how to gain dominance among developers'
    );
    await PastebinPage.createPasteBtn.click();
    await expect(browser).toHaveTitle(
      'how to gain dominance among developers - Pastebin.com'
    );
  });
  it('should check if bash syntax enabled', async () => {
    await expect(PastebinPage.bashHighlightEnable).toBeDisabled();
  });
  it('should check the Paste code', async () => {});
});
