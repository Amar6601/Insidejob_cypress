class CheckoutInfoPage {
  static shouldBeOnCheckoutInfoPage() {
    cy.url().should('include', '/checkout-step-one.html');
    cy.get('[data-test="firstName"]').should('be.visible');
  }

  static fillForm(firstName, lastName, postalCode) {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
  }

  static clickContinue() {
    cy.get('[data-test="continue"]').click();
  }
}

export default CheckoutInfoPage;
