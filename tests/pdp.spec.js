const pdp = require("../pages/pdp.page");
const cartModal = require("../pages/cart_modal.page");

describe("PDP", () => {
   describe("Visual Checks", () => {
      before(async () => {
         await browser.url("/index.php?id_product=1&controller=product");
      });
      it("displays the 'Add To Cart' button", async () => {
         await expect(await pdp.buttonAddToCart).toBeDisplayed();
      });
      it("displays the 'Quantity' dropdown menu and '-/+' buttons", async () => {
         await expect(await pdp.inputQuantity).toBeDisplayed();
         await expect(await pdp.buttonDecreaseQuantity).toBeDisplayed();
         await expect(await pdp.buttonIncreaseQuantity).toBeDisplayed();
      });
      it("displays at least one product variant", async () => {
         await expect(await pdp.buttonsVariants).toBeDisplayed();
         await expect(await pdp.buttonsVariants).toBeElementsArrayOfSize({ gte: 1 });
      });

   });
   describe("Functional Checks", () => {
      beforeEach(async () => {
         await browser.url("/index.php?id_product=1&controller=product");
      });
      afterEach(async () => {
         await browser.deleteCookies();
      });
      it("clicking 'Add To Cart' successfully adds product to cart", async () => {
         await pdp.addToCart();
         await expect(await cartModal.modal).toBeDisplayed();
         await expect(await cartModal.textProductTitle).toHaveText("Faded Short Sleeve T-shirts");
      });
      it("setting the 'quantity' and adding to cart displays the correct 'quantity'", async () => {
         await pdp.increaseQuantity();
         await pdp.addToCart();
         await expect(await cartModal.textQuantity).toHaveText("2");
         await expect(await cartModal.textProductInfoQuantity).toHaveText("2");
      });
      it("setting the 'size' and adding to cart displays the correct 'size'", async () => {
         await pdp.selectSize("L");
         await pdp.addToCart();
         await expect(await cartModal.textProductAttributes).toHaveTextContaining("Orange, L")
      });
   });

});