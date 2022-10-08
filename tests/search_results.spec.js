const chai = require("chai");
chai.use(require("chai-sorted"));

const searchResultsPage = require("../pages/search_results.page");

describe("Search Results", () => {
   beforeEach(async () => {
      await browser.url("/index.php?controller=search&search_query=black");
   })
   it("clicks 'Quick View' and displays a PDP iFrame", async () => {
      await searchResultsPage.hoverProductById(3);
      await searchResultsPage.quickViewById(3);
      await expect(await searchResultsPage.iframePdp).toBeDisplayed();
   });
   it("displays at least one product under 'Top Sellers'", async () => {
      await expect(await searchResultsPage.liTopSellers).toBeDisplayed();
   });
   it("orders search results by 'Product Name: A to Z'", async () => {
      await searchResultsPage.sortBy("Product Name: A to Z");
      const titles = await searchResultsPage.getProductTitles();
      chai.expect(titles).to.be.ascending;
   });
   it("clicks 'Add To Cart' and adds product to cart", async () => {
      await searchResultsPage.hoverProductById(3);
      await searchResultsPage.addToCartById(3);
      await expect(searchResultsPage.modalCart).toBeDisplayed();
      await expect(searchResultsPage.modalCart).toHaveTextContaining("successfully added");
   });
   it("clicks a product card navigates the user to a PDP", async () => {
      await searchResultsPage.hoverProductById(3);
      await searchResultsPage.selectProductById(3);
      await expect(browser).toHaveUrlContaining("controller=product");
   });
});
