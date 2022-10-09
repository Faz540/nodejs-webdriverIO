class CartSummaryPage {
   // Page Elements:
   get h1Title() { return $("#cart_title"); }
   get rowsItems() { return $$(".cart_item"); }
   get dataAvailabilities() { return $$(".cart_avail .label"); }
   get buttonProceed() { return $(".cart_navigation [title='Proceed to checkout']"); }

   // Page Methods:
}

module.exports = new CartSummaryPage;