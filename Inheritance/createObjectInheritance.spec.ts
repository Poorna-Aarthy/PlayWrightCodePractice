import {LoginPageInheritance} from "./LoginPageInheritance"
import {test} from "@playwright/test"
import {DashboardPageInheritance} from "./DashboardPageInheritance"

test("Learn Inheritance",async({page})=>{
    //create object
const LoginPageInheritanceeObj = new LoginPageInheritance("Login page");

//call methods
LoginPageInheritanceeObj.openUrl("https://opensource-demo.orangehrmlive.com/");
await LoginPageInheritanceeObj.login("Admin", "admin123")
console.log("");

//create object
const DashboardPageInheritanceObj = new DashboardPageInheritance("Dashboard page");

//call methods

await DashboardPageInheritanceObj.verifyWelcomeMessage();

})

