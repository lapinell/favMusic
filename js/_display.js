"use strict";

//Parse array
function verticalArray(arrayName, sectionName) {
    console.log("vertical array begins");
    console.log('array:', arrayName);
    //For each item in the array, put into it's own p element
    for(let i = 0; i < arrayName.length; i++) {
        console.log('item name:', arrayName[i]);
        let newP = "";
        let newSong = arrayName[i];

        newP += `<p class="song">${newSong}</p>`;

        sectionName.innerHTML += newP;
    }
    console.log("vertical array ends");
}

function horizontalArray(arrayName, sectionName) {
    console.log("horizontal array begins");
    console.log('array:', arrayName);
    let horzArray = arrayName.join(', ');
    console.log(horzArray);
    let newString = `<p> ${ horzArray } </p>`;
    console.log('newString:', newString);
    sectionName.innerHTML += newString;
    console.log("horizontal array ends");
}

module.exports = { verticalArray, horizontalArray };