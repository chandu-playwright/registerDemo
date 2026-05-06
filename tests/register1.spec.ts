import { test, expect } from "@playwright/test";

test.describe("Register Page Tests - Stable", () => {

  test("Register Page Full Flow", async ({ page }) => {

    await page.goto("https://demo.automationtesting.in/Register.html", {
      waitUntil: "domcontentloaded",
      timeout: 60000
    });

    // ✅ Fill basic details
    await page.fill("[ng-model='FirstName']", "Budireddy");
    await page.fill("[ng-model='LastName']", "Chandra Shekhar");
    await page.fill('[ng-model="Adress"]', "Koppaka");
    await page.fill('[ng-model="EmailAdress"]', "test@example.com");
    await page.fill('[ng-model="Phone"]', "9885992068");

    // ✅ Verify input
    await expect(page.locator("[ng-model='FirstName']")).toHaveValue("Budireddy");

    // ✅ Gender
    const gender = page.locator('[value="Male"]');
    await gender.check();
    await expect(gender).toBeChecked();

    // ✅ Hobbies
    const cricket = page.locator('[value="Cricket"]');
    const movies = page.locator('[value="Movies"]');

    await cricket.check();
    await movies.check();

    await expect(cricket).toBeChecked();
    await expect(movies).toBeChecked();

    // ✅ Multi-select languages (FIXED PART 🚀)
    const languageDropdown = page.locator('#msdd');

    // Open dropdown
    await languageDropdown.click();

    // Wait for options to be visible
    await page.waitForSelector('a:has-text("Czech")', { state: 'visible' });

    // Select language
    await page.locator('a:has-text("Czech")').click();

    // Optional: select another language (more realistic)
    await page.locator('a:has-text("English")').click();

    // Close dropdown (click outside)
    await page.locator('body').click();

    // ✅ Skills dropdown
    await page.selectOption('#Skills', 'Java');

    // ✅ Country (custom dropdown)
    await page.locator('.select2-selection').click();
    await page.locator('.select2-search__field').fill('India');
    await page.locator('.select2-results__option', { hasText: 'India' }).click();

    // ✅ Date of Birth
    await page.selectOption('#yearbox', '1998');
    await page.selectOption('[placeholder="Month"]', 'May');
    await page.selectOption('#daybox', '10');

    // ✅ Password
    await page.fill('#firstpassword', 'Test@123');
    await page.fill('#secondpassword', 'Test@123');

    // Just a soft validation
    await expect(page.locator('#firstpassword')).toHaveValue('Test@123');

  });

});