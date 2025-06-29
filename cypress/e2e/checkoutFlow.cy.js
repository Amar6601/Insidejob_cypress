import LoginPage from "../support/object_model/LoginPage";
import InventoryPage from "../support/object_model/InventoryPage";
import CartPage from "../support/object_model/CartPage";

describe("Checkout Flow - Swag Labs", () => {
  it("Login dan checkout barang", () => {
    // Step 1: Login
    LoginPage.visit();
    LoginPage.login("standard_user", "secret_sauce");
    LoginPage.shouldRedirectToInventory();

    // Step 2: Tambah item ke keranjang
    InventoryPage.addItemToCart();  // ⬅️ Panggilan ini harus berhasil
    InventoryPage.goToCart();

    // Step 3: Validasi keranjang
    CartPage.shouldBeOnCartPage();
    CartPage.clickCheckout();

    // Step 4: Validasi ke halaman checkout step one
    cy.url().should("include", "/checkout-step-one.html");
  });
});
