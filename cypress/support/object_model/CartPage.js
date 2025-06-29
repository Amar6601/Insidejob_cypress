class CartPage {
  static shouldBeOnCartPage() {
    cy.url().should('include', '/cart.html');
    cy.get('.cart_item', { timeout: 5000 }).should('exist');
  }

  static clickCheckout() {
    cy.get('[data-test="checkout"]').click();
  }
}

export default CartPage;
