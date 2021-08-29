const { Builder, By, Key, until } = require('selenium-webdriver');
var Page = require('./page');
var webdriver = require('selenium-webdriver');

class CloudGooglePage extends Page {
  async find_searchBox() {
    await driver.findElement(By.css('.devsite-searchbox')).click();
  }
  async find_inputSearchField() {
    await driver
      .findElement(By.xpath('//input[@name="q"]'))
      .sendKeys('Google Cloud Platform Pricing Calculator', Key.RETURN);
  }
  async find_searchResult() {
    await driver.findElement(By.xpath('//a[@class="gs-title"][1]')).click();
  }
  async switchToFrame() {
    await driver
      .switchTo()
      .frame(
        await driver.findElement(By.xpath("//iframe[contains(@name,'goog_')]"))
      );
    await driver.switchTo().frame(await driver.findElement(By.id('myFrame')));
  }

  async find_numberOfInstancesFields() {
    await driver
      .findElement(
        By.xpath('//input[@ng-model="listingCtrl.computeServer.quantity"]')
      )
      .sendKeys('4');
  }
  async find_machineSeriesList() {
    await driver
      .findElement(
        By.xpath(
          '//md-select[@placeholder="Series"]//md-select-value//span//div'
        )
      )
      .click();
  }
  async find_n1MachineSeries() {
    await driver
      .findElement(
        By.xpath('//md-option[@value="n1"]//div[@class="md-text ng-binding"]')
      )
      .click();
  }

  async find_machineTypeList() {
    await driver
      .findElement(
        By.xpath(
          '//md-select[@placeholder="Instance type"]//md-select-value//span//div'
        )
      )
      .click();
  }

  async find_n1s8MachineType() {
    await driver
      .findElement(
        By.xpath('//md-option[@value="CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8"]')
      )
      .click();
  }
  async find_addGPUsButton() {
    await driver
      .findElement(By.xpath('//md-checkbox[@aria-label="Add GPUs"]'))
      .click();
  }
  async find_numberOfGPUsList() {
    await driver
      .findElement(
        By.xpath(
          '//md-select[@placeholder="Number of GPUs"]//div[@class="md-text ng-binding"]'
        )
      )
      .click();
  }
  async find_neededNumberOfGPUs() {
    await driver
      .findElement(
        By.xpath(
          '//md-option[@ng-disabled="item.value != 0 && item.value < listingCtrl.minGPU"][2]'
        )
      )
      .click();
  }
  async find_typeOfGPUsList() {
    await driver
      .findElement(
        By.xpath(
          '//md-input-container[@class="md-input-has-placeholder md-input-has-value flex"]'
        )
      )
      .click();
  }
  async find_neededTypeOfGPU() {
    await driver
      .findElement(By.xpath('//md-option[@value="NVIDIA_TESLA_V100"]'))
      .click();
  }
  async find_listOfSDDs() {
    await driver
      .findElement(
        By.xpath(
          '//md-select[@placeholder="Local SSD"]//md-select-value[@class="md-select-value"]//span//div[@class="md-text ng-binding"]'
        )
      )
      .click();
  }
  async find_neededTypeOfSDD() {
    await driver
      .findElement(
        By.xpath(
          '//md-option[@ng-repeat="item in listingCtrl.dynamicSsd.computeServer"][@value="2"]'
        )
      )
      .click();
  }
  async find_datacenterLocationList() {
    await driver
      .findElement(
        By.xpath(
          '//md-select[@placeholder="Datacenter location"]//md-select-value[@class="md-select-value"]'
        )
      )
      .click();
  }
  async find_neededDatacenterLocation() {
    await driver
      .findElement(
        By.xpath(
          '//md-select-menu[@class="md-overflow"]//md-option[@value="europe-west3"]//div[@class="md-text ng-binding"]'
        )
      )
      .click();
  }
  async find_commitedUsageList() {
    await driver
      .findElement(
        By.xpath(
          '//md-select[@placeholder="Committed usage"][@ng-disabled="listingCtrl.isCudDisabled"]//md-select-value[@class="md-select-value"]//span//div'
        )
      )
      .click();
  }
  async find_commitedUsageTime() {
    await driver
      .findElement(
        By.xpath(
          '//div[@class="md-select-menu-container md-active md-clickable"]//md-select-menu//md-content//md-option[@ng-value="1"]//div[@class="md-text"]'
        )
      )
      .click();
  }
  async find_addToEstimateBtn() {
    await driver
      .findElement(
        By.xpath(
          '//button[@class="md-raised md-primary cpc-button md-button md-ink-ripple"][@aria-label="Add to Estimate"][1]'
        )
      )
      .click();
  }
  async find_instanceTypeItem() {
    await driver
      .findElement(
        By.css('#compute > md-list > md-list-item:nth-child(6) > div')
      )
      .getText();
  }
  async find_localSDDItem() {
    await driver
      .findElement(
        By.css('#compute > md-list > md-list-item:nth-child(8) > div')
      )
      .getText();
  }
  async find_regionItem() {
    await driver
      .findElement(
        By.css('#compute > md-list > md-list-item:nth-child(10) > div')
      )
      .getText();
  }
  async find_commitmentTermItem() {
    await driver
      .findElement(
        By.css('#compute > md-list > md-list-item:nth-child(12) > div')
      )
      .getText();
  }
  async find_estimatedCostItem() {
    await driver
      .findElement(
        By.css(
          '#resultBlock > md-card > md-card-content > div > div > div > h2 > b'
        )
      )
      .getText();
  }

  get cloudGoogleUrl() {
    return ' https://cloud.google.com/';
  }
}

module.exports = new CloudGooglePage();
