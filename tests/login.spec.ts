import { test, expect } from "./helpers/fixtures"; 
import { selectors } from "./helpers/selectors";

test("Admin can log in and see Web Application", async ({ loginAsAdmin }) => {
  await expect(loginAsAdmin.getByRole(selectors.mainHeading.role)).toBeVisible();
});
