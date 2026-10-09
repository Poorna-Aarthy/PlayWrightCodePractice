
import { Page } from "@playwright/test"
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    page: Page;
   

    constructor(pageName: string) {
        super(pageName);
       
    }

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
    }

}


