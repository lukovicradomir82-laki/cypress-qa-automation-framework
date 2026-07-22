import BasePage from './BasePage';

class LoginPage extends BasePage {
  selectors = {
    username: 'username-input',
    password: 'password-input',
    loginButton: 'login-button',
    errorMessage: 'login-error',
  };

  open() {
    this.visit('/login');
  }

  login(username, password) {
    this.typeByTestId(this.selectors.username, username);
    this.typeByTestId(this.selectors.password, password);
    this.clickByTestId(this.selectors.loginButton);
  }

  getErrorMessage() {
    return this.getByTestId(this.selectors.errorMessage);
  }
}

export default new LoginPage();
