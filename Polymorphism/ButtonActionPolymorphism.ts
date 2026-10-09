import { BaseActionPolymorphism } from "./BaseActionPolymorphism";

class ButtonActionPolymorphism extends BaseActionPolymorphism
{
click(locator:string):void;
click(locator:string,description:string):void;

click(locator:string,description?:string)
{
    if(description)
    {
        console.log("ButtonActions:"+super.click(locator,description));
    
    }
}

clickAndVerifyText(locator:string,expectedText:string)
{
 console.log("Clicked and verifying text '"+expectedText +"' on "+locator);
}

}