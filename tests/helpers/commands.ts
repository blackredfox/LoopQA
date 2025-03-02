import { Page, expect } from "@playwright/test";
import users from "../data/users.json";
import { selectors } from "./selectors";

/**
 * Universal login function for different users
 * @param page - object Playwright
 * @param role - role ("Admin" | "User")
 */
export async function login(page: Page, role: "Admin" | "User") {
  const user = users.find((u) => u.role === role);
  if (!user) throw new Error(`User with role ${role} not found`);

  console.log(`Logging in as ${role}...`);

  await page.goto(process.env.BASE_URL || "https://animated-gingersnap-8cf7f2.netlify.app/");
  await page.getByRole(selectors.usernameInput.role, { name: selectors.usernameInput.name }).fill(user.email);
  await page.getByRole(selectors.passwordInput.role, { name: selectors.passwordInput.name }).fill(user.password);
  await page.getByRole(selectors.signInButton.role, { name: selectors.signInButton.name }).click();

  // Checking successful login
  await expect(page.getByRole(selectors.mainHeading.role)).toBeVisible({ timeout: 5000 });
  console.log(`Successfully logged in as ${role}`);
}

/**
 * Navigating through tabs
 * @param page - object Playwright
 * @param category - categoty ("Web Application" | "Mobile Application")
 */
export async function navigateToTab(page: Page, category: "Web Application" | "Mobile Application") {
  const tabSelector = category === "Web Application" ? selectors.webAppTab : selectors.mobileAppTab;
  await page.getByRole(tabSelector.role, { name: tabSelector.name }).click();
  console.log(`Navigated to tab: ${category}`);
}

/**
 * Checking that the task is in the right column with the right tags
 * @param page - object Playwright
 * @param task - task name
 * @param column - the column in which the task should be located
 * @param tags - expected tags
 */
export async function verifyTask(page: Page, task: string, column: string, tags: string[]) {
  // Checking that the task column is visible
  await expect(page.getByRole("heading", { name: column })).toBeVisible();

  // Checking that the task exists
  const taskLocator = page.getByRole("heading", { name: task });
  await expect(taskLocator).toBeVisible();

  // Checking task tags
  for (const tag of tags) {
    const tagLocator = page.locator(`//span[contains(text(), "${tag}")]`).first();
    await expect(tagLocator).toBeVisible();
  }

  console.log(`Verified task: "${task}" in column: "${column}" with tags: ${tags.join(", ")}`);
}
