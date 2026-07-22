# Cypress QA Automation Framework

Production-ready test automation framework built with **Cypress + JavaScript**, using the **Page Object Model**, custom commands, tag-based test selection, CI/CD via GitHub Actions, and Mochawesome HTML reporting.

## ✨ Features

- **Page Object Model (POM)** — `BasePage` with shared helpers, extended by feature pages
- **Custom Cypress commands** — `loginViaUI`, `loginViaAPI`, `getByTestId`
- **Tag-based test selection** — `@smoke`, `@regression`, `@api` via `@cypress/grep`
- **Multi-browser CI matrix** — Chrome & Firefox run in parallel on GitHub Actions
- **Mochawesome reporting** — clean, shareable HTML report generated after each run
- **Retries on CI** — reduces flakiness in headless CI runs
- **Video & screenshots on failure** — fast debugging without local re-runs
- **Environment-based config** — `.env` support for dev/staging/prod targets

## 📁 Project Structure

```
cypress-framework/
├── cypress/
│   ├── e2e/                # Test specs
│   │   ├── login.cy.js
│   │   └── example.cy.js
│   ├── pages/               # Page Objects
│   │   ├── BasePage.js
│   │   ├── LoginPage.js
│   │   └── HomePage.js
│   ├── fixtures/
│   │   └── users.json       # Test data
│   └── support/
│       ├── commands.js      # Custom commands
│       └── e2e.js           # Support entry file
├── .github/workflows/
│   └── cypress.yml          # CI/CD pipeline
├── cypress.config.js
└── package.json
```

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Copy env file and adjust values
cp .env.example .env

# 3. Open Cypress interactive runner
npm run cy:open

# or run headless
npm test
```

## 🧪 Running Tests

```bash
npm test                    # run all tests headless
npm run test:chrome         # specific browser
npm run test:headed         # run with visible browser
npm run test:smoke          # only @smoke tagged tests
npm run test:regression     # only @regression tagged tests
```

## 📊 Reports

```bash
npm run report:merge        # merge individual mocha JSON results
npm run report:generate     # generate final HTML report -> cypress/reports/report.html
```

## 🔧 Adding a New Page Object

1. Create `cypress/pages/YourPage.js` extending `BasePage`
2. Define `data-testid` selectors as a private map
3. Add page-specific action methods
4. Export a singleton instance (e.g. `export default new YourPage();`) for direct use in specs

## 🏷️ Tagging Tests

Tags are passed via the test config object:

```js
it('does something important', { tags: '@smoke' }, () => { ... });
```

Run only tagged tests with `--env grepTags=@smoke` (already wrapped in `npm run test:smoke`).

## 🔐 CI/CD Secrets

Set these in your GitHub repo under **Settings → Secrets and variables → Actions**:

- `BASE_URL`
- `TEST_USERNAME`
- `TEST_PASSWORD`

## 📝 Notes

Selectors in `LoginPage.js` / `HomePage.js` use placeholder `data-testid` attributes — adjust them to match your real application under test.

---
Built as a reusable starting point for freelance/consulting QA automation projects.
