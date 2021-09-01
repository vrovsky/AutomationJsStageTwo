import Page from './page';
var HelpIt = require('../../functions/helpit');

class PastebinPage extends Page {
  get pasteForm() {return $('//*[@id="postform-text"]');}
  get codeHighlighter() {return $('//span[@id="select2-postform-format-container"]');}
  get highlighterInput() {return $('//input[@class="select2-search__field"]');}
  get expirationList() {return $('//*[@id="select2-postform-expiration-container"]');}
  get neededExpiration() {return $('//*[@id="select2-postform-expiration-results"]/li[3]');}
  get pasteNameElement() {return $('//input[@id="postform-name"]');}
  get createPasteBtn() { return $('//button[@type="submit"]');}
  get bashHighlighterElement() {return $('//a[@href="/archive/bash"]'); }
  get pasteText(){return $('//textarea[@class="textarea"]');}


  async createPaste(){
    this.open();
    await HelpIt.write(this.pasteForm, this.postformText);
    await HelpIt.click(this.codeHighlighter);
    await HelpIt.write(this.highlighterInput,this.bashHighlighter);
    await HelpIt.choseFromDroplist(this.expirationList, this.neededExpiration);
    await HelpIt.write(this.pasteNameElement, this.title);
    await HelpIt.click(this.createPasteBtn);
  }

  async checkPaste(){
    await HelpIt.checkTitle(this.title);
    await HelpIt.checkElementForHaving(this.bashHighlighterElement, this.bashHighlighter);
    await HelpIt.checkElementForHaving(this.pasteText, this.postformText);
  }

  get title() { return 'how to gain dominance among developers';}  
  get postformText() {return `git config --global user.name  "New Sheriff in Town"
  git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
  git push origin master --force`;}
  get bashHighlighter() { return "Bash";}
  
  open() {
    super.open('http://pastebin.com');
  }
}
export default new PastebinPage();
