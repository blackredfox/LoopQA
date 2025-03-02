import { Page, expect } from "@playwright/test";
import users from "../data/users.json";
import { selectors } from "./selectors";

/**
 * Универсальная функция логина для разных пользователей
 * @param page - объект Playwright
 * @param role - роль пользователя ("Admin" | "User")
 */
export async function login(page: Page, role: "Admin" | "User") {
  const user = users.find((u) => u.role === role);
  if (!user) throw new Error(`❌ User with role ${role} not found`);

  console.log(`🔹 Logging in as ${role}...`);

  await page.goto(process.env.BASE_URL || "https://animated-gingersnap-8cf7f2.netlify.app/");
  await page.getByRole(selectors.usernameInput.role, { name: selectors.usernameInput.name }).fill(user.email);
  await page.getByRole(selectors.passwordInput.role, { name: selectors.passwordInput.name }).fill(user.password);
  await page.getByRole(selectors.signInButton.role, { name: selectors.signInButton.name }).click();

  // Проверяем успешный вход
  await expect(page.getByRole(selectors.mainHeading.role)).toBeVisible({ timeout: 5000 });
  console.log(`✅ Successfully logged in as ${role}`);
}

/**
 * Навигация по вкладкам
 * @param page - объект Playwright
 * @param category - категория ("Web Application" | "Mobile Application")
 */
export async function navigateToTab(page: Page, category: "Web Application" | "Mobile Application") {
  const tabSelector = category === "Web Application" ? selectors.webAppTab : selectors.mobileAppTab;
  await page.getByRole(tabSelector.role, { name: tabSelector.name }).click();
  console.log(`📌 Navigated to tab: ${category}`);
}

/**
 * Проверка, что задача находится в нужной колонке с нужными тегами
 * @param page - объект Playwright
 * @param task - название задачи
 * @param column - колонка, в которой должна находиться задача
 * @param tags - ожидаемые теги
 */
export async function verifyTask(page: Page, task: string, column: string, tags: string[]) {
  // Проверяем, что колонка с задачами видна
  await expect(page.getByRole("heading", { name: column })).toBeVisible();

  // Проверяем, что задача существует
  const taskLocator = page.getByRole("heading", { name: task });
  await expect(taskLocator).toBeVisible();

  // Проверяем теги задачи
  for (const tag of tags) {
    const tagLocator = page.locator(`//span[contains(text(), "${tag}")]`).first();
    await expect(tagLocator).toBeVisible();
  }

  console.log(`✅ Verified task: "${task}" in column: "${column}" with tags: ${tags.join(", ")}`);
}
