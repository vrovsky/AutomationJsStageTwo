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
    await CloudGooglePage.chose_searchingResult();
    await CloudGooglePage.switchToFirstFrame();
    // await CloudGooglePage.switchToSecondFrame();
    await CloudGooglePage.find_numberOfInstancesField();
    await CloudGooglePage.find_machineSeriesList();
    await CloudGooglePage.find_n1MachineSeries();
    await CloudGooglePage.find_addGPUsButton();
    await CloudGooglePage.find_neededNumberOfGPUs();
    await CloudGooglePage.find_typeOfGPUsList();
    await CloudGooglePage.find_neededTypeOfGPU();
    await CloudGooglePage.find_listOfSDDs();
    await CloudGooglePage.find_neededTypeOfSDD();
    await CloudGooglePage.find_datacenterLocationList();
    await CloudGooglePage.find_neededDatacenterLocation();
    await CloudGooglePage.find_commitedUsageList();
    await CloudGooglePage.find_commitedUsageTime();
    await CloudGooglePage.find_addToEstimateBtn();
  });
});
