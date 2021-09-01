import Page from './page';
var HelpIt = require('../../functions/helpit');

class PastebinPage extends Page {
  get pasteForm() {return $('//*[@id="postform-text"]');}
  get expirationList() {return $('//*[@id="select2-postform-expiration-container"]');}
  get neededExpiration() {return $('//*[@id="select2-postform-expiration-results"]/li[3]');}
  get pasteNameElement() {return $('//input[@id="postform-name"]');}
  get createPasteBtn() { return $('//button[@type="submit"]');}

async createPaste(){
  await this.open();
  await HelpIt.write(this.pasteForm, this.pasteText);
  await HelpIt.choseFromDroplist(this.expirationList, this.neededExpiration);
  await HelpIt.write(this.pasteNameElement, this.pasteName);
  await HelpIt.click(this.createPasteBtn);
}
async checkPasteTitle(){
  await HelpIt.checkTitle(this.pasteName);
}

  open() {
    super.open('http://pastebin.com');
  }
  get pasteText(){return 'Hello from WebDriver';}
  get pasteName(){return 'helloweb';}
}
export default new PastebinPage();
