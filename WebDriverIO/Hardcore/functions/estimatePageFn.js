import EstimatePage from '../test/pageobjects/estimate.page';
import Page from '../test/pageobjects/page';
import HelpIt from './helpit';

class EstimatePageFn extends Page{
    async checkVMClass() {
    await HelpIt.checkElementForHaving(EstimatePage.vmClassSelected, 'regular');
  }
  async checkInstanceType() {
    await HelpIt.checkElementForHaving(EstimatePage.instanceTypeSelected, 'n1-standard-8');
  }
  async checkLocalSDD() {
    await HelpIt.checkElementForHaving(EstimatePage.localSDDSelected,'Local SSD: 2x375 GiB');
  }
  async checkRegion() {
    await HelpIt.checkElementForHaving(EstimatePage.regionSelected,'Region: Frankfurt');
  }
  async checkCommitmentTerm() {
    await HelpIt.checkElementForHaving(EstimatePage.commitmentTermSelected,'Commitment term: 1 Year');
  }
  async checkEstimatedCost() {
    await HelpIt.checkElementForHaving(EstimatePage.estimatedCost,'Total Estimated Cost: USD 1,083.33 per 1 month');
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