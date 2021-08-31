const { Builder, By, Key, until } = require('selenium-webdriver');
var Page = require('./page');
var webdriver = require('selenium-webdriver');
const { expect } = require('chai');
var HelpIt = require('../functions/helpit');

class EstimatePage extends Page {
  constructor() {
    super();
    this.emailEstimateBtn = '//button[@aria-label="Email Estimate"]';
    this.sendEmailBtn = '//button[@aria-label="Send Email"]';
    this.emailfield = '//input[@type="email"]';
  }

  async clickEmailEstimateBtn() {
    await HelpIt.clickElement(this.emailEstimateBtn);
  }
  async addGeneratedEmail(text) {
    await HelpIt.write(this.emailfield, text);
  }
  async sendEmail() {
    await HelpIt.clickElement(this.sendEmailBtn);
  }
}

module.exports = new EstimatePage();
