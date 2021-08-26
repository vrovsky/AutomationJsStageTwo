const { Builder, By, Key, until } = require('selenium-webdriver');
var Page = require('./page');
var webdriver = require('selenium-webdriver');

class CloudGooglePage extends Page {
  async find_searchBox() {
    await driver.findElement(By.css('.devsite-searchbox')).click();
  }
  async find_inputSearchField() {
    await driver
      .findElement(
        By.xpath(
          '/html/body/section/devsite-header/div/div[1]/div/div/div[2]/devsite-search/form/div[1]/div/input'
        )
      )
      .sendKeys('Google Cloud Platform Pricing Calculator', Key.RETURN);
  }

  async find_searchingResult() {
    await driver.findElement(By.css('.gs-title')).click();
  }
  async switchToFrame() {
    await driver
      .switchTo()
      .frame(
        await driver.findElement(By.xpath("//iframe[contains(@name,'goog_')]"))
      );
    await driver.switchTo().frame(await driver.findElement(By.id('myFrame')));
  }

  async find_numberOfInstancesField() {
    await driver
      .findElement(
        By.xpath('//input[@ng-model="listingCtrl.computeServer.quantity"]')
      )
      .sendKeys('4');
  }
  async find_machineSeriesList() {
    await driver
      .findElements(
        By.xpath(
          '//md-select-value[@class="md-select-value"]//div[@class="md-text ng-binding"]'
        )[0]
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
      .findElement(By.css('#select_value_label_64 > span:nth-child(1) > div'))
      .click();
  }

  async find_n1s8MachineType() {
    await driver
      .findElement(By.css('#select_value_label_64 > span:nth-child(1) > div'))
      .click();
  }
  async find_addGPUsButton() {
    await driver.findElements(By.css('div.md-label')[1]).click();
  }
  async find_neededNumberOfGPUs() {
    await driver.findElement(By.css('#select_option_436')).click();
  }
  async find_typeOfGPUsList() {
    await driver
      .findElement(
        By.css(
          '#mainForm > div:nth-child(3) > div > md-card > md-card-content > div > div:nth-child(1) > form > div.ng-scope.layout-column > div.layout-row > div.layout-column.flex-gt-sm-90.flex-80 > div.layout-row.flex-gt-sm-90.flex-80 > md-input-container:nth-child(2)'
        )
      )
      .click();
  }
  async find_neededTypeOfGPU() {
    await driver.findElement(By.css('#select_option_443')).click();
  }
  async find_listOfSDDs() {
    await driver
      .findElement(By.css('#select_value_label_391 > span:nth-child(1) > div'))
      .click();
  }
  async find_neededTypeOfSDD() {
    await driver.findElement(By.css('#select_option_418')).click();
  }
  async find_datacenterLocationList() {
    await driver.findElement(By.css('#select_value_label_65')).click();
  }
  async find_neededDatacenterLocation() {
    await driver.findElement(By.css('#select_option_218')).click();
  }
  async find_neededTypeOfSDD() {
    await driver.findElement(By.css('#select_option_418')).click();
  }
  async find_commitedUsageList() {
    await driver
      .findElement(
        By.css(
          '#mainForm > div:nth-child(3) > div > md-card > md-card-content > div > div:nth-child(1) > form > div:nth-child(17) > div.layout-column.flex-gt-sm-90.flex-80 > md-input-container'
        )
      )
      .click();
  }
  async find_commitedUsageTime() {
    await driver.findElement(By.css('#select_option_101')).click();
  }
  async find_addToEstimateBtn() {
    await driver
      .findElement(
        By.css(
          '#mainForm > div:nth-child(3) > div > md-card > md-card-content > div > div:nth-child(1) > form > div.layout-align-end-start.layout-row > button'
        )
      )
      .click();
  }
  async find_vmClassItem() {
    await driver
      .findElement(
        By.css('#compute > md-list > md-list-item:nth-child(4) > div')
      )
      .click();
  }
  async find_instanceTypeItem() {
    await driver
      .findElement(
        By.css('#compute > md-list > md-list-item:nth-child(6) > div')
      )
      .click();
  }
  async find_localSDDItem() {
    await driver
      .findElement(
        By.css('#compute > md-list > md-list-item:nth-child(8) > div')
      )
      .click();
  }
  async find_regionItem() {
    await driver
      .findElement(
        By.css('#compute > md-list > md-list-item:nth-child(10) > div')
      )
      .click();
  }
  async find_commitmentTermItem() {
    await driver
      .findElement(
        By.css('#compute > md-list > md-list-item:nth-child(12) > div')
      )
      .click();
  }
  async find_estimatedCostItem() {
    await driver
      .findElement(
        By.css(
          '#resultBlock > md-card > md-card-content > div > div > div > h2 > b'
        )
      )
      .click();
  }

  get cloudGoogleUrl() {
    return ' https://cloud.google.com/';
  }
}

module.exports = new CloudGooglePage();
