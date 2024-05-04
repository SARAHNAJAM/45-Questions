// Assignment 44

interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any; // Allow additional properties
}

function createCar(manufacturer: string, modelName: string, ...args: [string, any][]): Car {
    const car: Car = {
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