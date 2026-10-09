interface IPageActions
{
    open(url:string):void;

    getTitle():string;

    isElementVisible(locator:string):boolean;
}