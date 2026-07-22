/**
 * BasePage holds reusable actions shared across all Page Objects.
 * Cypress commands are chainable, so methods here return `this` where useful,
 * but simplicity is preferred over deep chaining magic.
 */
export class BasePage {
  visit(path: string = '/') {
    cy.visit(path);
  }

  getByTestId(testId: string) {
    return cy.get(`[data-testid="${testId}"]`);
  }

  clickByTestId(testId: string) {
    this.getByTestId(testId).should('be.visible').click();
  }

  typeByTestId(testId: string, value: string) {
    this.getByTestId(testId).should('be.visible').clear().type(value);
  }

  expectVisibleByTestId(testId: string) {
    this.getByTestId(testId).should('be.visible');
  }

  expectTextByTestId(testId: string, text: string | RegExp) {
    this.getByTestId(testId).should('contain.text', text);
  }

  reload() {
    cy.reload();
  }

  title() {
    return cy.title();
  }
}
