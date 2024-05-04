"use strict";
// Assignment 17
// print your Array in its original order
let places = [`karachi`, `Makkah`, `Madina`, `Iran`, `islambad`];
console.log(`orignal` + places);
// print your Array in alphabetical order
console.log(`copy` + [...places].sort());
// show your Array is in its original order by printing it
console.log(`orignal` + places);
// print your Array in reverse alphabetical order witout chaning its orignal order
console.log(`copy` + [...places].sort().reverse());
