import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // ✅ Step 1: Go to the SauceDemo login page
  await page.goto('https://www.saucedemo.com/');
  await page.waitForTimeout(1000);

  // ✅ Step 2: Login 

  //  Step 2.a: Fill in the username
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.waitForTimeout(1000);
  //  Step 2.b: Fill in the password
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.waitForTimeout(1000);
  //  Step 2.c: Click the login button
  await page.locator('[data-test="login-button"]').click();
  await page.waitForTimeout(1000);
  await expect(page.url()).toContain("inventory.html");


  // ✅ Step 3: Add products to the cart

  //  Step 3.a: Add first item to the cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.waitForTimeout(1000);
  //  Step 3.b: Add second item to the cart
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.waitForTimeout(1000);


  // ✅ Step 4: Go to the shopping cart
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.waitForTimeout(1000);


  // ✅ Step 5: Click on one item in the cart to view its details (Check the contents of the selected one)
  await page.locator('[data-test="item-4-title-link"]').click();
  await page.waitForTimeout(2500);


  // ✅ Step 6: Go back to the products list and logout

  // Step 6.a: Go back to the products list
  await page.locator('[data-test="back-to-products"]').click();
  await page.waitForTimeout(1000);
  // Step 6.b: Open the menu
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.waitForTimeout(1000);
  // Step 6.c: Click logout
  await page.locator('[data-test="logout-sidebar-link"]').click();
});