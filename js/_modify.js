"use strict";

function invertData(arrayName) {
    let invArray = arrayName.slice(0);
    //Reverse array
   invArray.reverse();
    // console.log('reversed array:', reversed);

    return invArray;
}

function originalData (arrayName) {
    return arrayName;
}

function ascendingData(arrayName) {
    let ascArray = arrayName.slice(0);
    ascArray.sort();

    return ascArray;

}

function descendingData(arrayName) {
    let descArray = arrayName.slice(0);
    descArray.sort().reverse();

    return descArray;

}

module.exports = { invertData, originalData, ascendingData, descendingData };