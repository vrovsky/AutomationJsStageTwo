import CloudgooglePage from '../pageobjects/cloudgoogle.page';

describe('Hurt me plenty webdriverIO task', () => {
  before(() => {
    CloudgooglePage.open();
  });
  it('shold open searchbox and find Pricing calculator', async () => {
    await CloudgooglePage.searchBox.click();
    await CloudgooglePage.inputSearchField.setValue(
      'Google Cloud Platform Pricing Calculator'
    );
    await CloudgooglePage.inputSearchField.keys('\uE007');
  });
  it('should choose pricing calculator from the search list', async () => {
    await CloudgooglePage.searchingResult.click();
  });
  it('should input number of instance', async () => {
    await CloudgooglePage.firstChildFrame.waitForDisplayed(20000);
    await browser.switchToFrame(0);
    await browser.switchToFrame(1);
    await CloudgooglePage.numberOfInstancesField.click();
    await CloudgooglePage.numberOfInstancesField.addValue('4');
  });
});
