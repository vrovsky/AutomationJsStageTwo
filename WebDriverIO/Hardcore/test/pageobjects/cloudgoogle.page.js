import Page from './page';
var HelpIt = require('../../functions/helpit');

class CloudgooglePage extends Page {
  get searchBox(){return $('//div[@class="devsite-searchbox"]');}
  get inputSearch(){return $('//input[@name="q"]');}
  get searchResult(){return $('//a[@class="gs-title"][1]');}
  get googleCalcTitle(){return 'Google Cloud Platform Pricing Calculator';}

  get emailEstimateBtn() {return $('#email_quote');}
  get emailField() {return $('//input[@type="email"]');}
  get sendEmailBtn() {return $('//button[@aria-label="Send Email"]');}



  async openPricingCalc(){
    this.open();
    await HelpIt.click(this.searchBox);
    await HelpIt.writeAndSumbit(this.inputSearch, this.googleCalcTitle);
    await this.searchResult.waitForExist(5000);
    await HelpIt.click(this.searchResult);
  }
  async checkTitle(){
    await HelpIt.checkTitle(this.googleCalcTitle);
  }
  async clickToEmailEstimate(){
    await this.emailEstimateBtn.click();
  }
  
  
  open() {
    super.open('https://cloud.google.com');
  }
}

export default new CloudgooglePage();
