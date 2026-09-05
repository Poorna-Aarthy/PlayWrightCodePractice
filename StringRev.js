let word="madamerr";
let reverseWord="";


let wordFunc = word.reverseWord;
for(let i=word.length-1;i>=0;i--)
{
    reverseWord=reverseWord+word.charAt(i);
}

console.log("Given word "+word);
console.log("Reverse word "+reverseWord);
checkPalindrome(word,reverseWord);

function checkPalindrome(word, reverseWord)
{
    if(word===reverseWord)
    {
    console.log(word + " is palindrome");
    return true;
    }

else{
    console.log(word + " is not a palindrome");
    return false;

}
    
}
