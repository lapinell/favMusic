"use strict";

function invertData(arrayName) {
    console.log('invert data started');

    //Reverse array
    let reversed = arrayName.reverse();
    // console.log('reversed array:', reversed);

    console.log('invert data ended');

    return reversed;
}



function ascendingData(arrayName) {
    console.log('ascending array begins');

    let ascendingArray = arrayName.sort();

    return ascendingArray;

    console.log('ascending array ends');
}

function descendingData(arrayName) {
    console.log('descending array begins');

    let descendingArray = arrayName.reverse();

    return descendingArray;

    console.log('descending array ends');
}

module.exports = { invertData, ascendingData, descendingData };