"use strict";
// Day 14 Challenge:
Object.defineProperty(exports, "__esModule", { value: true });
// Question 40:
function albums(type, title, tracks) {
    var album = { type: type, title: title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(albums("Artist One", "The First Album"));
console.log(albums("Artist Two", "The Second Album"));
console.log(albums("Artist Three", "The Third Album", 12));
//Question 41:
var magicians = ["user1", "user2", "user3"];
function show_magic(magicians) {
    magicians.forEach(function (magic) {
        console.log(magic);
    });
}
show_magic(magicians);
// Question 42:
function magic(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "good";
    }
}
magic(magicians); //  reall array
show_magic(magicians);
