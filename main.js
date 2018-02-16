// Create three separate arrays for songs, albums and artists
// The song array should be initialized with 10 songs, and for each subsequent array should hold the corresponding data
//Each  song is from a unique artist and album
let songs = ["The Weekend", "The Scientist", "Feels", "Skinny Love", "Dusk Till Dawn", "Inside Out", "Do I Wanna Know?", "What About Us", "Redbone", "Vai Malandra"];
let artists = ["SZA", "Coldplay", "Calvin Harris", "Bon Iver", "Zayn", "Camila Cabello", "Artic Monkeys", "P!nk", "Childish Gambino", "Anitta"];
let albums = ["Ctrl", "A Rush of Blood to the Head", "Funk Wav Bounces Vol. 1", "For Emma, Forever Ago", "Dusk Till Dawn Single", "Camila", "AM", "Beautiful Trauma", "Awaken, My Love!", "Vai Malandra Single"];

let songsSection = document.getElementById("songs");
let artistsSection = document.getElementById("artists");
let albumSection = document.getElementById("albums");

console.log(songs, artists, albums);