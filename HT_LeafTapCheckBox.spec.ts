import {test,expect} from "@playwright/test";

test("Checkbox test",async({page})=>{

    //Launch URL
    await page.goto("https://leafground.com/checkbox.xhtml");
    
   //click Basic checkbox
    await page.locator("//span[text()='Basic']/preceding-sibling::div[contains(@class, 'ui-chkbox-box')]").click();

    //Click on the "Notification Checkbox
    await page.locator("//span[text()='Ajax']/preceding-sibling::div[contains(@class, 'ui-chkbox-box')]").click();

    //Verify that the expected message is displayed.
    const expectedAlertText ="Checked";

    const alertText = await page.locator('span.ui-growl-title');
     
   await expect(alertText).toHaveText(expectedAlertText);


   //Click on your favorite language
   await page.locator("//input[@type='checkbox' and @value='java']//parent::div//following-sibling::div").click();
   await page.locator("//label[text()='Javascript']//preceding-sibling::div//div[contains(@class,'ui-chkbox-box')]").click();
   await page.locator("//label[text()='Others']//preceding-sibling::div//div[contains(@class,'ui-chkbox-box')]").click();


   //Click on the "Tri-State Checkbox."
   await page.locator("//div[contains(@id,'TriState')]").click();

   //Verify which tri-state option has been chosen
    const triState = page.locator("//p//preceding-sibling::span[@class='ui-growl-title']").last();
    const state= page.locator("//p").last();
    await page.waitForTimeout(3000);
    console.log("Text 1 "+ await page.locator("//p//preceding-sibling::span[@class='ui-growl-title']").first().textContent());
    console.log("Text s "+ await page.locator("//p//preceding-sibling::span[@class='ui-growl-title']").last().textContent());

    //Verify that the expected message is displayed.
    expect(triState).toHaveText("State has been changed.");
    
    console.log("Tristate's Statement "+ await state.textContent());
   
    //Toggle switch
    await page.locator(".ui-toggleswitch-slider").click();

    //Toggle alert text
   
    const toggle = page.locator("//span[@class='ui-growl-title']").last();
    await expect(toggle).toHaveText(expectedAlertText);

    console.log("Toggle Statement "+ await toggle.textContent());

    //Verify Check box is disabled
    const checkBox = page.locator("//span[text()='Disabled']//parent::div//input");
    expect(checkBox).toBeDisabled();

    //select different cities
    await page.getByRole("list").and(page.locator('[data-label="Cities"]')).click();
    await page.locator("//li[@data-item-value='Miami']//div[@class='ui-chkbox ui-widget']").click();
    await page.locator("//li[@data-item-value='Paris']//div[@class='ui-chkbox ui-widget']").click(); 
    await page.locator("//li[@data-item-value='Berlin']//div[@class='ui-chkbox ui-widget']").click(); 
   
    await page.close();
})

