import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //Launch the application using Playwright Codegen.
  await page.goto('https://www.amazon.in/');

  //Search for "Dell laptop".
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('Dell laptop');

  //Open the selected product.
  await page.goto('https://www.amazon.in/s?k=Dell+laptop&crid=176FVBO1L7CVJ&sprefix=%2Caps%2C1890&ref=nb_sb_noss');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Sponsored Ad - Dell Alienware' }).click();
  const page1 = await page1Promise;

  await page1.goto('https://www.amazon.in/Dell-Alienware-Laptop-Processor-Keyboard/dp/B0H4QMDD6J/ref=sr_1_1_sspa?crid=176FVBO1L7CVJ&dib=eyJ2IjoiMSJ9.wySG2q1JUBW6Ua5UnugThAugwq_BsYmXZnLgN6ewRKNixczozdzJWop0lfI9mWvZqShVh7zXubw7nlaSe75DRWf7_yFLoe_CBjAHEM-CbRJoNL7Lx3wt0pMtFEb8XArEnyYEJ2LFYk6egmp9Tt3uPQfl9PrGnpKRekWCfB4pJW7LCb8s5oDM-WAHISKYSAmv1jW9plex3x2tI5QJ0hFf-h_M66AuPcKUP2CLG2mfZME.WDbC5oVkIhEnbC5n2hZci9fiayF07-OFbYrBkxi3aXM&dib_tag=se&keywords=Dell%2Blaptop&qid=1790057903&sprefix=%2Caps%2C1890&sr=8-1-spons&aref=IuUEWFk1za&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1');

  //Add the Dell laptop to the cart
  await page1.getByRole('button', { name: 'Add to cart', exact: true }).click();

  //Open the shopping cart
  await page1.getByRole('link', { name: 'item in cart' }).click();


  //Verify that the selected Dell laptop is displayed in the cart.
  await expect(page1.getByLabel('Shopping Cart', { exact: true }).locator('h3')).toContainText('Dell Alienware 15 Gaming Laptop, AMD Ryzen R5 220 Processor, NVIDIA GeForce RTX 4050 6GB, 16GB RAM, 512G…');
});