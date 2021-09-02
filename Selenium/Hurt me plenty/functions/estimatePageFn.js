var Page = require('../pageobject/page');
var HelpIt = require('../functions/helpit');
var EstimatePage = require('../pageobject/estimate.page');

class EstimatePageFn extends Page{
    async checkVMClass() {
    await HelpIt.checkElementForIncluding(
      EstimatePage.vmClassSelected,
      'VM class: regular'
    );
  }
  async checkInstanceType() {
    await HelpIt.checkElementForIncluding(
      EstimatePage.instanceTypeSelected,
      'Instance type: n1-standard-8'
    );
  }
  async checkLocalSDD() {
    await HelpIt.checkElementForIncluding(
      EstimatePage.localSDDSelected,
      'Local SSD: 2x375 GiB'
    );
  }
  async checkRegion() {
    await HelpIt.checkElementForIncluding(
      EstimatePage.regionSelected,
      'Region: Frankfurt'
    );
  }
  async checkCommitmentTerm() {
    await HelpIt.checkElementForIncluding(
      EstimatePage.commitmentTermSelected,
      'Commitment term: 1 Year'
    );
  }
  async checkEstimatedCost() {
    await HelpIt.checkElementForIncluding(
      EstimatePage.estimatedCost,
      'Total Estimated Cost: USD 1,083.33 per 1 month'
    );
  }
  async checkMachineParameters(){
      await this.checkVMClass();
      await this.checkInstanceType();
      await this.checkLocalSDD();
      await this.checkRegion();
      await this.checkCommitmentTerm();
  }
}
module.exports = new EstimatePageFn();