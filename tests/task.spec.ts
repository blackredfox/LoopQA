import { test } from "./helpers/fixtures";
import testData from "../data/testCases.json";
import { navigateToTab, verifyTask } from "./helpers/commands";

test.beforeEach(async ({ loginAsAdmin }) => {
  console.log("🔹 Running test as Admin");

  // Переход на базовый URL, если он есть
  await loginAsAdmin.goto(process.env.BASE_URL || "https://animated-gingersnap-8cf7f2.netlify.app/");
});

for (const { category, task, column, tags } of testData.testCases) {
  test(`Verify task '${task}' is in '${column}' column`, async ({ loginAsAdmin }) => {
    if (category !== "Web Application" && category !== "Mobile Application") {
      throw new Error(`❌ Invalid category: ${category}`);
    }

    await navigateToTab(loginAsAdmin, category);
    await verifyTask(loginAsAdmin, task, column, tags);
  });
}
