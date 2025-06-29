class LoginPage {
  static visit() {
    cy.visit('https://www.saucedemo.com/');
  }

  static login(username, password) {
    if (username !== "") {
      cy.get('[data-test="username"]').type(username);
    }

    if (password !== "") {
      cy.get('[data-test="password"]').type(password);
    }

    cy.get('[data-test="login-button"]').click();
  }

  static shouldRedirectToInventory() {
    cy.url().should('include', '/inventory.html');
  }

  static shouldShowError(message) {
    cy.get('[data-test="error"]').should('contain', message);
  }

  static shouldBeOnLoginPage() {
    cy.url().should('include', '/');
  }

  static elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('[data-test="login-button"]')
  };
}

export default LoginPage;
