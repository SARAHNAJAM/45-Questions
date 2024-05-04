// Assignment 43

function orderSandwich(...items: string[]): void {
    console.log("Sandwich order summary:");
    if (items.length === 0) {
        console.log("No items selected. Please select some items for your sandwich.");
    } else {
        console.log("You ordered a sandwich with the following items:");
        for (const item of items) {
            console.log("- " + item);
        }
    }
    console.log(); // Add a newline for better readability
}

// Call the function with different numbers of arguments
orderSandwich("Turkey", "Lettuce", "Tomato", "Cheese");
orderSandwich("Ham", "Swiss Cheese");
orderSandwich("Peanut Butter", "Jelly");