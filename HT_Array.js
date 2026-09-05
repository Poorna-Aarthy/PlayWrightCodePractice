
//Initialize an array
const nums=[2,4,5,2,1,2];

let count=0; // counter to check no. of occurances

function noOfOccurances(k)
{
for(let i=0;i<nums.length;i++) // loop through the array 
{
    if(nums[i]===k) //check if the value is equal to given value
        count++;
}
return count;
}

console.log(noOfOccurances(7));
