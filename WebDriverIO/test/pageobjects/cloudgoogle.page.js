import Page from './page';

class CloudgooglePage extends Page {
  get searchBox() {
    return $('.devsite-searchbox');
  }
  get inputSearchField() {
    return $(
      '/html/body/section/devsite-header/div/div[1]/div/div/div[2]/devsite-search/form/div[1]/div/input'
    );
  }
  get searchingResult() {
    return $('.gs-title');
  }
  get numberOfInstancesField() {
    return $('//*[@id="input_67"]');
  }
  get firstChildFrame() {
    return $('#cloud-site > devsite-iframe > iframe');
  }
  get secondChildFrame() {
    return $("//iframe[@name='goog_2136849245']");
  }
  get calculatorFrame() {
    return $('#myFrame');
  }
  open() {
    super.open('https://cloud.google.com');
  }
}

export default new CloudgooglePage();
