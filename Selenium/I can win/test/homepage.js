const homepage = require('../pageobject/homepage');

describe('I can win task for selenium webdriverjs tutorial', function () {
  this.timeout(50000);
  beforeEach(() => {
    //Enter acttions performed before test
  });
  afterEach(() => {
    //Enter actions to be performed after test
  });
  it('Pastebind I can win test', function () {
    var baseurl = 'http://pastebin.com/';
    homepage.go_to_url(baseurl);
    homepage.enter_postform('Hello from WebDriver');
    // homepage.find_expirationForm();
    // homepage.chose_expiration();
    // homepage.enter_postformName('helloweb');
    // homepage.waitAlittle();
  });
});
