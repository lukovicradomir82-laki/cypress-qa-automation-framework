/// <reference types="cypress" />

/**
 * Custom reusable Cypress commands.
 * Register the corresponding type declarations in support/index.d.ts
 */

Cypress.Commands.add('loginViaUI', (username: string, password: string) => {
  cy.visit('/login');
  cy.get('[data-testid="username-input"]').type(username);
  cy.get('[data-testid="password-input"]').type(password);
  cy.get('[data-testid="login-button"]').click();
});

Cypress.Commands.add('loginViaAPI', (username: string, password: string) => {
  cy.request('POST', '/api/login', { username, password }).then((response) => {
    window.localStorage.setItem('authToken', response.body.token);
  });
});

Cypress.Commands.add('getByTestId', (testId: string) => {
  return cy.get(`[data-testid="${testId}"]`);
});
