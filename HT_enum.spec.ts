
//Numeric enum
enum days
{
    Monday=1,
    Tuesday=2,
    Wednesday=3,
    Thursday=4,
    Friday=5,
    Saturday=6,
    Sunday=7

}

//access values using name
console.log("days.Monday"+days.Monday);

//access values using index
console.log("days[1]"+days[1]);

//access values using loop
for(const key in days)
{
    console.log(key+" "+ days[key]);
}


//String enum
enum browsers
{
    Chrome="chrome",
    Edge="edge",
    Firefox="firefox"
}

//access values using name
console.log("browsers.Chrome "+browsers.Chrome);

//access values using index
const browserValues = Object.values(browsers);
console.log("browsers[1] "+browserValues[1]);

//access values using loop

Object.keys(browsers).forEach(value=>{
    const ans = value as keyof typeof browsers
    console.log("Keys "+value + "Value "+ browsers[ans])
})


//Heterogeneous emum
enum response{
    success=200,
    error="error"
}

console.log("response.success"+ response.success);

console.log("response.error"+response[1]);

Object.keys(response).forEach(value=>{
    const key=value as keyof typeof response;

    console.log("key "+key+" value "+response[key]);

})