// Assignment 17
 
// print your Array in its original order

let places: string[] = [`karachi`, `Makkah`, `Madina`, `Iran`, `islambad`];
console.log(`orignal` + places);

// print your Array in alphabetical order
console.log( `copy` + [...places].sort()); 

// show your Array is in its original order by printing it
console.log( `orignal` + places);

// print your Array in reverse alphabetical order witout chaning its orignal order
console.log( `copy` + [...places].sort().reverse());

// show that your Array is still in its original order by printing it
console.log( `copy` + [...places].sort().reverse());

// Reverse the order of your list, print the Array to show that its order has changed
console.log(`copy` + [...places].sort() );

// Reverse the order of your list, print the list to show that its back to its orignal order
console.log( `copy` + [...places].sort().reverse()); 

// sort your Array so its alphabetical order. print the Array to show that its order has been changed
console.log(`copy` + [...places].sort() );
 


