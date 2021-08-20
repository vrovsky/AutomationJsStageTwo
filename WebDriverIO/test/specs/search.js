import SearchPage from '../pageobjects/search.page';
describe('Ebay Product search', () => {
  it('should open the main url and verify the title', async () => {
    SearchPage.open();
    await expect(browser).toHaveTitle(
      'Электроника, автомобили, мода, коллекционирование, купоны и другие товары | eBay'
    );
  });

  it('should search for product and verify the search text value', async () => {
    await SearchPage.searchInput.addValue('laptop');
    await SearchPage.searchButton.click();

    await expect(SearchPage.searchInput).toHaveValue('laptop');
  });

  it('should redirect to a new page and verify the title', async () => {
    await expect(browser).toHaveTitle('laptop | eBay');
  });

  it('should update the search category', async () => {
    await expect(SearchPage.category).toHaveText('Ноутбуки и нетбуки PC');
  });
});
