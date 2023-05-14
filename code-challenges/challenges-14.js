'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
// join: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Input: "I did my waiting 12 years of it in Azkaban"
// Output: "Azkaban"
//
// Input: "Impossible"
// Output: "Impossible"
//

const LastWord = (str) => {
    // write your code here

    const arr = str.split(" ");

    if (arr.length > 1) {
        return str.slice(str.lastIndexOf(" ") + 1);
    }

    return str;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
//  You can try to do the same task using the split method
//
//  Input: "you dare use my spells against me, potter"
//  Output: "potter"

const LastWord_2 = (str) => {
    // write your code here
    const arr = str.split(" ");
    return arr[arr.length - 1];
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
//
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Input:  "I thought you had a plan"
// Output: "We thought you had a plan"
//
// Input: "I was there 3000 years ago"
// Output: "We were there 3000 years ago"

// Input: "I am Venom"
// Output: "We are Venom"
//

const replaceWords = (str) => {
    // write your code here
    const arr = str.split(" ");

    function indexOfI(arr) {
        let arr2 = [];
        for (let i in arr) {
            if (arr[i].toLocaleLowerCase() === 'i') {
                arr2.push(i)
            }
        }
        return arr2
    }

    function indexOfAm(arr) {
        let arr2 = [];
        for (let i in arr) {
            if (arr[i].toLocaleLowerCase() === 'am') {
                arr2.push(i)
            }
        }
        return arr2
    }

    function indexOfwas(arr) {
        let arr2 = [];
        for (let i in arr) {
            if (arr[i].toLocaleLowerCase() === 'was') {
                arr2.push(i)
            }
        }
        return arr2
    }

    function replaceIWithWe(arrOfIndex, arr) {
        arrOfIndex.map(item => {
            arr.splice(item, arrOfIndex.length, "we");
        })
        return arr;
    }

    replaceIWithWe(indexOfI(arr), arr);

    function replaceAmWithAre(arrOfIndex, arr) {
        arrOfIndex.map(item => {
            arr.splice(item, arrOfIndex.length, "are");
        })
        return arr;
    }

    replaceAmWithAre(indexOfAm(arr), arr);

    function replaceWasWithWere(arrOfIndex, arr) {
        arrOfIndex.map(item => {
            arr.splice(item, arrOfIndex.length, "were");
        })
        return arr;
    }

    replaceWasWithWere(indexOfwas(arr), arr)

    let finalStr = '';
    
    for(let item of arr){
        finalStr+=item+' ';
    }
    
    finalStr = finalStr.slice(0,finalStr.length-1);
    
    let finalStrFirstLetterCapt = finalStr.charAt(0).toLocaleUpperCase();
    
    finalStr = finalStr.slice(1);
    
    let finalReslut = finalStrFirstLetterCapt + finalStr;
    
    return finalReslut;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
//
// Write a function that "joins" the array of words together and puts a comma "," after every five words
//
// Input:["move","it","away","from","the","street"] 
// Output: "move it away from the, street" 
//

const arrToStr = (arr) => {
    // write your code here
    let string=  arr.join(' ');
    const regex = /\b(\w+\s+\w+\s+\w+\s+\w+\s+\w+)\b/g; // same pattern as before
    const result = string.replace(regex, "$1,");
    
    return result
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 05:
// Optional:
//
// Simon got a string manipulation question for his interview,
// it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// Input:"aaaa bbb sdf"
// Output: "a4 b3 s1d1f1"
//
// Input:"door"
// Output: "d1o2r1"
//
// help him by writing the function
//

const letterCounter = (str) => {
    // write your code here
    const regex = /(.)\1+/g;
    const result = str.replace(regex, (match, char) => char + match.length);
    return result;
}
// -------------------------------------------------------------------------------------------------------


module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };