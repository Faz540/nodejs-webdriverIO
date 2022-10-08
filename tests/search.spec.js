const headerMenu = require("../pages/header.page");
const searchResultsPage = require("../pages/search_results.page");

describe("Search", () => {
   it("performs a valid search returns search results", async () => {
      await headerMenu.search("yellow");
      const productCards = await searchResultsPage.listProducts;
      await expect(productCards.length).toBeGreaterThanOrEqual(1);
      await expect(productCards).toBeDisplayed();
   });
   it("performs an invalid search returns no search results", async () => {
      await headerMenu.search("nope");
      const productCards = await searchResultsPage.listProducts;
      await expect(productCards.length).toEqual(0);
      await expect(productCards).not.toBeDisplayed();
      await expect(await searchResultsPage.textResultInfo).toBeDisplayed();
      await expect(await searchResultsPage.textResultInfo).toHaveTextContaining("No results were found for your search \"nope\"");
   });
});