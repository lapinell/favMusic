"use strict";

function invertData(arrayName) {

    //Reverse array
    let reversed = arrayName.reverse();
    // console.log('reversed array:', reversed);

    return reversed;
}



function ascendingData(arrayName) {

    let ascendingArray = arrayName.sort();

    return ascendingArray;

}

function descendingData(arrayName) {

    let descendingArray = arrayName.reverse();

    return descendingArray;

}

module.exports = { invertData, ascendingData, descendingData };