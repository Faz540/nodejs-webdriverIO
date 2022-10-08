class NavMenu {
   // Page Elements:
   get linksTopMenu() { return $$(".sf-menu > li"); }
   get containerSubMenu() { return $(".sfHover .submenu-container"); }
   get linksSubMenu() { return this.containerSubMenu.$$("a"); }

   // Page Methods:
   async clickTopMenuLink(menuText) {
      const menuLinks = await this.linksTopMenu;
      for (const link of menuLinks) {
         if (await link.getText() == menuText) {
            await link.click();
            break;
         }
      }
   }

   async clickSubMenuLink(menuText) {
      const menuLinks = await this.linksSubMenu;
      for (const link of menuLinks) {
         if (await link.getAttribute("title") == menuText) {
            await link.click();
            break;
         }
      }
   }

   async hoverTopMenuLink(menuText) {
      const menuLinks = await this.linksTopMenu;
      for (const link of menuLinks) {
         if (await link.getText() == menuText) {
            await link.moveTo();
            await link.waitForDisplayed();
            break;
         }
      }

   }
}

module.exports = new NavMenu;