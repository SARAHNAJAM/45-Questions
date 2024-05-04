"use strict";
// Assignment 16
let guest_list = ['Almas', 'Hasnain', 'Najam', 'Zainab', 'Sarah'];
let not_coming = 'Almas';
let new_guest = 'Ahmed';
// Replace 'Almas' with 'Ahmed' in the array
guest_list[0] = new_guest;
// Add 'Babar' to the beginning of the guest list
guest_list.unshift('Babar');
// Remove 2 guests starting from the middle and add 'Nosheen' instead
guest_list.splice(Math.floor(guest_list.length / 2), 2, 'Nosheen');
// Add 'Khurram' to the end of the guest list
guest_list.push('Khurram');
console.log(`\n\nUnfortunately we are out of space; we have space for only two guests.\n\n`);
// Remove guests until there are only two left
while (guest_list.length > 2) {
    let removed_guest = guest_list.pop();
    console.log(`Dear ${removed_guest}, Sorry, you are not invited for dinner tomorrow.`);
}
// Print invitations for the remaining guests
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear ${guest_list[i]},\n\nYou are invited for a dinner tomorrow.\n\nThank you.`);
}
// Clear the guest list
guest_list.splice(0, guest_list.length);
