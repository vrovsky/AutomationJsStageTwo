import Page from '../test/pageobjects/page';

class HelpIt extends Page {
    async click(element){
        await element.click();
    }
    async write(element, text){
        await element.addValue(text);
    }
    async choseFromDroplist(droplist, element){
        await droplist.click();
        await element.click();
    }
    async checkTitle(text){
        await expect(browser).toHaveTitleContaining(text);
    }
    async checkElementForHaving(element, text){
        await expect(element).toHaveTextContaining(text);
    }
}
module.exports = new HelpIt();