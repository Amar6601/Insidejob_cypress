import LoginPage from "../support/object_model/LoginPage";
import InventoryPage from "../support/object_model/InventoryPage";

describe("Uji Filter Produk di Swag Labs", () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login("standard_user", "secret_sauce");
    InventoryPage.shouldBeOnInventoryPage();
  });

  it("Harus dapat mengurutkan produk dari A-Z", () => {
    InventoryPage.selectSort("Name (A to Z)");
    InventoryPage.verifySortedByNameAsc();
  });

  it("Harus dapat mengurutkan produk dari Z-A", () => {
    InventoryPage.selectSort("Name (Z to A)");
    InventoryPage.verifySortedByNameDesc();
  });

  it("Harus dapat mengurutkan produk berdasarkan harga dari rendah ke tinggi", () => {
    InventoryPage.selectSort("Price (low to high)");
    InventoryPage.verifySortedByPriceAsc();
  });

    it("Harus dapat mengurutkan produk berdasarkan harga dari tinggi ke rendah", () => {
        InventoryPage.selectSort("Price (high to low)");
        InventoryPage.verifySortedByPriceDesc();
    });
    it("Harus dapat mengurutkan produk berdasarkan nama dari A-Z dan kembali ke awal", () => {
        InventoryPage.selectSort("Name (A to Z)");
        InventoryPage.verifySortedByNameAsc();
        InventoryPage.selectSort("Name (Z to A)");
        InventoryPage.verifySortedByNameDesc();
        InventoryPage.selectSort("Name (A to Z)"); // Kembali ke awal
    }
    );
    it("Harus dapat mengurutkan produk berdasarkan harga dari rendah ke tinggi dan kembali ke awal", () => {
        InventoryPage.selectSort("Price (low to high)");
        InventoryPage.verifySortedByPriceAsc();
        InventoryPage.selectSort("Price (high to low)");
        InventoryPage.verifySortedByPriceDesc();
        InventoryPage.selectSort("Name (A to Z)"); // Kembali ke awal
    });
    it("Harus dapat mengurutkan produk berdasarkan harga dari tinggi ke rendah dan kembali ke awal", () => {
        InventoryPage.selectSort("Price (high to low)");
        InventoryPage.verifySortedByPriceDesc();
        InventoryPage.selectSort("Price (low to high)");
        InventoryPage.verifySortedByPriceAsc();
        InventoryPage.selectSort("Name (A to Z)"); // Kembali ke awal
    }
    );
});
