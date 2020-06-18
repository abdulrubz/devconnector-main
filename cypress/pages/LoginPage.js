function visit() {
  cy.visit('http://localhost:3000/login');
}

function enterCredentials() {
  cy.get('input[name="email"]').type('abdul@rub.com');
  cy.get('input[name="password"]').type('test123');
}

function submitLogin() {
  cy.get('input[type="submit"]').click();
  cy.url().should('eq', 'http://localhost:3000/dashboard');
}

export { visit, enterCredentials, submitLogin };
