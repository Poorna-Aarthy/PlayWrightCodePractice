import {Page} from "@playwright/test"
import strict from "assert/strict";
export abstract class BasePage implements IPageActions
{
pageName:string;

//constuctor
constructor(pageName:string)
{
   
this.pageName=pageName;
}

logPageInfo()
{
    console.log("Page Name "+this.pageName);
}

//abstract methods declaration

abstract open(url:string):void ;


   abstract getTitle():string;


    abstract isElementVisible(locator:string):boolean;
   

}