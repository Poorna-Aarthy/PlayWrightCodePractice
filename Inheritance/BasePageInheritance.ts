import {Page} from "@playwright/test"

export abstract class BasePageInheritane
{
pageName:string;

 constructor(pageName: string) {
        this.pageName=pageName;
       
    }



logPageInfo()
{
    console.log(this.pageName);
}

//abstract methods declaration

 openUrl(url:string):void
 {
    console.log("Navigating to Url: "+url);
 } ;

    getTitle():string
    {
        const title="Orange HRM - Dashboard";
        console.log("title "+title);
        return title;
    };

    
    click(loc:string)
    {
        console.log("Clicking on "+loc); 
    };

     fill(loc:string,value:string)
    {
        this.click(loc)
        console.log("Entering text  '"+value+ "' in "+loc); 
        
    }

    
}