/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      /** Logs in through the UI form */
      loginViaUI(username: string, password: string): Chainable<void>;
      /** Logs in via API call and sets auth token, bypassing the UI (faster for setup) */
      loginViaAPI(username: string, password: string): Chainable<void>;
      /** Shortcut for cy.get('[data-testid="..."]') */
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}

export {};
