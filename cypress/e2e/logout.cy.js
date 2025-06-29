import LoginPage from "../support/object_model/LoginPage";
import InventoryPage from "../support/object_model/InventoryPage";

describe("Logout - SauceDemo", () => {
  it("Berhasil logout setelah login", () => {
    // Step 1: Login
    LoginPage.visit();
    LoginPage.login("standard_user", "secret_sauce");
    LoginPage.shouldRedirectToInventory();

    // Step 2: Logout
    InventoryPage.openMenu();
    InventoryPage.logout();

    // Step 3: Validasi kembali ke halaman login
    cy.url().should("include", "/");
    LoginPage.elements.loginButton().should("be.visible");
  });

  
  // OPTIONAL - tambahkan test ini jika memang ingin melarang akses setelah logout
  // it("Tidak dapat mengakses halaman inventory setelah logout", () => {
  //   cy.visit("/inventory.html");
  //   cy.url().should("include", "/");
  //   LoginPage.elements.loginButton().should("be.visible");
  // });
});
