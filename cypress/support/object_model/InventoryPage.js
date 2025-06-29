class InventoryPage {
  static openMenu() {
    cy.get('#react-burger-menu-btn').click();
  }

  static logout() {
    cy.get('#logout_sidebar_link').click();
  }

  static addItemToCart() {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  static goToCart() {
    cy.get('.shopping_cart_link').click();
  }

  static shouldBeOnInventoryPage() {
    cy.url().should('include', '/inventory.html');

    // Pastikan daftar produk muncul
    cy.get('.inventory_list', { timeout: 10000 }).should('be.visible');

    // Pastikan ada minimal satu produk
    cy.get('.inventory_item', { timeout: 10000 }).should('have.length.greaterThan', 0);
  }

  static selectSort(optionText) {
    // Tambahan wait kecil untuk stabilisasi DOM
    cy.get('.product_sort_container').should('be.visible').select(optionText);
  }

  static verifySortedByNameAsc() {
    cy.get('.inventory_item_name').then($items => {
      const names = [...$items].map(el => el.innerText);
      const sorted = [...names].sort();
      expect(names).to.deep.equal(sorted);
    });
  }

  static verifySortedByNameDesc() {
    cy.get('.inventory_item_name').then($items => {
      const names = [...$items].map(el => el.innerText);
      const sorted = [...names].sort().reverse();
      expect(names).to.deep.equal(sorted);
    });
  }

  static verifySortedByPriceAsc() {
    cy.get('.inventory_item_price').then($items => {
      const prices = [...$items].map(el => parseFloat(el.innerText.replace('$', '')));
      const sorted = [...prices].sort((a, b) => a - b);
      expect(prices).to.deep.equal(sorted);
    });
  }

  static verifySortedByPriceDesc() {
    cy.get('.inventory_item_price').then($items => {
      const prices = [...$items].map(el => parseFloat(el.innerText.replace('$', '')));
      const sorted = [...prices].sort((a, b) => b - a);
      expect(prices).to.deep.equal(sorted);
    });
  }
}

export default InventoryPage;
