const headerMenu = require("../pages/header.page");
const cartSummaryPage = require("../pages/cart_summary.page")
const authPage = require("../pages/auth.page");

describe("Header", () => {
   it("clicks the Cart button navigates the user to the 'Cart Summary' page", async () => {
      await headerMenu.clickCart();
      await expect(await cartSummaryPage.h1Title).toBeDisplayed();
   });
   it("clicks 'Sign In' navigates the user to the 'Sign In' page", async () => {
      await headerMenu.clickSignIn();
      await expect(await authPage.formLogin).toBeDisplayed();
   });
});