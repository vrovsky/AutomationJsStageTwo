const homepage = require('../page/homepage');

describe('This is the describe block', () => {
  beforeEach(() => {
    //Enter acttions performed before test
  });
  afterEach(() => {
    //Enter actions to be performed after test
  });
  it('POM Test', () => {
    var baseurl = 'http://www.pastebin.com';
    homepage.goToUrl(baseurl);
    homepage.enter_postform('Hello from WebDriver');
    homepage.find_expirationForm();
    homepage.chose_expiration();
    homepage.enter_postformName('helloweb');
    homepage.waitAlittle();
  });
});
