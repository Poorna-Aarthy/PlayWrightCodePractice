import {test} from "@playwright/test";
import path from 'path'

test("Test to upload file standard",async({page})=>{

    //Launch the application
    await page.goto("https://blazorise.com/docs/components/file-picker");

    //Click the "Choose files" element
   const fileUpload= await page.locator("//input[@class='form-control' and @type='file']").first();

    //  Upload Logo.png using setInputFiles()
    await fileUpload.setInputFiles(path.join(__dirname,"../../Data/TestLeaf.png"));

    //Wait for the upload operation to complete.
    await page.waitForTimeout(5000);


})