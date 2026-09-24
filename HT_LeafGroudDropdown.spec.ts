import { expect, test } from "@playwright/test";

test("Dropdown test", async ({ page }) => {

    //Launch URL
    await page.goto("https://leafground.com/select.xhtml");

    //Select your favorite UI automation tool using the different select options

    await page.locator("//select[@class='ui-selectonemenu']",).selectOption("Selenium");

    await page.locator("//select[@class='ui-selectonemenu']",).selectOption({ index: 2 });

    //Get the count and print of all the values
    console.log("List of options " + await page.locator("//select[@class='ui-selectonemenu']",).allTextContents());

    await page.locator("//label[contains(@id,'country_label')]",).click();

    //Choose your preferred Country
    await page.getByRole('option', { name: 'India' }).click();

    //Confirm Cities belongs to Country is loaded
    const city = page.locator("//label[contains(@id,'city_label')]",);

    await expect(city).toBeVisible();

    await expect(city).not.toHaveCount(0);

    const course = await page.locator("//input[contains(@id,'auto-complete_input')]//following::button//span[contains(@class,'ui-button-icon-primary')]");
    
    await chooseCourse("Appium");
    await chooseCourse("Playwright");
    await chooseCourse("Selenium WebDriver");

    //choose language
    const lang = await page.locator("//label[contains(@id,'lang_label')]",);
    await lang.click();
    await page.getByRole("option", { name: "Tamil" }).click();

    console.log("List of languages " + await lang.allTextContents());

    // Select 'Two' irrespective of the language chosen

    await page.locator("//label[contains(@id,'value_label')]").click;

    await page.locator("//li[contains(@id,'value_1')]").click;

    await page.waitForTimeout(20000);

   
//reusable function to select different course
async function chooseCourse(courseName:String)
    {
       
    await course.waitFor({ state: "visible",timeout:1000});
    await course.click();
    await page.locator("//li[@data-item-label='"+courseName+"']").click();
   
    }

})