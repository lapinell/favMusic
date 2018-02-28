"use strict";

let data = require('./_data.js');
let display = require('./_display.js');
let modify = require('./_modify.js');

let asc = document.getElementById("asc");
let desc = document.getElementById("desc");
let none = document.getElementById("none");
let vert = document.getElementById("vert");
let horz = document.getElementById("horz");

//if vertical is chosen, then modify this way; else modify that way
//if horizontal is chose, modify this way; else that way


//Radio Button Event Listeners

none.addEventListener("click", function(){
    display.verticalArray( 
        modify.originalData( 
            data.songs()
        ),
        data.songsSection()
    );
});

asc.addEventListener("click", function(){
    display.verticalArray( 
        modify.ascendingData( 
            data.songs()
        ),
        data.songsSection()
    );
});

desc.addEventListener("click", function(){
    display.verticalArray( 
        modify.descendingData( 
            data.songs()
        ),
        data.songsSection()
    );
});



horz.addEventListener("click", function() {
    console.log('horz selected');
});


