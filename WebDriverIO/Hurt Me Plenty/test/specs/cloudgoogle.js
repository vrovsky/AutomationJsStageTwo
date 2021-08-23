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
  it('should check parameters and price', async () => {
    await expect(CloudgooglePage.vmClassItem).toHaveText('VM class: regular');
    await expect(CloudgooglePage.instanceTypeItem).toHaveText(
      'Instance type: n1-standard-8'
    );
    await expect(CloudgooglePage.regionItem).toHaveText('Region: Frankfurt');
    await expect(CloudgooglePage.localSDDItem).toHaveText(
      'Total available local SSD space 2x375 GiB'
    );
    await expect(CloudgooglePage.commitmentTermItem).toHaveText(
      'Commitment term: 1 Year'
    );
    await expect(CloudgooglePage.exstimatedCostItem).toHaveText(
      'Total Estimated Cost: USD 1,083.33 per 1 month'
    );
  });
});
