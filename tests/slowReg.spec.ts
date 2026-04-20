import { test, expect } from '@playwright/test';

test('Register Form - Final Working', async ({ page }) => {

  await page.goto('https://demo.automationtesting.in/Register.html');

  // 🔹 Text fields
  await page.fill("[ng-model='FirstName']", "Budireddy");
  await page.fill("[ng-model='LastName']", "Chandra Shekhar");
  await page.fill('[ng-model="Adress"]', "koppaka, near temple");
  await page.fill('[ng-model="EmailAdress"]', "test@gmail.com");
  await page.fill('[ng-model="Phone"]', "9885992068");

  // 🔹 Gender
  await page.check('[value="Male"]');

  // 🔹 Hobbies
  await page.check('[value="Cricket"]');
  await page.check('[value="Movies"]');

  // 🔹 Languages (multi select)
  await page.click("#msdd");
  await page.click("text=Czech");
  await page.click("text=Dutch");
  await page.click("text=Hindi");

  // 🔹 Skills
  await page.selectOption("#Skills", { value: "APIs" });

  // 🔹 Country (FIXED - correct locator)
 // open dropdown
 // 🔹 Country (Select2 dropdown)
 
await page.click('.select2-selection'); // open dropdown
await page.fill('.select2-search__field', 'India'); // type country
await page.click('.select2-results__option >> text=India'); // select


  // 🔹 Date of Birth
  await page.selectOption("#yearbox", "1921");
  await page.selectOption('[ng-model="monthbox"]', "January");
  await page.selectOption("#daybox", "4");

  // 🔹 Password
  await page.fill("#firstpassword", "chanduReddy");
  await page.fill("#secondpassword", "chanduReddy");

  // 🔹 Upload file (ensure file exists)
  await page.setInputFiles("#imagesrc", "tests/imag.png");

  // 🔹 Submit
  await page.click("#submitbtn");

});