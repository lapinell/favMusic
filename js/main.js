"use strict";

// Create three separate arrays for songs, albums and artists
// The song array should be initialized with 10 songs, and for each subsequent array should hold the corresponding data
//Each  song is from a unique artist and album

let songs = ["Olivia", "The Scientist", "Feels", "Skinny Love", "Dusk Till Dawn", "Inside Out", "Do I Wanna Know?", "What About Us", "Redbone", "Dropping"];
let artists = ["Shigeto", "Coldplay", "Calvin Harris", "Bon Iver", "Zayn", "Camila Cabello", "Artic Monkeys", "P!nk", "Childish Gambino", "Yosi Horikawa"];
let albums = ["No Better Time Than .", "A Rush of Blood to the Head", "Funk Wav Bounces Vol. 1", "For Emma, Forever Ago", "Dusk Till Dawn Single", "Camila", "AM", "Beautiful Trauma", "Awaken, My Love!", "Touch"];
let suggested = [false, false, false, false, false, false, false, false, false, false];

let songsSection = document.getElementById("songs");
let artistsSection = document.getElementById("artists");
let albumSection = document.getElementById("albums");
let suggestedSection = document.getElementById("suggested");

console.log(songs, artists, albums, suggested);

//Required Files

let display = require("./_display");

display.printArray(songs, songsSection) ;
display.printArray(artists, artistsSection) ;
display.printArray(albums, albumSection) ;
display.printArray(suggested, suggestedSection) ;