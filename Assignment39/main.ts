// Assignment 39

function make_album(artistName: string, albumName: string) {
    return { artist: artistName, album: albumName };
}

let album1 = make_album('Ali Zafar', 'PSL song');
console.log(album1);

// If you want to create more albums, you can call the function again
let album2 = make_album('Atif Aslam', 'IPL song');
console.log(album2);

let album3 = make_album('Asim Azhar', 'CPL song');
console.log(album3);

console.log(album1);

// it includes treacks number
function make_album2(artistName: string, albumName: string, numberOfTracks?: number) {
    return { artist: artistName, album: albumName, numberOfTracks: numberOfTracks};
}

let album4 = make_album('Ali Zafar', 'PSL song');
console.log(album1);

// If you want to create more albums, you can call the function again
let album5 = make_album('Atif Aslam', 'IPL song');
console.log(album2);

let album6 = make_album('Asim Azhar', 'CPL song');
console.log(album3);