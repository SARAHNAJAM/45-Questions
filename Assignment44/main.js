"use strict";
// Assignment 44
function createCar(manufacturer, modelName, ...args) {
    const car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Assign additional properties
    args.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
// Call the function with required and additional properties
const myCar = createCar("Toyota", "Corolla", ["color", "blue"], ["year", 2022]);
// Print the returned object
console.log(myCar);
