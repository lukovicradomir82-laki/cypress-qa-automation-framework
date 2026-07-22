import BasePage from './BasePage';

class HomePage extends BasePage {
  selectors = {
    welcomeBanner: 'welcome-banner',
    logoutButton: 'logout-button',
    searchInput: 'search-input',
  };

  isLoggedIn() {
    this.expectVisibleByTestId(this.selectors.welcomeBanner);
  }

  search(term) {
    this.typeByTestId(this.selectors.searchInput, `${term}{enter}`);
  }

  logout() {
    this.clickByTestId(this.selectors.logoutButton);
  }
}

export default new HomePage();
