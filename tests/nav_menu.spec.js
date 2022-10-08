const navMenu = require("../pages/nav_menu.page");

describe("Nav Menu", () => {
   it("clicks a 'top-menu' link navigates the user to the desired category PLP", async () => {
      await navMenu.clickTopMenuLink("DRESSES");
      await expect(browser).toHaveUrlContaining("/index.php?id_category=8&controller=category");
   });
   it("clicks a 'sub-menu' link navigates the user to the desired category PLP", async () => {
      await navMenu.hoverTopMenuLink("WOMEN");
      await navMenu.clickSubMenuLink("Blouses");
      await expect(browser).toHaveUrlContaining("/index.php?id_category=7&controller=category");
   });
});
