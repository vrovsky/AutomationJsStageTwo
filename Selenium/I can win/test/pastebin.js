const pastebinPage = require('../pageobject/pastebin.page');
const PastebinPage = require('../pageobject/pastebin.page');

describe('I can win task for selenium webdriverjs tutorial', function () {
  this.timeout(50000);
  before(() => {
    PastebinPage.open(PastebinPage.pastebinUrl);
  });
  after(() => {
    driver.quit();
  });
  it('should create new paste', async function () {
    await PastebinPage.enter_postform('Hello from WebDriver');
    await PastebinPage.find_expirationForm();
    await PastebinPage.chose_expiration();
    await PastebinPage.enter_postformName('helloweb');
  });
});
