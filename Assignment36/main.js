"use strict";
// Assignment
let size = ['medium', 'large'];
const defaultMessage = "I love TypeScript!";
let mediumShirt = `Size of shirt is: ${size[0]} - ${defaultMessage}`;
let largeShirt = `Size of shirt is: ${size[1]} - ${defaultMessage}`;
let smallShirt = `Size of shirt is: small and i love painting`; // No size available for small
let extraLargeShirt = `Size of shirt is: extraLarge and i love swimming`; // No size available for extra
function make_tshirt() {
    let simpleFunction = (mediumShirt);
    console.log(simpleFunction); //);
    return simpleFunction;
}
let responce = make_tshirt();
console.log(responce);
