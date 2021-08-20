import { expect as chaiExpect, assert } from 'chai';
import 'chai/register-should';

describe('Watches page', () => {
  it('should show the banner container', async () => {
    await browser.url('https://bsmu.by');
    const promoBanner = await $('/html/body/div[4]/div[2]/div[1]');
    await expect(promoBanner).toBeDisplayed();
  });
  it('should have text', async () => {
    const promoBanner = await $('/html/body/div[4]/div[2]/div[1]');
    const infoTitleText = await promoBanner.getText();
    await expect(promoBanner).toHaveTextContaining('К юбилею университета');
    promoBanner.should.not.be.empty;
    assert.isNotEmpty(infoTitleText);
    await chaiExpect(infoTitleText).to.not.be.empty;
  });
  it('should contain link on button and verify its clicable', async () => {
    const promoBanner = await $('/html/body/div[4]/div[2]/div[1]/p/a');
    const tag = await promoBanner.getTagName();
    await expect(promoBanner).toHaveLinkContaining(
      'https://www.bsmu.by/page/6/7653/'
    );
    await expect(promoBanner).toBeClickable();
    tag.should.be.equal('a');
  });
  it('chould click on the link and verify the new element', async () => {
    const promoBanner = await $('/html/body/div[4]/div[2]/div[1]/p/a');
    await promoBanner.click();

    const url = await browser.getUrl();
    await chaiExpect(url).to.include('/page/');
    await expect(browser).toHaveUrl('https://www.bsmu.by/page/6/7653/');
  });
});
