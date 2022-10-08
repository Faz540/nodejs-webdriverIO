class HeaderMenu {
   // Page Elements:
   get header() { return $("#header"); }
   get linkSignIn() { return $("#header .login"); }
   get linkCart() { return $("a[title='View my shopping cart']"); }
   get inputSearch() { return $("#search_query_top"); }
   get submitSearch() { return $("[name='submit_search']"); }

   // Page Methods:
   async clickCart() {
      await this.linkCart.click();
   }

   async clickSignIn() {
      await this.linkSignIn.click();
   }

   async search(searchTerm) {
      await this.inputSearch.setValue(searchTerm);
      await this.submitSearch.click();
   };
}

module.exports = new HeaderMenu;