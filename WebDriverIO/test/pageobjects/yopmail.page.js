import Page from './page';

class YopmailPage extends Page {
  get youpmailURL() {
    return 'https://yopmail.com/ru/';
  }
  get generateMailBtn() {
    return $('#listeliens > a:nth-child(1) > div.txtlien > b');
  }
  get newMailGenerated() {
    return $('//*[@id="egen"]');
  }
  get checkMailBtn() {
    return $(
      'body > div > div.ymaincenter > main > div > div.pagecdr.brounded > div > div > div.nw > button:nth-child(3)'
    );
  }
  get monthlyCostsField() {
    return $('//tr[@valign="top"]');
  }
  open() {
    super.open('https://yopmail.com/ru/');
  }
}

export default new YopmailPage();
