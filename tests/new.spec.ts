import { test, expect } from '@playwright/test';

test('Register Form - Complete Test', async ({ page }) => {

  // ✅ Go to page
  await page.goto('https://demo.automationtesting.in/Register.html');

  // ✅ First Name & Last Name
  await page.fill("[ng-model='FirstName']", "Budireddy");
  await page.fill("[ng-model='LastName']", "Chandra Shekhar");

  // ✅ Address
  await page.fill("[ng-model='Adress']", "koppaka, near temple");

  // ✅ Email - unique every run
  const email = `test${Date.now()}@gmail.com`;
  await page.fill("[ng-model='EmailAdress']", email);

  // ✅ Phone
  await page.fill("[ng-model='Phone']", "9885992068");

  // ✅ Gender
  await page.check('[value="Male"]');

  // ✅ Hobbies
  await page.check('[value="Cricket"]');
  await page.check('[value="Movies"]');

  // ✅ Languages - using JavaScript directly
  await page.click('#msdd');
  await page.waitForTimeout(1000);

  const languages = ['Czech', 'Dutch', 'Hindi'];
  for (const lang of languages) {
    await page.evaluate((language) => {
      const items = document.querySelectorAll('.ms-drop ul li');
      items.forEach((item) => {
        if (item.textContent?.trim() === language) {
          const input = item.querySelector('input');
          if (input) input.click();
        }
      });
    }, lang);
    await page.waitForTimeout(300);
  }

  await page.click('#msdd'); // close dropdown

  // ✅ Skills
  await page.selectOption('#Skills', { label: 'APIs' });

  // ✅ Country - using selectOption directly
  await page.selectOption('select[ng-model="country"]', { label: 'India' });
  await page.waitForTimeout(500);

  // ✅ Date of Birth
  await page.selectOption('#yearbox', '1995');
  await page.selectOption('[ng-model="monthbox"]', 'January');
  await page.selectOption('#daybox', '4');

  // ✅ Password
  await page.fill('#firstpassword', 'Test@1234');
  await page.fill('#secondpassword', 'Test@1234');

  // ✅ Upload Photo
  await page.setInputFiles('#imagesrc', 'tests/image.png');

  // ✅ Submit
  await page.click('#submitbtn');

  // ✅ Verify submission
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL('https://demo.automationtesting.in/Register.html');

});