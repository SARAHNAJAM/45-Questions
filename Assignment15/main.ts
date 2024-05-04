// Assignment 15

let guest_list: string[] = ['Almas', 'Hasnain', 'Najam', 'Zainab', 'Sarah'];

let not_coming: string = 'Almas';
let new_guest: string = 'Ahmed';

// Replace 'Almas' with 'Ahmed' in the array
guest_list[0] = new_guest;

// Print invitations for all guests
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear ${guest_list[i]},\n\nYour guest are invited for a dinner tomorrow.\n\nThank you.`);
}

// Print the message for the guest who is not coming
console.log(`Mr ${not_coming}, is not coming tomorrow for dinner.`); 