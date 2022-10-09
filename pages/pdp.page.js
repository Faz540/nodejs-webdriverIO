class PDP {
   // Page Elements:
   get buttonAddToCart() { return $("#add_to_cart [type='submit']"); }
   get inputQuantity() { return $("#quantity_wanted"); }
   get buttonDecreaseQuantity() { return $(".product_quantity_down"); }
   get buttonIncreaseQuantity() { return $(".product_quantity_up"); }
   get dropSize() { return $("#group_1"); }
   get buttonsVariants() { return $$("#color_to_pick_list a"); }
   // Page Methods:

   async addToCart() {
      await this.buttonAddToCart.click();
      await this.buttonAddToCart.waitForEnabled({ timeoutMsg: "Loading spinner inside 'Add' button did not disappear." });
   }

   async increaseQuantity() {
      await this.buttonIncreaseQuantity.click();
   }

   async selectSize(sizeOption) {
      await this.dropSize.selectByVisibleText(sizeOption);
   };
}

module.exports = new PDP;