import '@cypress/grep';
import './commands';

// Global before/after hooks can go here.
// Example: fail fast on uncaught app exceptions you don't control:
Cypress.on('uncaught:exception', () => {
  // return false to prevent Cypress from failing the test on app-level errors
  // remove this if you want strict failure on uncaught exceptions
  return true;
});
