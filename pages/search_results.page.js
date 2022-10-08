class SearchResultsPage {
   // Page Elements:
   get listProducts() { return $$(".product_list .ajax_block_product"); }
   get textResultInfo() { return $(".alert-warning"); }
   get linksProductImage() { return $$(".product_img_link"); }
   get textPrices() { return $$(".ajax_block_product .right-block .price"); }
   get textProductTitles() { return $$(".product_list .product-name"); }
   get linksQuickView() { return $$(".quick-view"); }
   get linksAddToCart() { return $$(".ajax_add_to_cart_button"); }
   get liTopSellers() { return $$("#best-sellers_block_right .products-block li"); }
   get iframePdp() { return $(".fancybox-iframe"); }
   get modalCart() { return $("#layer_cart"); }
   get dropSort() { return $("#selectProductSort"); }

   // Page Methods:
   async selectProductById(productId) {
      for (const product of await this.linksProductImage) {
         const hrefValue = await product.getAttribute("href");
         if (hrefValue.includes(`id_product=${productId}`)) {
            // { y:30 } is required as the 'Quick View' element will receive the click
            // This is because 'Quick View' is right in the centre of our desired element.
            await product.click({ y: 30 });
            break;
         }
      }
   };

   async hoverProductById(productId) {
      for (const product of await this.linksProductImage) {
         const hrefValue = await product.getAttribute("href");
         if (hrefValue.includes(`id_product=${productId}`)) {
            await product.moveTo();
            break;
         }
      }
   };

   async quickViewById(productId) {
      for (const product of await this.linksQuickView) {
         const hrefValue = await product.getAttribute("href");
         if (hrefValue.includes(`id_product=${productId}`)) {
            await product.click();
            break;
         }
      }
   };

   async addToCartById(productId) {
      for (const button of await this.linksAddToCart) {
         const hrefValue = await button.getAttribute("href");
         if (hrefValue.includes(`id_product=${productId}`)) {
            await button.click();
            break;
         }
      }
   };

   async getPrices(currencySymbol = "$") {
      let arrayOfPrices = [];
      for (const priceValue of await this.textPrices) {
         const price = await priceValue.getText();
         arrayOfPrices.push(parseFloat(price.replace(currencySymbol, "")));
      }
      return arrayOfPrices;
   };

   async getProductTitles() {
      let arrayOfTitles = [];
      for (const title of await this.textProductTitles) {
         arrayOfTitles.push(await title.getText());
      }
      return arrayOfTitles;
   };

   async sortBy(option) {
      await this.dropSort.selectByVisibleText(option);
   };

}

module.exports = new SearchResultsPage;