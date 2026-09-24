import { test, expect } from "@playwright/test";

test("", async ({ page, context }) => {
    //Load the URL
    page.goto("http://leaftaps.com/opentaps/control/login");

    //Enter details and click Login
    await page.getByRole("textbox", { name: "Username" }).fill("Demosalesmanager");

    await page.getByRole("textbox", { name: "Password" }).fill("crmsfa");

    await page.getByRole("button", { name: "Login" }).click();

    //click CRM link

    await page.getByRole("link", { name: "CRM/SFA" }).click();

    //Click on the Contacts button
    await page.getByRole("link", { name: "Contacts" }).click();

    //Click on Merge Contacts
    await page.getByRole("link", { name: "Merge Contacts" }).click({delay:2000});

    //Handle the newly opened page/window
    const newPagePromise =  context.waitForEvent('page');


    //Click on the widget of the "From Contact"
    await page.locator("//img[@src='/images/fieldlookup.gif']").first().click({delay:2000});

    //Handle the newly opened page/window
    const newPage = await newPagePromise;

    await newPage.waitForLoadState();
    //Click on the first resulting contact.
    await newPage.locator("//a[@class='linktext']").first().click();

    //Handle the newly opened page/window
    const newPagePromise1 = context.waitForEvent("page");

    //Return to the main page.
    // Click on the widget of the "To Contact".
    await page.locator("//img[@src='/images/fieldlookup.gif']").last().click();

//Handle the newly opened page/window
    const newPage1 = await newPagePromise1;

    await newPage1.waitForLoadState();

    //Click on the second resulting contact.
    await newPage1.locator("//div[contains(@class,'x-grid3-col-partyId')]").nth(1).click({delay:2000});

    //Handle the alert/dialog that appears.
    page.on("dialog", async (dia) => {
        await dia.accept();
    });


    //Return to the main page.
    //Click on the Merge button
    await page.locator("//a[@class='buttonDangerous']").click({delay:2000});

    //Use page.title() – to retrieve the page title
    console.log("Title " + await page.title())
    await expect(page).toHaveTitle("View Contact | opentaps CRM");

})