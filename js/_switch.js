"use strict";

let data = require('./_data.js');
let display = require('./_display.js');
let modify = require('./_modify.js');

let asc = document.getElementById("asc");
let desc = document.getElementById("desc");
let none = document.getElementById("none");
let vert = document.getElementById("vert");
let horz = document.getElementById("horz");

//Radio Button Event Listeners
asc.addEventListener("change", function() {console.log('asc selected');});

desc.addEventListener("change", function() {console.log('desc selected');});

none.addEventListener("change", function() {console.log('none selected');});

vert.addEventListener("change", function() {console.log('vert selected');});

horz.addEventListener("change", function() {console.log('horz selected');});


