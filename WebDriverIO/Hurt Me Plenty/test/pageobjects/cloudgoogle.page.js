import Page from './page';
var HelpIt = require('../../functions/helpit');

class CloudgooglePage extends Page {
  get searchBox(){return $('//div[@class="devsite-searchbox"]');}
  get inputSearch(){return $('//input[@name="q"]');}
  get searchResult(){return $('//a[@class="gs-title"][1]');}
  get googleCalcTitle(){return 'Google Cloud Platform Pricing Calculator';}

  
  async openPricingCalc(){
    this.open();
    await HelpIt.click(this.searchBox);
    await HelpIt.writeAndSumbit(this.inputSearch, this.googleCalcTitle);
    await HelpIt.click(this.searchResult);
  }
  async checkTitle(){
    await HelpIt.checkTitle(this.googleCalcTitle);
  }

  open() {
    super.open('https://cloud.google.com');
  }
}

export default new CloudgooglePage();
