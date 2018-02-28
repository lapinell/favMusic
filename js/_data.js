"use strict";

let songsArray = ["Olivia", "The Scientist", "Feels", "Skinny Love", "Dusk Till Dawn", "Inside Out", "Do I Wanna Know?", "Send and Receive (Chachi Jones Remix)", "Hana", "Dropping"];
let artistsArray = ["Shigeto", "Coldplay", "Calvin Harris", "Bon Iver", "Zayn", "Camila Cabello", "Artic Monkeys", "Tycho", "Thomas Fehlmann", "Yosi Horikawa"];
let albumsArray = ["No Better Time Than .", "A Rush of Blood to the Head", "Funk Wav Bounces Vol. 1", "For Emma, Forever Ago", "Dusk Till Dawn Single", "Camila", "AM", "Past is Prologue", "LoveFlow", "Touch"];
let suggestedArray = [false, false, false, false, false, false, false, false, false, false];

let songsSection = () => {
    return document.getElementById("songs");
};

let artistsSection = () => { return document.getElementById("artists");
};

let albumSection = () => { return  document.getElementById("albums");
};

let suggestedSection  = () => { return document.getElementById("suggested");
};

let songs = () => {
    console.log('got songs');
    return songsArray;
};
let artists = () => {
    return artistsArray;
};
let albums = () => {
    return albumsArray;
};
let suggested = () => {
    return suggestedArray;
};

module.exports = { songs, artists, albums, songsSection, artistsSection, suggestedSection, albumSection, suggested};