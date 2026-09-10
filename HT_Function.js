const { resolve } = require("node:dns");

function userProfile(name)
{
console.log("Hello "+name+"!");
}

userProfile("Aarthy");

//Arrow function
let double = (number) => {
let output = number*2;
return output;
}

console.log(double(8));

//Anonymous function

setTimeout(() =>
{
console.log("After 2 mins")
},2000);


//Promise function
function getUserData(callbackfunc)
{
    let getDetails = new Promise((resolve) =>
    {
    setTimeout(()=>
        {
            const data = "input details";

            console.log("Data "+ data);

            callbackfunc();
        },3000)
    });

}

function callback()
{
console.log("Call Back Function");
}

getUserData(callback);