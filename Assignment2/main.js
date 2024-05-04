"use strict";
// Assignment 02
let personName = "sarah";
console.log("Lowercase", (personName).toLowerCase());
console.log("Uppercase", (personName).toUpperCase());
console.log("Capitalize", (personName).charAt(0).toUpperCase() + (personName).slice(1));
const words = personName.split(' ');
const titleCaseName = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
console.log("Titlecase (built-in)", titleCaseName);
