
import { Locator, Page } from "@playwright/test"
import { BasePageInheritane } from "./BasePageInheritance";

export class LoginPageInheritance extends BasePageInheritane {
    page: Page;
    usernameLocator:string = "#username";
    passwordLocator:string = "#password";
    loginButtonLocator:string ="#loginButton";


    login(username: string, password: string): void {
        super.fill(this.usernameLocator,username);
        super.fill(this.passwordLocator,password);
        super.click(this.loginButtonLocator);
        console.log("Login action completed for user " + username);

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


