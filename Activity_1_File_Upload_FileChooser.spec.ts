import {test} from "@playwright/test";
import path from 'path'

test("Test to upload file",async({page})=>{

    //Launch the application
    await page.goto("https://blazorise.com/docs/components/file-picker");

    //Register the filechooser event
    const fileUpload =  page.waitForEvent("filechooser");

    //Click the "Choose files" element
    await page.locator("//span[text()='Choose files']").first().click();

    //  Capture the file chooser reference
    const fileUploadRef=await fileUpload;

    //Upload TestleafLogo.png using setFiles()
    await fileUploadRef.setFiles(path.join(__dirname,"../../Data/TestLeaf.png"));

    
    await page.waitForTimeout(1000);


})