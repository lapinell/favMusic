"use strict";

//Parse array
function verticalArray(arrayName, sectionName) {
       //For each item in the array, put into it's own p element
    for(let i = 0; i < arrayName.length; i++) {
        let newP = "";
        let newSong = arrayName[i];

        newP += `<p class="song">${newSong}</p>`;

        sectionName.innerHTML += newP;
    }
}

function horizontalArray(arrayName, sectionName) {
    let horzArray = arrayName.join(', ');
    let newString = `<p> ${ horzArray } </p>`;
    console.log('newString:', newString);
    sectionName.innerHTML += newString;
}

module.exports = { verticalArray, horizontalArray };