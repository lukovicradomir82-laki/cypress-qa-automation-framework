import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  private readonly selectors = {
    welcomeBanner: 'welcome-banner',
    logoutButton: 'logout-button',
    searchInput: 'search-input',
  };

  isLoggedIn() {
    this.expectVisibleByTestId(this.selectors.welcomeBanner);
  }

  search(term: string) {
    this.typeByTestId(this.selectors.searchInput, `${term}{enter}`);
  }

  logout() {
    this.clickByTestId(this.selectors.logoutButton);
  }
}

export const homePage = new HomePage();
