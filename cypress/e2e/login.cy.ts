import { loginPage } from '../pages/LoginPage';
import { homePage } from '../pages/HomePage';

describe('Login', () => {
  let users: any;

  before(() => {
    cy.fixture('users').then((data) => {
      users = data;
    });
  });

  beforeEach(() => {
    loginPage.open();
  });

  it('user can log in with valid credentials', { tags: '@smoke' }, () => {
    loginPage.login(users.validUser.username, users.validUser.password);
    homePage.isLoggedIn();
  });

  it('shows an error with invalid credentials', { tags: '@regression' }, () => {
    loginPage.login(users.invalidUser.username, users.invalidUser.password);
    loginPage.getErrorMessage().should('contain.text', users.messages.invalidLogin);
  });

  it('login form is visible on page load', { tags: '@regression' }, () => {
    loginPage.expectVisibleByTestId('login-button');
  });
});
