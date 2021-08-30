const CloudGooglePage = require('../pageobject/cloudgoogle.page');
const YopmailPage = require('../pageobject/yopmail.page');
const { By } = require('selenium-webdriver');
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
    await CloudGooglePage.find_searchResult();
  });
  it('should switch to frame ', async () => {
    await CloudGooglePage.switchToFrame();
  });
  it('should add number of instances', async () => {
    await CloudGooglePage.find_numberOfInstancesFields();
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
    await CloudGooglePage.find_numberOfGPUsList();
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
  it('should click email estimate button', async () => {
    await CloudGooglePage.find_emailEstimateBtn();
  });
  it('should switch to mail page and generate new email', async () => {
    await driver.switchTo().newWindow('tab');
    await YopmailPage.open(YopmailPage.yopmailUrl);
    await YopmailPage.find_generateMailBtn();
  });
  it('should generate new email and copy it', async () => {
    let generatedMail = await driver
      .findElement(By.xpath('//*[@id="egen"]'))
      .getText();
    await CloudGooglePage.switchWindows(0);
    await CloudGooglePage.switchToFrame();
    await CloudGooglePage.find_emailfield(generatedMail);
    await CloudGooglePage.find_sendEmailBtn();
  });
  it('should switch to yopmail', async () => {
    await CloudGooglePage.switchWindows(1);
    await YopmailPage.find_checkMailBtn();
    await YopmailPage.click_refreshBtn();
    await YopmailPage.switchToFrame();
  });
  it('should check estimated price', async () => {
    let mailedPrice = await driver
      .findElement(
        By.xpath(
          '//div[@id="mail"]//div//div//table//tbody//tr[2]//table//tbody//tr[2]//td[2]//h3'
        )
      )
      .getText();
    await expect(mailedPrice).to.equal('USD 1,083.33');
  });
});
