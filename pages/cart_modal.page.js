class CartModal {
   // Page Elements:
   get modal() { return $("#layer_cart"); }
   get textProductTitle() { return $("#layer_cart_product_title"); }
   get textQuantity() { return this.modal.$(".ajax_cart_quantity"); }
   get textProductInfoQuantity() { return $("#layer_cart_product_quantity"); }
   get textProductAttributes() { return $("#layer_cart_product_attributes"); }

   // Page Methods:

}

module.exports = new CartModal;