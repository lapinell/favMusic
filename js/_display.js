"use strict";

let data = require('./_data.js');
let modify = require('./_modify.js');

//Parse array
function verticalArray(arrayName, sectionName) {
    sectionName.innerHTML = '';
    console.log('cleared:', sectionName.innerHTML);
    for(let i = 0; i < arrayName.length; i++) {    //For each item in the array, put into it's own p element
        let newP = "";
        let newSong = arrayName[i];

        newP += `<p class="song">${newSong}</p>`;

        sectionName.innerHTML += newP;
    }
    console.log('new:', sectionName.innerHTML);
}

function horizontalArray(arrayName, sectionName) {
    let horzArray = arrayName.join(', ');
    let newString = `<p> ${ horzArray } </p>`;
    // console.log('newString:', newString);
    sectionName.innerHTML += newString;
}

module.exports = { verticalArray, horizontalArray };