import Page from './page';

class CloudgooglePage extends Page {
  get searchBox() {
    return $('.devsite-searchbox');
  }
  get inputSearchField() {
    return $('//input[@name="q"]');
  }
  get searchingResult() {
    return $(
      '//*[@id="___gcse_0"]/div/div/div/div[5]/div[2]/div/div/div[1]/div[1]/div[1]/div[1]/div/a'
    );
  }
  get numberOfInstancesField() {
    return $('//input[@ng-model="listingCtrl.computeServer.quantity"]');
  }
  get machineSeriesList() {
    return $$(
      '//md-select-value[@class="md-select-value"]//div[@class="md-text ng-binding"]'
    )[0];
  }
  get n1MachineSeries() {
    return $('//md-option[@value="n1"]//div[@class="md-text ng-binding"]');
  }
  get machineTypeList() {
    return $$(
      '//md-select-value[@class="md-select-value"]//div[@class="md-text ng-binding"]'
    )[1];
  }
  get n1s8MachineType() {
    return $('//md-option[@value="CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8"]');
  }
  get addGPUsButton() {
    return $('//md-checkbox[@aria-label="Add GPUs"]');
  }
  get numberOfGPUsList() {
    return $(
      '//md-select[@placeholder="Number of GPUs"]//div[@class="md-text ng-binding"]'
    );
  }
  get neededNumberOfGPUs() {
    return $$(
      '//md-option[@ng-disabled="item.value != 0 && item.value < listingCtrl.minGPU"]'
    )[1];
  }
  get typeOfGPUsList() {
    return $(
      '//md-input-container[@class="md-input-has-placeholder md-input-has-value flex"]'
    );
  }
  get neededTypeOfGPU() {
    return $('//md-option[@value="NVIDIA_TESLA_V100"]');
  }
  get listOfSDDs() {
    return $(
      '//md-select[@placeholder="Local SSD"]//md-select-value[@class="md-select-value"]//span//div[@class="md-text ng-binding"]'
    );
  }
  get neededTypeOfSDD() {
    return $(
      '//md-option[@ng-repeat="item in listingCtrl.dynamicSsd.computeServer"][@value="2"]'
    );
  }
  get datacenterLocationList() {
    return $(
      '//md-select[@placeholder="Datacenter location"]//md-select-value[@class="md-select-value"]'
    );
  }
  get neededDatacenterLocation() {
    return $(
      '//md-select-menu[@class="md-overflow"]//md-option[@value="europe-west3"]//div[@class="md-text ng-binding"]'
    );
  }
  get commitedUsageList() {
    return $(
      '//md-select[@placeholder="Committed usage"][@ng-disabled="listingCtrl.isCudDisabled"]//md-select-value[@class="md-select-value"]//span//div'
    );
  }
  get commitedUsageTime() {
    return $(
      '//div[@class="md-select-menu-container md-active md-clickable"]//md-select-menu//md-content//md-option[@ng-value="1"]//div[@class="md-text"]'
    );
  }
  get addToEstimateBtn() {
    return $$(
      '//button[@class="md-raised md-primary cpc-button md-button md-ink-ripple"][@aria-label="Add to Estimate"]'
    )[0];
  }
  get vmClassItem() {
    return $('#compute > md-list > md-list-item:nth-child(4) > div');
  }
  get instanceTypeItem() {
    return $('#compute > md-list > md-list-item:nth-child(6) > div');
  }
  get regionItem() {
    return $('#compute > md-list > md-list-item:nth-child(8) > div');
  }
  get localSDDItem() {
    return $('#compute > md-list > md-list-item:nth-child(10) > div');
  }
  get commitmentTermItem() {
    return $('#compute > md-list > md-list-item:nth-child(12) > div');
  }
  get exstimatedCostItem() {
    return $(
      '#resultBlock > md-card > md-card-content > div > div > div > h2 > b'
    );
  }
  get firstChildFrame() {
    return $("//iframe[@name='goog_2136849245']");
  }
  get calculatorFrame() {
    return $('#myFrame');
  }
  open() {
    super.open('https://cloud.google.com');
  }
}

export default new CloudgooglePage();
