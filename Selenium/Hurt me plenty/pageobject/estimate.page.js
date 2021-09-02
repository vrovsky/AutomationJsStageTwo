const { Builder, By, Key, until } = require('selenium-webdriver');
var Page = require('./page');
var webdriver = require('selenium-webdriver');
const { expect } = require('chai');
var HelpIt = require('../functions/helpit');

class EstimatePage extends Page {
  constructor() {
    super();
    this.vmClassSelected ='#compute > md-list > md-list-item:nth-child(8) > div';
    this.instanceTypeSelected ='#compute > md-list > md-list-item:nth-child(10) > div.md-list-item-text.ng-binding.cpc-cart-multiline.flex';
    this.localSDDSelected ='#compute > md-list > md-list-item:nth-child(14) > div.md-list-item-text.ng-binding.cpc-cart-multiline.flex';
    this.regionSelected ='#compute > md-list > md-list-item:nth-child(2) > div';
    this.commitmentTermSelected ='#compute > md-list > md-list-item:nth-child(6) > div';
    this.estimatedCost ='#resultBlock > md-card > md-card-content > div > div > div > h2 > b';
  }
  async checkVMClass() {
    await HelpIt.checkElementForIncluding(
      this.vmClassSelected,
      'VM class: regular'
    );
  }
  async checkInstanceType() {
    await HelpIt.checkElementForIncluding(
      this.instanceTypeSelected,
      'Instance type: n1-standard-8'
    );
  }
  async checkLocalSDD() {
    await HelpIt.checkElementForIncluding(
      this.localSDDSelected,
      'Local SSD: 2x375 GiB'
    );
  }
  async checkRegion() {
    await HelpIt.checkElementForIncluding(
      this.regionSelected,
      'Region: Frankfurt'
    );
  }
  async checkCommitmentTerm() {
    await HelpIt.checkElementForIncluding(
      this.commitmentTermSelected,
      'Commitment term: 1 Year'
    );
  }
  async checkEstimatedCost() {
    await HelpIt.checkElementForIncluding(
      this.estimatedCost,
      'Total Estimated Cost: USD 1,083.33 per 1 month'
    );
  }
}

module.exports = new EstimatePage();
