import { expect as chaiExpect } from 'chai';
import WatchesPage from '../pageobjects/watches.page';

describe('Watches page', () => {
  it('should show the banner container', async () => {
    WatchesPage.open();
    let promoBanner = await $('.Lech_Cov19_G.Title');
    await expect(promoBanner).toBeDisplayed();
  });
  it('should have text', async () => {
    await expect(WatchesPage.promoBanner).toHaveTextContaining(
      'К юбилею университета'
    );
  });
  it('should contain link on button and verify its clicable', async () => {
    await expect(WatchesPage.promoBanner).toHaveLinkContaining(
      'https://www.bsmu.by/page/6/7653/'
    );
    await expect(promoBanner).toBeClickable();
  });
  it('chould click on the link and verify the new element', async () => {
    await WatchesPage.promoBanner.click();

    const url = await browser.getUrl();
    await chaiExpect(url).to.include('/page/');
    await expect(browser).toHaveUrl('https://www.bsmu.by/page/6/7653/');
  });
});
