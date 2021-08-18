describe('Ebay Product search', () => {
  it('should open the main url and verify the title', async () => {
    await browser.url('http://ebay.com');
    await expect(browser).toHaveTitle(
      'Электроника, автомобили, мода, коллекционирование, купоны и другие товары | eBay'
    );
  });

  it('should search for product and verify the search text value', async () => {
    const searchInput = await $('#gh-ac');
    const searchButton = await $('#gh-btn');
    await searchInput.addValue('laptop');
    await searchButton.click();
    await expect(searchInput).toHaveValue('laptop');
  });

  it('should redirect to a new page and verify the title', async () => {
    await expect(browser).toHaveTitle('laptop | eBay');
  });

  it('should update the search category', async () => {
    const category = await $('#gh-cat option:nth-child(1)');

    await expect(category).toHaveText('Ноутбуки и нетбуки PC');
  });
});
