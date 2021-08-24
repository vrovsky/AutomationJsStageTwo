import CloudgooglePage from '../pageobjects/cloudgoogle.page';
import YopmailPage from '../pageobjects/yopmail.page';

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
  it('should chose number of instances', async () => {
    await browser.switchToFrame(0);
    await browser.switchToFrame(0);
    await CloudgooglePage.numberOfInstancesField.click();
    await CloudgooglePage.numberOfInstancesField.addValue('4');
  });
  it('should choose machine type', async () => {
    await CloudgooglePage.machineSeriesList.click();
    await CloudgooglePage.n1MachineSeries.click();
    await CloudgooglePage.machineTypeList.click();
    await CloudgooglePage.n1s8MachineType.click();
  });
  it('should add GPUs', async () => {
    await CloudgooglePage.addGPUsButton.click();
    await CloudgooglePage.numberOfGPUsList.click();
    await CloudgooglePage.neededNumberOfGPUs.click();
    await CloudgooglePage.typeOfGPUsList.click();
    await CloudgooglePage.neededTypeOfGPU.click();
  });
  it('should add local SDD', async () => {
    await CloudgooglePage.listOfSDDs.click();
    await CloudgooglePage.neededTypeOfSDD.click();
  });
  it('shold chose datacenter location', async () => {
    await CloudgooglePage.datacenterLocationList.click();
    await CloudgooglePage.neededDatacenterLocation.click();
  });
  it('should chose commited usage time', async () => {
    await CloudgooglePage.commitedUsageList.click();
    await CloudgooglePage.commitedUsageTime.click();
  });
  it('should add to estimate', async () => {
    await CloudgooglePage.addToEstimateBtn.click();
  });
  it('should click email estimate button', async () => {
    await CloudgooglePage.emailEstimateBtn.click();
  });
  it('should open second page with mailbox and generate new mail', async () => {
    await browser.newWindow(YopmailPage.youpmailURL);
    await YopmailPage.generateMailBtn.click();
  });
  it('should copy and paste generated mail', async () => {
    // await expect(YopmailPage.newMailGenerated).toBeDisplayed(2000);
    let generatedMail = await YopmailPage.newMailGenerated.getText();
    await browser.switchWindow('cloud.google.com');
    await browser.switchToFrame(0);
    await browser.switchToFrame(0);
    await CloudgooglePage.emailField.click();
    await CloudgooglePage.emailField.addValue(generatedMail);
    await CloudgooglePage.sendEmailBtn.click();
  });
  it('should switch to mail page and check costs', async () => {
    await browser.switchWindow('yopmail.com');
    await YopmailPage.checkMailBtn.click();
    await browser.refresh();
    await browser.switchToFrame(2);
    await expect(YopmailPage.monthlyCostsField).toHaveText('USD 1,083.33');
  });
});
