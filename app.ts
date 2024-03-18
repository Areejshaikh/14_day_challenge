// Day 14 Challenge:

import { title } from "process";

// Question 40:
function albums(type:string , title:string , tracks?:number) {
    let album= {type,title};

    if (tracks) {
        album["tracks"] = tracks;
    }
    return album
}

console.log(albums("Artist One", "The First Album"));
console.log(albums("Artist Two", "The Second Album"));
console.log(albums("Artist Three", "The Third Album", 12));


//Question 41:
let magicians: string[] = ["user1", "user2", "user3"];

function show_magic(magicians: string[]) {
    magicians.forEach(magic => {
        console.log(magic);
    });
}
show_magic(magicians);




// Question 42:
function magic(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "good";
        
    }    
}

magic(magicians) //  reall array
show_magic(magicians) 



