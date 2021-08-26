const CloudGooglePage = require('../pageobject/cloudgoogle.page');
const { expect } = require('chai');

describe('Hurt me plenty task for selenium webdriver tutorial', function () {
  this.timeout(50000);
  before(() => {
    CloudGooglePage.open(CloudGooglePage.cloudGoogleUrl);
    driver.manage().window().maximize();
  });
  // after(() => {
  //   driver.quit();
  // });
  it('should find pricing calculator', async () => {
    await CloudGooglePage.find_searchBox();
    await CloudGooglePage.find_inputSearchField();
    await CloudGooglePage.find_searchingResult();
  });

  it('should switch to frame ', async () => {
    await CloudGooglePage.switchToFrame();
  });
  it('should add number of instances', async () => {
    await CloudGooglePage.find_numberOfInstancesField();
  });
  it('should choose machine series', async () => {
    await CloudGooglePage.find_machineSeriesList();
    await CloudGooglePage.find_n1MachineSeries();
  });
  it('should choose machine type', async () => {
    await CloudGooglePage.find_machineTypeList();
    await CloudGooglePage.find_n1s8MachineType();
  });

  it('should add GPU', async () => {
    await CloudGooglePage.find_addGPUsButton();
    await CloudGooglePage.find_neededNumberOfGPUs();
    await CloudGooglePage.find_typeOfGPUsList();
    await CloudGooglePage.find_neededTypeOfGPU();
  });
  it('should add SDD', async () => {
    await CloudGooglePage.find_listOfSDDs();
    await CloudGooglePage.find_neededTypeOfSDD();
  });
  it('should choose datacenter location', async () => {
    await CloudGooglePage.find_datacenterLocationList();
    await CloudGooglePage.find_neededDatacenterLocation();
  });
  it('should choose usage time', async () => {
    await CloudGooglePage.find_commitedUsageList();
    await CloudGooglePage.find_commitedUsageTime();
  });
  it('should add to estimate', async () => {
    await CloudGooglePage.find_addToEstimateBtn();
  });
});
