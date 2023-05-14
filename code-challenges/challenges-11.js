'use strict';

// Important Note:
// Kindly use map loop instead of for in all of your solutions

// Resource:
// Map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
// 
// Given an array of values use map to calculate the square of the values.
//  
// Input: [ 2, 8, 3, 5 ]
// Output: [ 4, 64, 9, 25 ]
// 

function square(arr) {
    // write your code here
    arr = arr.map(item => item ** 2);
    return arr;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Given an array of objects of students' first and last name, use the map to return an array off students' full names.
//
// note: the full names should be combined between student's first and last names.
//
// Input:
// [
//     {
//         firstName: 'Adam',
//         lastName: 'Anderson',
//     },
//     {
//         firstName: 'Ben',
//         lastName: 'Zeller',
//     }, 
//     {
//         firstName: 'Peter',
//         lastName: 'Mccord',
//     },
//     {
//         firstName: 'Fred',
//         lastName: 'Sagar',
//     },
//     {
//         firstName: 'Nathan',
//         lastName: 'Weiss',
//     }
// ]
//
// Output: ['Adam Anderson', 'Ben Zeller', 'Peter Mccord', 'Fred Sagar', 'Nathan Weiss']

function fullName(arr) {
    // write your code here    
    let arr2 = [];
    let eachName = '';

    arr.map(item => {
        eachName += Object.values(item)
        // console.log(eachName)
        arr2.push(eachName)
        eachName = '';
    }
    );

    arr2 = arr2.map(item => item.replace(/,/g, " "))

    return arr2;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:

// Given an array of objects use map to calculate the average of the grades 
// and return an array of the objects with a new property called avg (that represent the average of the grades).
//  

// Input:
// var students = [
// 	{
// 			firstName: 'Adam',
//      lastName: 'Anderson',
// 			gradsList: [20, 50, 13, 11, 2, 45, 60, 29]
// },
// {
// 			firstName: 'Ben',
//      lastName: 'Zeller',
// 			gradsList: [20, 10, 11, 11, 2, 5, 3, 2]
// },
// {
// 			firstName: 'Peter',
//      lastName: 'Mccord',
// 	    gradsList: [62, 50, 80, 90, 39, 45, 60, 50]
// },
// {
// 			firstName: 'Fred',
//      lastName: 'Sagar',
// 			gradsList: [20, 10, 18, 11, 2, 20, 3, 10]
// }
// ]
//
// Output:
// [
// 	{
// 			firstName: 'Adam',
//      lastName: 'Anderson',
// 			gradsList: [20,50,13,11,2,45,60,29],
// 			avg: 28.75
// },
// {
// 			firstName: 'Ben',
//      lastName: 'Zeller',
// 			gradsList: [20,10,11,11,2,5,3,2],
//			avg: 8
// },
// {
// 			firstName: 'Peter',
//      lastName: 'Mccord',
// 	    gradsList: [62,50,80,90,39,45,60,50],
//			avg: 59.5
// },
// {
// 			firstName: 'Fred',
//      lastName: 'Sagar',
// 			gradsList: [20,10,18,11,2,20,3,10],
//      avg: 11.75
// 	}
//]
// -------------

function gradesAvg(arr) {
    // write your code here
    function average(array) {
        var sum = array.reduce((a, b) => a + b); // Use reduce to get the sum of all elements
        return sum / array.length;
    }

    // Loop through the array of objects and add a new property for the average score
    arr.map(item => item.avg = average(item.gradsList));

    return arr;

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
//
// Using the previous function result, determine if the student pass or failed,
// and return the array of the objects with a new property called result (with Passed or Failed) 
//
// Note: if his/her avg equal or above 50 the result will be Passed, and Failed if it's less than that

// Input:
// var students = [
// 	{
// 			firstName: 'Adam',
//          lastName: 'Anderson',
// 			gradsList: [20,50,13,11,2,45,60,29],
// 			avg: 28.75
// },
// {
// 			firstName: 'Ben',
//          lastName: 'Zeller',
// 			gradsList: [20,10,11,11,2,5,3,2],
//			avg: 8
// },
// {
// 			firstName: 'Peter',
//          lastName: 'Mccord',
// 	        gradsList: [62,50,80,90,39,45,60,50],
//			avg: 59.5
// },
// {
// 			firstName: 'Fred',
//          lastName: 'Sagar',
// 			gradsList: [20,10,18,11,2,20,3,10],
//          avg: 11.75
// 	}
//]
// 
// Output:
// [
// 	{
// 			firstName: 'Adam',
//      lastName: 'Anderson',
// 			gradsList: [20,50,13,11,2,45,60,29],
// 			avg: 28.75,
//      result: 'Failed'
// },
// {
// 			firstName: 'Ben',
//      lastName: 'Zeller',
// 			gradsList: [20,10,11,11,2,5,3,2],
//			avg: 8,
//      result: 'Failed'
// },
// {
// 			firstName: 'Peter',
//      lastName: 'Mccord',
// 	    gradsList: [62,50,80,90,39,45,60,50],
//			avg: 59.5,
//      result: 'Passed'
// },
// {
// 			firstName: 'Fred',
//      lastName: 'Sagar',
// 			gradsList: [20,10,18,11,2,20,3,10],
//      avg: 11.75,
//      result: 'Failed'
// 	}
// ]

function studentsResult(arr) {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = { square, fullName, gradesAvg, studentsResult };