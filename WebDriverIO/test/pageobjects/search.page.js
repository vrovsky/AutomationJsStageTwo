import Page from './page';
class SearchPage extends Page {
  get searchInput() {
    return $('#gh-ac');
  }
  get searchButton() {
    return $('#gh-btn');
  }
  get category() {
    return $('#gh-cat option:nth-child(1)');
  }
  open() {
    super.open('http://ebay.com');
  }
}

export default new SearchPage();
