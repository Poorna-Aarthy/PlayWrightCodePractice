

//length of the last word - Example 1
function lengthOfLastWord(sentence)
{

    console.log("Given sentence "+sentence);

    let words = sentence.split(" ");

    let noOfWords = words.length;

    let lastWord = words[noOfWords-1];

    console.log("Last word "+lastWord);

    let noOfLetters = lastWord.length;

    return noOfLetters;

}


console.log("Length of last word is "+lengthOfLastWord("Hi how are you"));


//length of the last word - Example 2 after trim
function lengthOfLastWord(sentence)
{
    sentence = sentence.trim();

    console.log("Given sentence "+sentence);

    let words = sentence.split(" ");

    let noOfWords = words.length;

    let lastWord = words[noOfWords-1];

    console.log("Last word "+lastWord);

    let noOfLetters = lastWord.length;

    return noOfLetters;

}


console.log("Length of last word is "+lengthOfLastWord("Hi how are you? "));




/*function convertToArray(givenWord)
{
    let words=[];
    for(let i=0;i<givenWord.length;i++)
        words.push(givenWord[i]);
    return words;
}*/