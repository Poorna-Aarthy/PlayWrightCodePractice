import { BasePage } from "./BasePage";

export class DashBoardPage extends BasePage
{
      constructor(pageName: string) {
        super(pageName);
       
    }
open(url:string):void
{
    console.log("Navigate to Dashboard page "+url);
}

 getTitle():string
{
return "Dashboard -orange HRM";
}

isElementVisible(locator:string):boolean
    {
 console.log('Element ${locator} is visibe :true');
        return true

}

verifyWelcomeMessage():void
{
    console.log("Dashboard welcome message is displayed")
}
}