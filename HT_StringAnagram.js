
//Example 3 check anagrams
function checkAnagrams(string1,string2)
{
    let trimString1 = "";
    let trimString2 = "";
    trimString1.split("")

     trimString1 = string1.trim();
     trimString2 = string2.trim();

    console.log("First word "+trimString1);
    console.log("Second word "+trimString2);

    trimString1 = trimString1.toLowerCase();
    trimString2 = trimString2.toLowerCase();

    let sortedString1 = trimString1.split("").sort().join("");
    let sortedString2 = trimString2.split("").sort().join("");

     console.log("Sorted First word "+sortedString1);
     console.log("Sorted Second word  "+sortedString2);

   
     if(sortedString1===sortedString2)
     {
        console.log("Anagrams");
        return true;
     }
        
      else
     {
        console.log("Not Anagrams");
        return false;
     }
        

}


checkAnagrams("Listen","Siluytent");