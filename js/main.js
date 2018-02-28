"use strict";

// Create three separate arrays for songs, albums and artists
// The song array should be initialized with 10 songs, and for each subsequent array should hold the corresponding data
//Each  song is from a unique artist and album
let data = require('./_data.js');

console.log(data.songs(), data.artists(), data.albums(), data.suggested());

//Required Files

let display = require("./_display");
let modify = require("./_modify");
let change = require("./_switch");

///Print to DOM
// display.verticalArray(songs, songsSection) ;
display.verticalArray(data.artists(), data.artistsSection()) ;
display.verticalArray(data.albums(), data.albumSection()) ;
display.verticalArray(data.suggested(), data.suggestedSection()) ;
