"use strict";
// Assignment 31
let current_users = ['almas', 'sarah', 'hasnain', 'zainab', 'Najam'];
let new_users = ["Almas"];
new_users.forEach((user) => {
    if (current_users.some((current_user) => current_user.toLowerCase() === user.toLowerCase())) {
        console.log(`${user} will need to enter a new user name`);
    }
    else {
        console.log(`${user} is available`);
    }
});
