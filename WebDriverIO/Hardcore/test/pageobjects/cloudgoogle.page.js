import Page from './page';

class CloudgooglePage extends Page {
  get searchBox() {
    return $('.devsite-searchbox');
  }
  get inputSearchField() {
    return $(
      '/html/body/section/devsite-header/div/div[1]/div/div/div[2]/devsite-search/form/div[1]/div/input'
    );
  }
  get searchingResult() {
    return $('.gs-title');
  }
  get numberOfInstancesField() {
    return $('//*[@id="input_67"]');
  }
  get machineSeriesList() {
    return $('#select_value_label_63 > span:nth-child(1) > div');
  }
  get n1MachineSeries() {
    return $('//*[@id="select_option_201"]');
  }
  get machineTypeList() {
    return $('#select_value_label_64 > span:nth-child(1) > div');
  }
  get n1s8MachineType() {
    return $('//*[@id="select_option_397"]');
  }
  get addGPUsButton() {
    return $$('div.md-label')[1];
  }
  get numberOfGPUsList() {
    return $(
      '#mainForm > div:nth-child(3) > div > md-card > md-card-content > div > div:nth-child(1) > form > div.ng-scope.layout-column > div.layout-row > div.layout-column.flex-gt-sm-90.flex-80 > div.layout-row.flex-gt-sm-90.flex-80 > md-input-container:nth-child(1)'
    );
  }
  get neededNumberOfGPUs() {
    return $('#select_option_436');
  }
  get typeOfGPUsList() {
    return $(
      '#mainForm > div:nth-child(3) > div > md-card > md-card-content > div > div:nth-child(1) > form > div.ng-scope.layout-column > div.layout-row > div.layout-column.flex-gt-sm-90.flex-80 > div.layout-row.flex-gt-sm-90.flex-80 > md-input-container:nth-child(2)'
    );
  }
  get neededTypeOfGPU() {
    return $('#select_option_443');
  }
  get listOfSDDs() {
    return $('#select_value_label_391 > span:nth-child(1) > div');
  }
  get neededTypeOfSDD() {
    return $('#select_option_418');
  }
  get datacenterLocationList() {
    return $('#select_value_label_65');
  }
  get neededDatacenterLocation() {
    return $('#select_option_218');
  }
  get commitedUsageList() {
    return $(
      '#mainForm > div:nth-child(3) > div > md-card > md-card-content > div > div:nth-child(1) > form > div:nth-child(17) > div.layout-column.flex-gt-sm-90.flex-80 > md-input-container'
    );
  }
  get commitedUsageTime() {
    return $('#select_option_101');
  }
  get addToEstimateBtn() {
    return $(
      '#mainForm > div:nth-child(3) > div > md-card > md-card-content > div > div:nth-child(1) > form > div.layout-align-end-start.layout-row > button'
    );
  }
  get emailEstimateBtn() {
    return $('#email_quote');
  }
  get emailField() {
    return $('//input[@type="email"]');
  }
  get sendEmailBtn() {
    return $$(
      '//button[@class="md-raised md-primary cpc-button md-button md-ink-ripple"]'
    )[6];
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
