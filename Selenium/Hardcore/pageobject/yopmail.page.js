const { Builder, By, Key, until } = require('selenium-webdriver');
var Page = require('./page');

class YopmailPage extends Page {
  constructor() {
    super();
    this.generateMailBtn = '//div[@class="txtlien"][1]//b';
    this.checkMailBtn = '//button[@class="md but text f24 egenbut"][2]';
    this.refreshMailBtn = '//button[@id="refresh"]';
    this.generatedEmail = '//*[@id="egen"]';
    this.mailedPrice = '//div[@id="mail"]//div//div//table//tbody//tr[2]//table//tbody//tr[2]//td[2]//h3';
  }
  
  get price(){return 'USD 1,083.33';}
  get yopmailUrl() {return 'https://yopmail.com/ru/';}
}

module.exports = new YopmailPage();
