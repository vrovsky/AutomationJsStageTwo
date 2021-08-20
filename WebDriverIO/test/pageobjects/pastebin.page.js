import Page from './page';
class PastebinPage extends Page {
  pasteCode = `git config --global user.name  "New Sheriff in Town"
git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
git push origin master --force`;
  get pasteForm() {
    return $('textarea#postform-text');
  }
  get codeHighlighter() {
    return $('span#select2-postform-format-container');
  }
  get bashHighlighter() {
    return $('/html/body/span[2]/span/span[1]/input');
  }
  get expirationList() {
    return $('span#select2-postform-expiration-container');
  }
  get expirationInTenMinutes() {
    return $('//*[@id="select2-postform-expiration-results"]/li[3]');
  }
  get postformName() {
    return $('#postform-name');
  }
  get createPasteBtn() {
    return $(
      '#w0 > div.post-form__bottom > div.post-form__left > div.form-group.form-btn-container > button'
    );
  }
  open() {
    super.open('http://pastebin.com');
  }
}
export default new PastebinPage();
