import { test, expect } from "@playwright/test";

test.describe("Register Page Tests", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html", {
      waitUntil: "domcontentloaded",
      timeout: 60000
    });
  });

  test("Fill basic details", async ({ page }) => {
    await page.fill("[ng-model='FirstName']", "Budireddy");
    await page.fill("[ng-model='LastName']", "Chandra Shekhar");
    await page.fill('[ng-model="Adress"]', "Koppaka, near temple");
    await page.fill('[ng-model="EmailAdress"]', "test@example.com");
    await page.fill('[ng-model="Phone"]', "9885992068");

    await expect(page.locator("[ng-model='FirstName']")).toHaveValue("Budireddy");
  });

  test("Checkbox and radio buttons", async ({ page }) => {
    const gender = page.locator('[value="Male"]');
    await gender.check();
    await expect(gender).toBeChecked();

    const hobby1 = page.locator('[value="Cricket"]');
    const hobby2 = page.locator('[value="Movies"]');

    await hobby1.check();
    await hobby2.check();

    await expect(hobby1).toBeChecked();
    await expect(hobby2).toBeChecked();
  });

  test("Multi-select languages", async ({ page }) => {
    await page.click("#msdd");
    await page.click("text=Czech");
    await page.click("text=Dutch");
    await page.click("text=Hindi");

    await expect(page.locator("#msdd")).toBeVisible();
  });

  test("Dropdown selections", async ({ page }) => {
    await page.selectOption("#Skills", { value: "APIs" });
    await page.selectOption("#yearbox", "1921");
    await page.selectOption('[ng-model="monthbox"]', "January");
    await page.selectOption("#daybox", "4");

    await expect(page.locator("#yearbox")).toHaveValue("1921");
  });

  test("Password and submit", async ({ page }) => {
    await page.fill("#firstpassword", "Test@123");
    await page.fill("#secondpassword", "Test@123");

    await expect(page.locator("#firstpassword")).toHaveValue("Test@123");

    // File upload (only works if file exists)
    await page.setInputFiles("#imagesrc", "tests/imag.png");

    await page.click("#submitbtn");
  });

});