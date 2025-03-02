import { test as base, expect, Page } from "@playwright/test";
import { login } from "./commands"; // Импортируем исправленную функцию логина

// Определяем фикстуру для логина под Admin
type Fixtures = {
  loginAsAdmin: Page;
};

// Расширяем Playwright test с кастомной фикстурой
const test = base.extend<Fixtures>({
  loginAsAdmin: async ({ page }, use) => {
    console.log("🔹 Logging in as Admin...");
    await login(page, "Admin"); // Теперь передаём роль Admin
    await use(page);
  },
});

export { test, expect };
