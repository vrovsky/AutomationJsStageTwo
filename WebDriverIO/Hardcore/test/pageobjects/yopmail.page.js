import Page from './page';
var HelpIt = require('../../functions/helpit');

class YopmailPage extends Page {
  get youpmailURL() {return 'https://yopmail.com/ru/';}
  get generateMailBtn() {return $('//div[@class="txtlien"][1]//b');}
  get generatedMail() {return $('//*[@id="egen"]');}
  get checkMailBtn() {return $('//button[@class="md but text f24 egenbut"][2]');}
  get monthlyCostsField() {return $('//div[@id="mail"]//div//div//table//tbody//tr[2]//table//tbody//tr[2]//td[2]//h3');}
  
  async generateMail(){
    await browser.newWindow(this.youpmailURL);
    await this.generateMailBtn.click();
  }
  async switchToYopmail(){
    await browser.switchWindow('yopmail.com');
  }
  async openMailedPrice(){
    await HelpIt.click(this.checkMailBtn);
    await browser.refresh();
    await browser.switchToFrame(2);
  }
  async checkMailedPrice(){
    await HelpIt.checkElementForHaving(this.monthlyCostsField, 'USD 1,083.33');
  }
  
  open() {
    super.open('https://yopmail.com/ru/');
  }
}

export default new YopmailPage();
