import PastebinPage from '../pageobjects/pastebin.page';
describe('I can win webdriverIO task', () => {
  it('should open the main url', async () => {
    PastebinPage.open();
  });
  it('should find New Paste form and input text', async () => {
    await PastebinPage.pasteForm.addValue('Hello from WebDriver');
  });
  it('should find Paste expiration droplist and choose expiration time', async () => {
    await PastebinPage.expirationList.click();
    await expect(PastebinPage.expirationInTenMinutes).toHaveText('10 Minutes');
    await PastebinPage.expirationInTenMinutes.click();
  });
  it('should enter name of the paste and save it', async () => {
    await PastebinPage.postformName.addValue('helloweb');
    await PastebinPage.createPasteBtn.click();
    await expect(browser).toHaveTitle('helloweb - Pastebin.com');
  });
});
