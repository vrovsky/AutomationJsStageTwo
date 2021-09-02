var Page = require('../pageobject/page');
var HelpIt = require('../functions/helpit');
var CalculatorPage = require('../pageobject/calculator.page');

class CalculatorPageFn extends Page{
     async addNumberOfInstances() {
    await HelpIt.write(CalculatorPage.numberOfInstances, '4');
  }
  async choseMachineSeries() {
    await HelpIt.choseDroplistElement(
      CalculatorPage.machineSeriesList,
      CalculatorPage.n1MachineSeries
    );
  }
  async choseMachineType() {
    await HelpIt.choseDroplistElement(
      CalculatorPage.machineTypeList,
      CalculatorPage.n1s8MachineType
    );
  }
  async addGPU() {
    await HelpIt.clickElement(CalculatorPage.addGPUsButton);
    await HelpIt.choseDroplistElement(
      CalculatorPage.numberOfGPUsList,
      CalculatorPage.neededNumberOfGPUs
    );
    await HelpIt.choseDroplistElement(
      CalculatorPage.typeOfGPUsList,
      CalculatorPage.neededTypeOfGPU
    );
  }
  async addSDD() {
    await HelpIt.choseDroplistElement(CalculatorPage.listOfSDDs, CalculatorPage.neededTypeOfSDD);
  }
  async choseDatacenterLocation() {
    await HelpIt.choseDroplistElement(
      CalculatorPage.datacenterLocationList,
      CalculatorPage.neededDatacenterLocation
    );
  }
  async choseUsageTime() {
    await HelpIt.choseDroplistElement(
      CalculatorPage.commitedUsageList,
      CalculatorPage.commitedUsageTime
    );
  }
  async clickAddToEstimateBtn() {
    await HelpIt.clickElement(CalculatorPage.addToEstimateBtn);
  }
  async checkAddingResults() {
    await HelpIt.checkElementByXpath(CalculatorPage.addToEstimateBtn, 'ADD TO ESTIMATE');
  }
  async choseMachine(){
      await this.addNumberOfInstances();
      await this.choseMachineSeries();
      await this.choseMachineType();
      await this.addGPU();
      await this.addSDD();
      await this.choseDatacenterLocation();
      await this.choseUsageTime();
      await this.clickAddToEstimateBtn();
  }
}

module.exports = new CalculatorPageFn();

