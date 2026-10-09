export class BaseActionPolymorphism
{
    pageName:string

    //Declaring methods
    click(locator:string):void;
    click(locator:string,description:string):void;

    //Implementing methods
    click(locator:string,description?:string)
    {
        if(description)
        {
            console.log("Clicking on "+locator+ "("+description+")");

        }
        else
            console.log("Clicking on button-"+locator);
    }

}