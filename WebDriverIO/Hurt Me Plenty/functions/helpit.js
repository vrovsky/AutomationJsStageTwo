import Page from '../test/pageobjects/page';

class HelpIt extends Page {
    async click(element){
        await element.waitForExist(5000);
        await element.click();
    }
    async write(element, text){
        await element.waitForExist(5000);
        await element.addValue(text);
    }
    async writeAndSumbit(element, text){
        await element.waitForExist(5000);
        await element.addValue(text);
        await element.keys('\uE007');
    }
    async choseDroplistElement(droplist, element){
        await droplist.waitForExist(5000);
        await droplist.click();
        await element.waitForExist(5000);
        await element.click();
    }
    async checkTitle(text){
        await expect(browser).toHaveTitleContaining(text);
    }
    async checkElementForHaving(element, text){
        await element.waitForExist(5000);
        await expect(element).toHaveTextContaining(text);
    }
}
module.exports = new HelpIt();