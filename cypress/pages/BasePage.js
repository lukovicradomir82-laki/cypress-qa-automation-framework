/**
 * BasePage holds reusable actions shared across all Page Objects.
 * Cypress commands are chainable, so methods here return `this` where useful,
 * but simplicity is preferred over deep chaining magic.
 */
class BasePage {
  visit(path = '/') {
    cy.visit(path);
  }

  getByTestId(testId) {
    return cy.get(`[data-testid="${testId}"]`);
  }

  clickByTestId(testId) {
    this.getByTestId(testId).should('be.visible').click();
  }

  typeByTestId(testId, value) {
    this.getByTestId(testId).should('be.visible').clear().type(value);
  }

  expectVisibleByTestId(testId) {
    this.getByTestId(testId).should('be.visible');
  }

  expectTextByTestId(testId, text) {
    this.getByTestId(testId).should('contain.text', text);
  }

  reload() {
    cy.reload();
  }

  title() {
    return cy.title();
  }
}

export default BasePage;
