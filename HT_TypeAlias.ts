
//Type alias called product
type product =
{
    id:number,
    name:string,
    price:number,
    category:string,
    status:productStatus
}


//Create product status with values
type productStatus="In Stock"|"Out Of Stock"|"Discontinued";

//Create object for product type
let prodObj:product=
{
id:123,
name:"aar",
price:2344,
category:"er",
status:"In Stock"
}

console.log("id  "+prodObj.id);
console.log("name  "+prodObj.name);
console.log("price  "+prodObj.price);
console.log("category  "+prodObj.category);
console.log("status  "+prodObj.status);


let prodObj1:product=
{
id:123,
name:"aar",
price:2344,
category:"er",
status:"Out Of Stock"
}

let prodObj2:product=
{
id:123,
name:"aar",
price:2344,
category:"er",
status:"Discontinued"
}


//Create type alias product details
type productDetails=
{
    id:number,
    name:string,
    price:number,
    status:productStatus
}


//Create type alias inventory details
type inventoryDetails=
{
    quantity:number,
    location:string
}

//create productInfo by combining product details and inventory details
type productInfo = productDetails & inventoryDetails;

//create object for Product Info
let productObj:productInfo=
{
 id:3435,
 name:"name",
 price:344354,
 status:"In Stock",
    quantity:34,
    location:"loc"
    
}

//Pring product info details
console.log("Product Info type details")
console.log("id "+productObj.id);
console.log("name "+productObj.name);
 console.log("price "+productObj.price);
console.log("status "+productObj.status);
console.log("quantity "+productObj.quantity);
console.log("location "+productObj.location);

//update price and quantity
 productObj.price=4454354;
 productObj.quantity=44;
 
 console.log("updated price "+productObj.price);
console.log("updated quantity "+productObj.quantity);