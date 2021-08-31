const { Builder, By, Key, until } = require('selenium-webdriver');
var Page = require('./page');
var webdriver = require('selenium-webdriver');
const { expect } = require('chai');
var HelpIt = require('../functions/helpit');

class CalculatorPage extends Page {
  constructor() {
    super();
    this.numberOfInstances =
      '//input[@ng-model="listingCtrl.computeServer.quantity"]';
    this.machineSeriesList =
      '//md-select[@placeholder="Series"]//md-select-value//span//div';
    this.n1MachineSeries =
      '//md-option[@value="n1"]//div[@class="md-text ng-binding"]';
    this.machineTypeList =
      '//md-select[@placeholder="Instance type"]//md-select-value//span//div';
    this.n1s8MachineType =
      '//md-option[@value="CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8"]';
    this.addGPUsButton = '//md-checkbox[@aria-label="Add GPUs"]';
    this.numberOfGPUsList =
      '//md-select[@placeholder="Number of GPUs"]//div[@class="md-text ng-binding"]';
    this.neededNumberOfGPUs =
      '//md-option[@ng-disabled="item.value != 0 && item.value < listingCtrl.minGPU"][2]';
    this.typeOfGPUsList =
      '//md-input-container[@class="md-input-has-placeholder md-input-has-value flex"]';
    this.neededTypeOfGPU = '//md-option[@value="NVIDIA_TESLA_V100"]';
    this.listOfSDDs =
      '//md-select[@placeholder="Local SSD"]//md-select-value[@class="md-select-value"]//span//div[@class="md-text ng-binding"]';
    this.neededTypeOfSDD =
      '//md-option[@ng-repeat="item in listingCtrl.dynamicSsd.computeServer"][@value="2"]';
    this.datacenterLocationList =
      '//md-select[@placeholder="Datacenter location"]//md-select-value[@class="md-select-value"]';
    this.neededDatacenterLocation =
      '//md-select-menu[@class="md-overflow"]//md-option[@value="europe-west3"]//div[@class="md-text ng-binding"]';
    this.commitedUsageList =
      '//md-select[@placeholder="Committed usage"][@ng-disabled="listingCtrl.isCudDisabled"]//md-select-value[@class="md-select-value"]//span//div';
    this.commitedUsageTime =
      '//div[@class="md-select-menu-container md-active md-clickable"]//md-select-menu//md-content//md-option[@ng-value="1"]//div[@class="md-text"]';
    this.addToEstimateBtn =
      '//button[@class="md-raised md-primary cpc-button md-button md-ink-ripple"][@aria-label="Add to Estimate"][1]';
  }
  async addNumberOfInstances() {
    await HelpIt.write(this.numberOfInstances, '4');
  }
  async choseMachineSeries() {
    await HelpIt.choseDroplistElement(
      this.machineSeriesList,
      this.n1MachineSeries
    );
  }
  async choseMachineType() {
    await HelpIt.choseDroplistElement(
      this.machineTypeList,
      this.n1s8MachineType
    );
  }
  async addGPU() {
    await HelpIt.clickElement(this.addGPUsButton);
    await HelpIt.choseDroplistElement(
      this.numberOfGPUsList,
      this.neededNumberOfGPUs
    );
    await HelpIt.choseDroplistElement(
      this.typeOfGPUsList,
      this.neededTypeOfGPU
    );
  }
  async addSDD() {
    await HelpIt.choseDroplistElement(this.listOfSDDs, this.neededTypeOfSDD);
  }
  async choseDatacenterLocation() {
    await HelpIt.choseDroplistElement(
      this.datacenterLocationList,
      this.neededDatacenterLocation
    );
  }
  async choseUsageTime() {
    await HelpIt.choseDroplistElement(
      this.commitedUsageList,
      this.commitedUsageTime
    );
  }
  async clickAddToEstimateBtn() {
    await HelpIt.clickElement(this.addToEstimateBtn);
  }
  async checkAddingResults() {
    await HelpIt.checkElementByXpath(this.addToEstimateBtn, 'ADD TO ESTIMATE');
  }
}

module.exports = new CalculatorPage();
