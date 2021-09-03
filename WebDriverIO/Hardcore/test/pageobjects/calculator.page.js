import Page from './page';

class CalculatorPage extends Page{
  get numberOfInstances() { return $('//input[@ng-model="listingCtrl.computeServer.quantity"]'); }
  get machineSeriesList() { return $('//*[contains(text(), "E2")]'); }
  get n1MachineSeries() { return $('//*[contains(text(), "N1")]'); }
  get machineTypeList() { return $('//*[contains(text(), "n1-standard-1 (vCPUs")]'); }
  get n1s8MachineType() { return $('//*[contains(text(), "n1-standard-8")]'); }
  get addGPUsButton() { return $('//md-checkbox[@aria-label="Add GPUs"]'); }
  get numberOfGPUsList() { return $('//md-select[@placeholder="Number of GPUs"]//div[@class="md-text ng-binding"]');}
  get neededNumberOfGPUs() { return $$('//md-option[@ng-disabled="item.value != 0 && item.value < listingCtrl.minGPU"]')[1];}
  get typeOfGPUsList() {return $('//md-input-container[@class="md-input-has-placeholder md-input-has-value flex"]');}
  get neededTypeOfGPU() {return $('//md-option[@value="NVIDIA_TESLA_V100"]');}
  get listOfSDDs() {return $('//md-select[@placeholder="Local SSD"]/md-select-value/span/div[@class="md-text ng-binding"]');}
  get neededTypeOfSDD() {return $('//md-option[@ng-repeat="item in listingCtrl.dynamicSsd.computeServer"][@value="2"]');}
  get datacenterLocationList() {return $('//md-select[@placeholder="Datacenter location"]//md-select-value[@class="md-select-value"]');}
  get neededDatacenterLocation() {return $('//md-select-menu[@class="md-overflow"]//md-option[@value="europe-west3"]//div[@class="md-text ng-binding"]');}
  get commitedUsageList() {return $('//md-select[@placeholder="Committed usage"][@ng-disabled="listingCtrl.isCudDisabled"]//md-select-value[@class="md-select-value"]//span//div');}
  get commitedUsageTime() {return $('//div[@class="md-select-menu-container md-active md-clickable"]//md-select-menu//md-content//md-option[@ng-value="1"]//div[@class="md-text"]');}
  get addToEstimateBtn() {return $('//button[@class="md-raised md-primary cpc-button md-button md-ink-ripple"][@aria-label="Add to Estimate"]');}
}

module.exports = new CalculatorPage();