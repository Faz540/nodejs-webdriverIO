const pdp = require("../pages/pdp.page");
const cartSummaryPage = require("../pages/cart_summary.page");

describe("Cart Summary", () => {
   before(async () => {
      await browser.url("/index.php?id_product=1&controller=product");
      await pdp.addToCart();
      await browser.url("/index.php?controller=order");
   });
   it("displays the expected product in the basket @critical", async () => {
      await expect(cartSummaryPage.rowsItems).toBeDisplayed();
      await expect(cartSummaryPage.rowsItems).toBeElementsArrayOfSize(1);
      await expect(cartSummaryPage.rowsItems[0].getTextContaining("Faded Short Sleeve T-shirts"));
   });
   it("displays the expected availability status for the added product", async () => {
      await expect(cartSummaryPage.dataAvailabilities).toBeDisplayed();
      await expect(cartSummaryPage.dataAvailabilities).toHaveText("In stock");
   });
   it("displays the 'Procceed To Checkout' button @critical", async () => {
      await expect(cartSummaryPage.buttonProceed).toBeDisplayed();
   });
});