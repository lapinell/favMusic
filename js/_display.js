"use strict";

//Parse array
function printArray(arrayName, sectionName) {
    console.log("parsing array begins");
    let arrayToParse = arrayName;
        console.log('array:', arrayName);
    //For each item in the array, put into it's own p element
    for(let i = 0; i < arrayName.length; i++) {
        console.log('item name:', arrayName[i]);
        let newP = "";
        let newSong = arrayName[i];

        newP += `<p class="song">${newSong}</p>`;

        sectionName.innerHTML += newP;
    }
    console.log("parsing array ends");
}
module.exports = { printArray };