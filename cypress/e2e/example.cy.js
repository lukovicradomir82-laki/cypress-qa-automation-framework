describe('Example smoke checks', () => {
  it('homepage loads with a title', { tags: '@smoke' }, () => {
    cy.visit('/');
    cy.title().should('not.be.empty');
  });

  it('API health check', { tags: '@api' }, () => {
    cy.request({ url: '/api/health', failOnStatusCode: false }).then((response) => {
      expect(response.status).to.be.lessThan(500);
    });
  });
});
