describe('Watches page', () => {
  it('should show the banner container', async () => {
    await browser.url('https://bsmu.by');
    const promoBanner = await $('/html/body/div[4]/div[2]/div[1]');
    await expect(promoBanner).toBeDisplayed();
  });
  it('should have text', async () => {
    const promoBanner = await $('/html/body/div[4]/div[2]/div[1]');
    await expect(promoBanner).toHaveTextContaining('К юбилею университета');
  });
  it('should contain link on button and verify its clicable', async () => {
    const promoBanner = await $('/html/body/div[4]/div[2]/div[1]/p/a');
    await expect(promoBanner).toHaveLinkContaining(
      'https://www.bsmu.by/page/6/7653/'
    );
    await expect(promoBanner).toBeClickable();
  });
  it('chould click on the link and verify the new element', async () => {
    const promoBanner = await $('/html/body/div[4]/div[2]/div[1]/p/a');
    await promoBanner.click();
    expect(browser).toHaveUrl('https://www.bsmu.by/page/6/7653/');
  });
});
