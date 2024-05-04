"use strict";
// Assignment 41
// Define the Magician class
class Magician {
    constructor(name) {
        this.name = name;
    }
}
// Function to make magicians great
function makeGreat(magicians) {
    for (let magician of magicians) {
        magician.name = `the Great ${magician.name}`;
    }
}
// Function to display magicians
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician.name);
    }
}
// Test the functions
let magicians = [
    new Magician("Harry"),
    new Magician("David"),
    new Magician("Chris")
];
console.log("Original Magicians:");
showMagicians(magicians);
makeGreat(magicians);
console.log("\nMagicians after adding 'the Great':");
showMagicians(magicians);
