import {test} from "@playwright/test";

test("Create Lead",async({page}) =>
{
    //Navigate to URL
    await page.goto("http://leaftaps.com/opentaps/control/main");
 
    //Enter details and click Login
    await page.getByRole("textbox",{name:"Username"}).fill("Demosalesmanager");

    await page.getByRole("textbox",{name:"Password"}).fill("crmsfa");

    await page.getByRole("button",{name:"Login"}).click();

    //click CRM link

    await page.getByRole("link",{name:"CRM/SFA"}).click();

     //click Create Lead
    await page.getByRole("link",{name:"Create Lead"}).click();

    //Enter company name
    //await page.getByLabel("Company Name").fill("Comp");
    await page.locator("#createLeadForm_companyName").fill("Comp");

    //Enter first name
    await page.locator("#createLeadForm_firstName").fill("XXX");

    //Enter last name
    await page.locator("#createLeadForm_lastName").fill("YYY");

    //Enter salutation
    await page.locator("#createLeadForm_personalTitle").fill("Mr.");

    //Enter Title
    await page.locator("#createLeadForm_generalProfTitle").fill("CV");

    //Enter Annual revenue
    await page.locator("#createLeadForm_annualRevenue").fill("1200000");

    //Enter Department
    await page.locator("#createLeadForm_departmentName").fill("IT");

    //Enter Phone no.
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("12345679");
    
     //click Create Lead
    await page.getByRole("button",{name:"Create Lead"}).and(page.locator(".smallSubmit")).click();
    
    //await page.waitForTimeout(3000);

})