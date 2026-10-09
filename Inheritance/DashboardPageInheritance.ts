
import { Locator, Page } from "@playwright/test"
import { BasePageInheritane } from "./BasePageInheritance";

export class DashboardPageInheritance extends BasePageInheritane {
    page: Page;
   welcomeMessageLocator:Locator;

verifyWelcomeMessage():void
{
    console.log("Validating Welcome message ");
    console.log("Page title "+super.getTitle());
    console.log("Welcome message is displayed successfully");


}

    
    constructor(pageName: string) {
        super(pageName);
        super.logPageInfo();
    }
/*
     open(url: string): void {
         // this.page.goto(url,{timeout:100000})
        console.log("Navigate to login page " + url);
    }

     getTitle(): string {
        
        return "Login page-OrangeHRM";
    }

    isElementVisible(locator: string): boolean {
        
  
        console.log('Element ${locator} is visibe :true');
        return true
    }

    login(username: string, password: string): void {
        console.log("Perform login with username " + username + " pasword " + password);
    } */

}


