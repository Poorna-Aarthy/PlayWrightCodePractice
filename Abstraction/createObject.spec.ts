import {LoginPage} from "./LoginPage"
import {test} from "@playwright/test"
import {DashBoardPage} from "./DashBoardPage"

test("Learn abstract",async({page})=>{
    //create object
const loginPageObj = new LoginPage("Login Page");

//call methods
await loginPageObj.open("https://opensource-demo.orangehrmlive.com/")
await console.log("Title" + loginPageObj.getTitle());
await loginPageObj.isElementVisible('#username');
await loginPageObj.login("Admin", "admin123");


const dashboardPageObj = new DashBoardPage("Dashboard Page");

//call methods
await dashboardPageObj.open("https://opensource-demo.orangehrmlive.com/")
await console.log("Title" + dashboardPageObj.getTitle());
await dashboardPageObj.isElementVisible('#welcome');
await dashboardPageObj.verifyWelcomeMessage();

})

