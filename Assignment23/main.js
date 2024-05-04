"use strict";
// Assignment 23
//equality and inequality
let car = "saboru";
let age = 20;
let numberS = [3, 6, 9, 12, 15];
//**** String Test ****
// True test
console.log("is car == 'saboru' I predict true.");
console.log(car == 'saboru'); // true
// False test
console.log("is car |= 'saboru' I predict false.");
console.log("car |='saboru'"); // false
//LowerCase function test
//true test
console.log("is car.toLowerCase() =='saboru' I predict true.");
console.log(car.toLowerCase() == 'saboru'); // true
//false test
console.log("is car.toLowerCase() == 'toyota' I predict false.");
console.log(car.toLowerCase() == 'toyota'); // false
//****Numerical tests*****
console.log("is age ==20 I predict true.");
console.log(age |= 25); // true
//greater than or less then 
console.log("is age >18, I predict true.");
console.log(age > 18); // true
console.log("is age <15, I predict false.");
console.log(age < 15); // false
// And operator test
//true test with "And" operator
console.log("is 10 < age < 25, I predict true.");
console.log(age < 25 && age > 10); // true
// false test with "or" operator
console.log("is age > 5 or age < 15, I predict false.");
console.log(age > 20 || age < 15); // false
// test wheather is an item is in Array or not
//true test
console.log("is '3' in numbers, i predict true.");
console.log(3 in numberS); // true
// false
console.log("is '7' in numbers, i predict false"); // false
console.log(7 in numberS); // false
