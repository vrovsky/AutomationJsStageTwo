import CalculatorPage from '../test/pageobjects/calculator.page';
import Page from '../test/pageobjects/page';
import HelpIt from './helpit';


class CalculatorPageFn extends Page{
    async switchToCalculatorFrame(){
        await browser.switchToFrame(0);
        await browser.switchToFrame(0);
    }
    async addNumberOfInstances() {
    await HelpIt.write(CalculatorPage.numberOfInstances, '4');
  }
  async choseMachineSeries() {
    await HelpIt.choseDroplistElement(CalculatorPage.machineSeriesList, CalculatorPage.n1MachineSeries);
  }
  async choseMachineType() {
    await HelpIt.choseDroplistElement(CalculatorPage.machineTypeList, CalculatorPage.n1s8MachineType);
  }
  async addGPU() {
    await HelpIt.click(CalculatorPage.addGPUsButton);
    await HelpIt.choseDroplistElement(CalculatorPage.numberOfGPUsList, CalculatorPage.neededNumberOfGPUs);
    await HelpIt.choseDroplistElement(CalculatorPage.typeOfGPUsList, CalculatorPage.neededTypeOfGPU);
  }
  async addSDD() {
    await HelpIt.choseDroplistElement(CalculatorPage.listOfSDDs, CalculatorPage.neededTypeOfSDD);
  }
  async choseDatacenterLocation() {
    await HelpIt.choseDroplistElement(CalculatorPage.datacenterLocationList, CalculatorPage.neededDatacenterLocation);
  }
  async choseUsageTime() {
    await HelpIt.choseDroplistElement(CalculatorPage.commitedUsageList, CalculatorPage.commitedUsageTime);
  }
  async clickAddToEstimateBtn() {
      await HelpIt.click(CalculatorPage.addToEstimateBtn);
  }
  async checkAddingResults() {
    await HelpIt.checkElementForHaving(CalculatorPage.addToEstimateBtn, 'ADD TO ESTIMATE');
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