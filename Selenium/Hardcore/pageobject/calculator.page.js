var Page = require('./page');

class CalculatorPage extends Page {
  constructor() {
    super();
    this.numberOfInstances = '//input[@ng-model="listingCtrl.computeServer.quantity"]';
    this.machineSeriesList = '//md-select[@placeholder="Series"]//md-select-value//span//div';
    this.n1MachineSeries = '//md-option[@value="n1"]//div[@class="md-text ng-binding"]';
    this.machineTypeList = '//md-select[@placeholder="Instance type"]//md-select-value//span//div';
    this.n1s8MachineType = '//md-option[@value="CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8"]';
    this.addGPUsButton = '//md-checkbox[@aria-label="Add GPUs"]';
    this.numberOfGPUsList = '//md-select[@placeholder="Number of GPUs"]//div[@class="md-text ng-binding"]';
    this.neededNumberOfGPUs = '//md-option[@ng-disabled="item.value != 0 && item.value < listingCtrl.minGPU"][2]';
    this.typeOfGPUsList = '//md-input-container[@class="md-input-has-placeholder md-input-has-value flex"]';
    this.neededTypeOfGPU = '//md-option[@value="NVIDIA_TESLA_V100"]';
    this.listOfSDDs = '//md-select[@placeholder="Local SSD"]//md-select-value[@class="md-select-value"]//span//div[@class="md-text ng-binding"]';
    this.neededTypeOfSDD = '//md-option[@ng-repeat="item in listingCtrl.dynamicSsd.computeServer"][@value="2"]';
    this.datacenterLocationList = '//md-select[@placeholder="Datacenter location"]//md-select-value[@class="md-select-value"]';
    this.neededDatacenterLocation = '//md-select-menu[@class="md-overflow"]//md-option[@value="europe-west3"]//div[@class="md-text ng-binding"]';
    this.commitedUsageList = '//md-select[@placeholder="Committed usage"][@ng-disabled="listingCtrl.isCudDisabled"]//md-select-value[@class="md-select-value"]//span//div';
    this.commitedUsageTime = '//div[@class="md-select-menu-container md-active md-clickable"]//md-select-menu//md-content//md-option[@ng-value="1"]//div[@class="md-text"]';
    this.addToEstimateBtn = '//button[@class="md-raised md-primary cpc-button md-button md-ink-ripple"][@aria-label="Add to Estimate"][1]';
  }
}

module.exports = new CalculatorPage();
