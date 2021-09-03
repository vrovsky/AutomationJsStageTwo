import Page from '../test/pageobjects/page';

class HelpIt extends Page {
    async click(element){
        await browser.waitUntil(()=>{ return element.isDisplayed();},5000);
        await element.click();
    }
    async write(element, text){
        await browser.waitUntil(()=>{ return element.isDisplayed();},5000);
        await element.addValue(text);
    }
    async writeAndSumbit(element, text){
        await browser.waitUntil(()=>{ return element.isDisplayed();},5000);
        await element.addValue(text);
        await element.keys('\uE007');
    } 
    async choseDroplistElement(droplist, element){
        await browser.waitUntil(()=>{ return droplist.isDisplayed();},5000);
        await droplist.click();
        await browser.waitUntil(()=>{ return element.isDisplayed();},5000);
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