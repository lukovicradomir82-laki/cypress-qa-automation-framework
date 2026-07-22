import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private readonly selectors = {
    username: 'username-input',
    password: 'password-input',
    loginButton: 'login-button',
    errorMessage: 'login-error',
  };

  open() {
    this.visit('/login');
  }

  login(username: string, password: string) {
    this.typeByTestId(this.selectors.username, username);
    this.typeByTestId(this.selectors.password, password);
    this.clickByTestId(this.selectors.loginButton);
  }

  getErrorMessage() {
    return this.getByTestId(this.selectors.errorMessage);
  }
}

export const loginPage = new LoginPage();
