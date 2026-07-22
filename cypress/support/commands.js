/**
 * Custom reusable Cypress commands.
 */

Cypress.Commands.add('loginViaUI', (username, password) => {
  cy.visit('/login');
  cy.get('[data-testid="username-input"]').type(username);
  cy.get('[data-testid="password-input"]').type(password);
  cy.get('[data-testid="login-button"]').click();
});

Cypress.Commands.add('loginViaAPI', (username, password) => {
  cy.request('POST', '/api/login', { username, password }).then((response) => {
    window.localStorage.setItem('authToken', response.body.token);
  });
});

Cypress.Commands.add('getByTestId', (testId) => {
  return cy.get(`[data-testid="${testId}"]`);
});
