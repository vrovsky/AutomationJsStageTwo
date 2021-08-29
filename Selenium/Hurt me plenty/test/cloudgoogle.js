const CloudGooglePage = require('../pageobject/cloudgoogle.page');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
const { expect } = require('chai');
chai.use(chaiAsPromised);
const { Builder, By, Key, until } = require('selenium-webdriver');

describe('Hurt me plenty task for selenium webdriver tutorial', function () {
  this.timeout(50000);
  before(() => {
    CloudGooglePage.open(CloudGooglePage.cloudGoogleUrl);
    driver.manage().window().maximize();
  });
  after(() => {
    driver.quit();
  });
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
  it('should check virtual machine class selected', async () => {
    let virtualMachineClass = await driver
      .findElement(
        By.css('#compute > md-list > md-list-item:nth-child(4) > div')
      )
      .getText();
    await expect(virtualMachineClass).to.equal('VM class: regular');
  });
  it('should check instance type selected', async () => {
    let instanceType = await driver
      .findElement(
        By.css('#compute > md-list > md-list-item:nth-child(6) > div')
      )
      .getText();
    await expect(instanceType).is.equal('Instance type: n1-standard-8');
  });
  it('should check local SDD selected', async () => {
    let localSDD = await driver
      .findElement(
        By.css('#compute > md-list > md-list-item:nth-child(8) > div')
      )
      .getText();
    await expect(localSDD).is.equal(
      'Total available local SSD space 2x375 GiB'
    );
  });
  it('should check region selected', async () => {
    let regionSelected = await driver
      .findElement(
        By.css('#compute > md-list > md-list-item:nth-child(10) > div')
      )
      .getText();
    await expect(commitedTerm).is.equal('Commitment term: 1 Year');
  });
  it('should check commited term selected', async () => {
    let commitedTerm = await driver
      .findElement(
        By.css('#compute > md-list > md-list-item:nth-child(12) > div')
      )
      .getText();

    await expect(regionSelected).is.equal('Region: Frankfurt');
  });
  it('should check estimated cost', async () => {
    let estimatedCost = await driver
      .findElement(
        By.css(
          '#resultBlock > md-card > md-card-content > div > div > div > h2 > b'
        )
      )
      .getText();
    await expect(estimatedCost).is.equal(
      'Total Estimated Cost: USD 1,083.33 per 1 month'
    );
  });
});
