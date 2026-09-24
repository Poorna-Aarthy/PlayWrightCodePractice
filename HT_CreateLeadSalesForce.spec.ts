import { expect, test } from "@playwright/test"
import { TIMEOUT } from "node:dns";

test("Use xpath and css locator", async ({ page }) => {
    //login to URL
    await page.goto("https://login.salesforce.com/?locale=in");

    await page.locator("#username").fill("aarthy.poorna1.643bd84d4745@agentforce.com");
    await page.locator("//input[@id='Login']").click();
    await page.locator("//input[@id='password']").fill("AarthyMani5");
    await page.locator("//input[@id='Login']").click();

    //Pause included to provide OTP
    await page.pause();
    console.log("Updated");

    //click on toggle menu button
    await page.locator(".slds-icon-waffle").click();

    //click view all
    await page.getByRole("button", { name: "View All Applications" }).click();

    const appLauncherHeader = page.locator('h2:has-text("App Launcher")');

    // 2. Wait for it to become visible on the screen
    await appLauncherHeader.waitFor({ state: 'visible' });

    // 3. Optional: Verify it is visible (returns a boolean)
    const isLoaded = await appLauncherHeader.isVisible();
    console.log(`Is the modal loaded? ${isLoaded}`);

    await page.locator("//p[text()='Sales']").waitFor({ state: 'visible' });
    //click sales
    await page.locator("//p[text()='Sales']").click();

    //click on leads
    await page.locator("//a[@title='Leads']//span[text()='Leads']").click();

    //div[@class='slds-utility-bar__item oneUtilityBarItem']//button
    //Click on New button
    await page.getByRole("button", { name: "New" }).click();

    //Select Salutation dropdown 
    await page.getByRole("combobox", { name: "Salutation" }).click();

    await page.locator("//span[@title='Mr.']").click();

    await page.getByPlaceholder('Last Name').fill("Prasad");

    await page.getByRole("textbox", { name: "Company" }).fill("XXX");

    await page.getByRole("button", { name: "Save" }).last().click();

})


//Assignment 2

test("Edit Lead", async ({ page }) => {
    //login to URL
    await page.goto("https://login.salesforce.com");

    await page.locator("#username").fill("aarthy.poorna1.643bd84d4745@agentforce.com");
    await page.locator("//input[@id='Login']").click();
    await page.locator("//input[@id='password']").fill("AarthyMani5");
    await page.locator("//input[@id='Login']").click();

    //Pause included to provide OTP
    await page.pause();

    //click on toggle menu button
    await page.locator(".slds-icon-waffle").click();

    //click view all
    await page.getByRole("button", { name: "View All Applications" }).click();

    const appLauncherHeader = page.locator('h2:has-text("App Launcher")');

    // 2. Wait for it to become visible on the screen
    await appLauncherHeader.waitFor({ state: 'visible' });

    // 3.  Verify it is visible 
    const isLoaded = await appLauncherHeader.isEnabled();
    console.log(`Is the modal loaded? ${isLoaded}`);

    await page.locator("//p[text()='Sales']").waitFor({ state: 'visible' });
    //click sales
    await page.locator("//p[text()='Sales']").click();

    //click on leads
    await page.locator("//a[@title='Leads']//span[text()='Leads']").click();

    //Select your lead to be edited
    await page.getByRole("button", { name: 'Show Actions' }).first().click();


    //Click on edit
    await page.locator("//a[@title='Edit']").click();


    //Declaring company name
    const comp = "Hello";


    await page.locator("//input[@name='Company']").fill(comp);



    //click save

    await page.getByRole("button", { name: "Save" }).last().click();

    const UpdatedCompany = page.locator("//td[@data-label='Company']//span//span").first();

    expect(UpdatedCompany).toHaveText(comp);


})


//Assignment 3

test("Create Individual", async ({ page }) => {
    //login to URL
    await page.goto("https://login.salesforce.com");

    await page.locator("#username").fill("aarthy.poorna1.643bd84d4745@agentforce.com");
    await page.locator("//input[@id='Login']").click();
    await page.locator("//input[@id='password']").fill("AarthyMani5");
    await page.locator("//input[@id='Login']").click();

    //Pause included to provide OTP
    await page.pause();
    console.log("Updated");

    //click on toggle menu button
    await page.locator(".slds-icon-waffle").click();

    //click view all
    await page.getByRole("button", { name: "View All Applications" }).click();

    const appLauncherHeader = page.locator('h2:has-text("App Launcher")');

    // 2. Wait for it to become visible on the screen
    await appLauncherHeader.waitFor({ state: 'visible' });

    // 3. Optional: Verify it is visible (returns a boolean)
    const isLoaded = await appLauncherHeader.isVisible();
    console.log(`Is the modal loaded? ${isLoaded}`);

    await page.locator("//p[text()='Individuals']").waitFor({ state: 'visible' });
    //click Individuals
    await page.locator("//p[text()='Individuals']").click();

    //Click on the Dropdown icon in the Individuals tab 
    await page.getByRole("button", { name: "Individuals List" }).click();

    //Click on New Individual
    await page.getByRole("menuitem", { name: "New Individual" }).click();

    //Enter the Last Name
    const name = "DGE";
    await page.getByRole("textbox", { name: "Last Name *" }).fill(name);

    //Click save 
    await page.locator("//button[@title='Save']//span").click();

    page.locator("//button[@title='Save']//span").waitFor({ state: 'hidden', timeout: 3000 });
    await page.waitForTimeout(2000);
    //verify Individuals Nameawait 
    // 
    page.locator("//div[contains(@class,'slds-page-header__title')]//span").waitFor({ state: 'visible', timeout: 3000 });

    const screenName = await page.locator("//div[contains(@class,'slds-page-header__title')]//span");

    expect(screenName).toHaveText(name);
    await page.waitForTimeout(1000);
})


//Assignment 4

test("Edit Inddividuals", async ({ page }) => {
    //login to URL
    await page.goto("https://login.salesforce.com");

    await page.locator("#username").fill("aarthy.poorna1.643bd84d4745@agentforce.com");
    await page.locator("//input[@id='Login']").click();
    await page.locator("//input[@id='password']").fill("AarthyMani5");
    await page.locator("//input[@id='Login']").click();

    //Pause included to provide OTP
    await page.pause();


    //click on toggle menu button
    await page.locator(".slds-icon-waffle").click();

    //click view all
    await page.getByRole("button", { name: "View All Applications" }).click();

    const appLauncherHeader = page.locator('h2:has-text("App Launcher")');

    // 2. Wait for it to become visible on the screen
    await appLauncherHeader.waitFor({ state: 'visible' });

    // 3.  Verify it is visible 
    const isLoaded = await appLauncherHeader.isEnabled();
    console.log(`Is the modal loaded? ${isLoaded}`);

    await page.locator("//p[text()='Individuals']").waitFor({ state: 'visible' });

    //click Individuals
    await page.locator("//p[text()='Individuals']").click();

    //Search the Individuals last name 
    await page.getByRole('searchbox', { name: 'Search this list...' }).fill("Sasi");

    await page.getByRole('searchbox', { name: 'Search this list...' }).press('Enter');

    //Click on the Dropdown icon and Select Edit 
    await page.getByRole("button", { name: 'Show Actions' }).first().click();


    //Click on edit
    await page.locator("//a[@title='Edit']").first().click();


    //Select Salutation as 'Mr' 
    await page.locator("//a[@class='select']").first().click();

    await page.locator("//a[@role='option' and @title='Mr.']").click({ timeout: 1000 });

    //Now enter the first name 
    const firstName = "Prasad";
    await page.getByRole("textbox", { name: 'First Name' }).fill(firstName);

    //click save

    await page.getByRole("button", { name: "Save" }).last().click();

    await page.waitForTimeout(3000);

    // Verify the first name
    const UpdatedFirstName = page.locator("//a[@class='slds-truncate']//span").first();

    await expect(UpdatedFirstName).toContainText(firstName)


})
