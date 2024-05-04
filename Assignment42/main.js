"use strict";
// Assignments 42
// Define the original array of magicians
const magicians = ["Merlin", "Gandalf", "Dumbledore"];
// Function to make magicians great by adding "the Great" to their names
function makeGreat(names) {
    const greatMagicians = [];
    for (const name of names) {
        greatMagicians.push(name + " the Great");
    }
    return greatMagicians;
}
// Function to display magicians' names
function showMagicians(names) {
    for (const name of names) {
        console.log(name);
    }
}
// Create a copy of the original array and call makeGreat() with it
const greatMagicians = makeGreat([...magicians]);
// Show the original array
console.log("Original Magicians:");
showMagicians(magicians);
// Show the array with "the Great" added to each magician's name
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
