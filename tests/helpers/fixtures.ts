import { test as base, expect, Page } from "@playwright/test";
import { login } from "./commands"; 

// Defining a fixture for login under Admin
type Fixtures = {
  loginAsAdmin: Page;
};

// Extending Playwright test with a custom fixture
const test = base.extend<Fixtures>({
  loginAsAdmin: async ({ page }, use) => {
    console.log("Logging in as Admin...");
    await login(page, "Admin"); // Transfering the Admin role
    await use(page);
  },
});

export { test, expect };
