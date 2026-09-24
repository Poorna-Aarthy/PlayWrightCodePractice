import {test,expect} from "@playwright/test";

test("Checkbox text",async({page})=>
{
  //Launch URL
    await page.goto("https://leafground.com/radio.xhtml");
    
    //Identify and assert the default selected radio button.
   const defaultRadio = await page.locator("//label[contains(@for,'console2:2')]//preceding-sibling::div//input");
   await expect(defaultRadio.isChecked());

   //Click your most favorite browser and assert that the browser is enabled
   const favBrwoser = await page.locator("//label[contains(@for,'console1:0')]//preceding-sibling::div//input//following::div[1]");
   await favBrwoser.click(); 
   await expect(await page.locator("//label[contains(@for,'console1:0')]//preceding-sibling::div//input").isChecked());

   //Click one of the cities
  await page.locator("//input[@value='Chennai']//following::div[1]").click();

  // Select the age group. Assert the default selected button.
    const ageGroup = await page.locator("//label[contains(text(),'21-40')]//preceding-sibling::div//input");
     await expect(ageGroup.isChecked());


     await page.locator("//label[contains(text(),'1-20')]//preceding-sibling::div").click();
     await page.waitForTimeout(2000);
     
})