// Assignment 14
let guest_list: string[] = ['Almas', 'Hasnain', 'Najam', 'Zainab', 'Sarah'];

for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear ${guest_list[i]},\n\nYour guest are invited for a dinner tomorrow.\n\nThank you.`);
}

let not_coming: string = 'Almas';
let new_guest: string = 'Ahmed';

guest_list[0] = new_guest; // Replacing 'Almas' with 'Ahmed' in the array

console.log(`Dear ${guest_list[0]},\n\nYour guest are invited for a dinner tomorrow.\n\nThank you.`);