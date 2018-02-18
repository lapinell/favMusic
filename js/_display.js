"use strict";

let songs = ["Olivia", "The Scientist", "Feels", "Skinny Love", "Dusk Till Dawn", "Inside Out", "Do I Wanna Know?", "What About Us", "Redbone", "Dropping"];
let artists = ["Shigeto", "Coldplay", "Calvin Harris", "Bon Iver", "Zayn", "Camila Cabello", "Artic Monkeys", "P!nk", "Childish Gambino", "Yosi Horikawa"];
let albums = ["No Better Time Than .", "A Rush of Blood to the Head", "Funk Wav Bounces Vol. 1", "For Emma, Forever Ago", "Dusk Till Dawn Single", "Camila", "AM", "Beautiful Trauma", "Awaken, My Love!", "Touch"];
let suggested = [false, false, false, false, false, false, false, false, false, false];

let songsSection = document.getElementById("songs");
let artistsSection = document.getElementById("artists");
let albumSection = document.getElementById("albums");
let suggestedSection = document.getElementById("suggested");

//Parse array
function printArray(A, sectionName) {
    console.log("parsing array begins");
    let arrayToParse = A;
        console.log('array:', A);
    //For each item in the array, put into it's own p element
    for(let i = 0; i < A.length; i++) {
        console.log('item name:', A[i]);
        let newP = "";
        let newSong = A[i];

        newP += `<p class="song">${newSong}</p>`;

        sectionName.innerHTML += newP;
    }
    console.log("parsing array ends");
}
module.exports = { printArray };